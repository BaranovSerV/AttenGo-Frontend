import axios from "axios";
import { BASE_BACKEND_URL } from "../../config";
import { getAccessToken } from './Auth'

export const createGroup = async (groupName, universityGroupId) => {
    try {
        const accessToken = await getAccessToken();

        const response = await axios.post(
            `${BASE_BACKEND_URL}/group/create`,
            {
                local_group_name: groupName,
                university_group_id: universityGroupId
            },
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                },
                withCredentials: true,
            }
        );
        return response;
    } catch (error) {
        throw new Error("Ошибка при создании группы. Попробуйте снова.");
    }
};
