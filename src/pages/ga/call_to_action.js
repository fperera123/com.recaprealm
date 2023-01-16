import React, { useEffect } from 'react'
import { Link } from '@/components'
import './styles.scss';
import { navigate } from 'gatsby';
import { useLocation } from '@reach/router';

export default function CallToAction() {

    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const action = params.get("action");
        const redirect = params.get("redirect");


        setTimeout(() => {
            try {
                // eslint-disable-next-line  no-undef
                gtag('event', 'click_to_call', {
                    'page': redirect,
                    'action': action,
                });

            }
            catch (e) {

            }

            const x = typeof window !== "undefined" ? window.location.href = action : null;
            window.location.href = redirect;
        }, 900);
    }, []);

    return (
        <>
            <div className='w-full vh-100 !bg-primary'>
                <div className="loading">
                    <p>Please wait</p>
                    <span><i></i><i></i></span>
                </div>
            </div>
        </>
    )
}