import React, { useEffect, useRef } from 'react';
import { BASE_FRONTEND_URL } from '../../../config';

const Auth = () => {
    const buttonContainerRef = useRef(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://telegram.org/js/telegram-widget.js?22';
        script.async = true;
        script.setAttribute('data-telegram-login', 'attengo_service_dev_bot');
        script.setAttribute('data-size', 'large');
        script.setAttribute('data-auth-url', `${BASE_FRONTEND_URL}/auth/callback`);

        script.onload = () => {
            if (buttonContainerRef.current) {
                buttonContainerRef.current.appendChild(script);
            }
        };


        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

};

export default Auth;
