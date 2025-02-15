import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import './globals.css';
import Providers from './Providers';
import classnames from 'classnames';
import Link from 'next/link';
import LoginComponent from "@/components/LoginComponent";
import {Suspense} from "react";
import LoadingSearch from "@/app/search/loading";

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
    title: 'write34', description: 'Share and explore NovelAI Scenarios',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    // TODO: Figure out dynamic theme switching between dark and light modes
    return (

        <html lang="en" suppressHydrationWarning>
        <head>
            <script async defer src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
            <noscript><img src="https://queue.simpleanalyticscdn.com/noscript.gif" alt="" referrerPolicy="no-referrer-when-downgrade" /></noscript>
        </head>
        <body
            className={classnames('min-h-screen mx-auto max-w-6xl flex flex-col bg-white dark:bg-gray-900', inter.className)}>
        <Providers>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    {/*<div className="dropdown">*/}
                    {/*    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">*/}
                    {/*        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>*/}
                    {/*    </div>*/}
                    {/*    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">*/}
                    {/*        <li><a>Homepage</a></li>*/}
                    {/*        <li><a>Portfolio</a></li>*/}
                    {/*        <li><a>About</a></li>*/}
                    {/*    </ul>*/}
                    {/*</div>*/}
                    <Link
                        className="btn btn-ghost"
                        href="/">
                        Scenarios
                    </Link>
                    <Link
                        className="btn btn-ghost"
                        href="/tags">
                        Tags
                    </Link>
                </div>
                <div className="navbar-center">
                    <Link
                        className="btn btn-ghost text-xl"
                        href="/">
                        write34
                    </Link>
                </div>

                <div className="navbar-end">
                    <Link href="/search">
                        <button className="btn btn-ghost btn-circle mr-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                            </svg>
                        </button>
                    </Link>
                    <LoginComponent />
                </div>
            </div>
            <Suspense fallback={<LoadingSearch/>}>
                {children}
            </Suspense>
        </Providers>
        </body>
        </html>
    );
}
