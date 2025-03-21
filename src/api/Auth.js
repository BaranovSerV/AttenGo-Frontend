export async function loginUser(userData, BASE_BACKEND_URL) {
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
