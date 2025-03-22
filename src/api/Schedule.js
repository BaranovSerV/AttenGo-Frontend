import axios from 'axios';
import { BASE_BACKEND_URL } from '../../config';
import { getAccessToken } from './Auth'

export const fetchSchedule = async (startTime, endTime) => {
    const accessToken = await getAccessToken();

    const response = await axios.get(`${BASE_BACKEND_URL}/schedule`, {
        params: {
            start_time: startTime,
            end_time: endTime,
        },
        headers: {
            'Authorization': `Bearer ${accessToken}`,
        },
        withCredentials: true,
    });

    return response;
};

export const submitAttendance = async (date, attendanceData) => {
    try {
        const response = await axios.post(
            `${BASE_BACKEND_URL}/attendance/`,
            {
                date,
                attendance_data: attendanceData
            },
            {
                withCredentials: true,
            }
        );
        return response.data;
    } catch (error) {
        console.error('Error submitting attendance:', error);
        throw error;
    }
};

