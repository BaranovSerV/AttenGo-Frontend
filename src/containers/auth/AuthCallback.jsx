import React, { useEffect, useState } from 'react';
import { loginUser } from '../../api/Auth';

const AuthCallback = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
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

        const userData = { id, first_name, last_name, username, photo_url, auth_date, hash };

        async function fetchTokens() {
            try {
                const data = await loginUser(userData);
                console.log('Tokens:', data);
                setSuccess(true);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        fetchTokens();
    }, []); // Убрали userData из зависимостей

    if (loading) return <div className="loading">Loading...</div>;
    if (error) return <div className="error">Error: {error}</div>;
    if (success) return <div className="success">Success!</div>;

    return null;
};

export default AuthCallback;
