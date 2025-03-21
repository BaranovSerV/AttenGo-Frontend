import React, { useEffect, useState } from 'react';
import { BASE_BACKEND_URL } from '../../../config';

const AuthCallback = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const first_name = urlParams.get('first_name');
    const last_name = urlParams.get('last_name');
    const username = urlParams.get('username');
    const photo_url = urlParams.get('photo_url');
    const auth_date = urlParams.get('auth_date');
    const hash = urlParams.get('hash');

    if (!id || !first_name || !last_name || !username || !photo_url || !auth_date || !hash) {
        setError('Missing required parameters!');
        setLoading(false);
        return;
    }

    const userData = {
        id,
        first_name,
        last_name,
        username,
        photo_url,
        auth_date,
        hash
    };

    useEffect(() => {
        async function fetchTokens() {
            try {
                const response = await fetch(`${BASE_BACKEND_URL}/auth/login`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(userData),
                    credentials: "include",
                });

                if (!response.ok) {
                    throw new Error('Failed to get tokens');
                }

                const data = await response.json();

                console.log('Tokens:', data);
                setLoading(false);
                setSuccess(true);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        }

        fetchTokens();
    }, [userData]);

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    if (error) {
        return <div className="error">Error: {error}</div>;
    }

    if (success) {
        return (
            <div className="success">
            </div>
        );
    }

    return null;
};

export default AuthCallback;
