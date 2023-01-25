import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import logo from '@/assets/image/logo/logo.png';
import logoDark from '@/assets/image/logo/logo-dark.png';

export default function Navbar({ direction, items }) {

    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('darkMode') && localStorage.getItem('darkMode') == "true") {
            applyDarkMode(true);
        }
        else {
            applyDarkMode(false);
        }
    }, [])

    const applyDarkMode = (darkMode) => {
        setDarkMode(darkMode)
        localStorage.setItem('darkMode', darkMode)
    }

    return (
        <>
            <Helmet
                htmlAttributes={{
                    class: darkMode ? "dark" : "light",
                }}
            />
            <header class="py-5 px-5 sm:px-8 flex items-center  mb-20">
                <a href="/">
                    <img
                        class="block w-auto max-h-[26px]"
                        alt="Logo"
                        src={darkMode ? logoDark : logo}
                    />
                </a>
                <div class="flex gap-1 ml-auto">
                    <button
                        class="p-1.5 cursor-pointer "
                        aria-label="Toggle light/dark themes"
                        onClick={() => applyDarkMode(!darkMode)}
                    >
                        {darkMode ? (
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                stroke-width="0"
                                viewBox="0 0 24 24"
                                class="w-5 h-auto"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path fill="none" d="M0 0h24v24H0V0z"></path>
                                <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495l1.408 1.407-1.79 1.79-1.407-1.408zm-1.8 15.115l1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96l1.41 1.41 1.79-1.8-1.41-1.41z"></path>
                            </svg>
                        ) : (
                            <svg
                                stroke="currentColor"
                                fill="none"
                                stroke-width="2"
                                viewBox="0 0 24 24"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="w-5 h-auto"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <desc></desc>
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
                            </svg>
                        )}
                    </button>
                </div>
            </header>
        </>
    );
}
