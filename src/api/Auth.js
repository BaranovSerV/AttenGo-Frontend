import { BASE_BACKEND_URL } from '../../config';
import Cookies from 'js-cookie';

export async function loginUser(userData) {
    try {
        const response = await fetch(`${BASE_BACKEND_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
            credentials: 'include',
        });

        if (!response.ok) {
            throw new Error('Failed to get tokens');
        }

        return await response.json();
    } catch (error) {
        throw new Error(error.message);
    }
}

export const refreshAccessToken = async () => {
    try {
        console.log("Попытка обновить токен...");
        const response = await fetch(`${BASE_BACKEND_URL}/auth/refresh`, {
            method: "GET",
            credentials: "include",
        });

        if (!response.ok) {
            throw new Error("Не удалось обновить токен");
        }

        const data = await response.json();

        console.log("Токен успешно обновлен:", data.access_token);

        document.cookie = `access_token=${data.access_token}; path=/; SameSite=Strict`;

        return data.access_token;
    } catch (error) {
        console.error("Ошибка при обновлении токена:", error);
        return null;
    }
};

export const getAccessToken = async () => {
    let accessToken = Cookies.get("access_token");

    if (!accessToken) {
        console.log("Токен не найден в cookies. Попытка обновить токен...");
        accessToken = await refreshAccessToken();
    } else {
        console.log("Токен найден в cookies:", accessToken);
    }

    return accessToken;
};