import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const RootLayout = () => {
    return (
        <div className='flex flex-col min-h-screen '>
            <header className='w-full container mx-auto'>
                <Navbar />
            </header>
            <main className="grow container mx-auto ">
                <Outlet />
            </main>
            <footer className='w-full'>
                <Footer />
            </footer>
        </div>
    );
};

export default RootLayout;