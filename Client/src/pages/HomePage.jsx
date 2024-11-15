import React, { useEffect, useState } from 'react';
import SidebarWithRoleControl from '../components/SidebarWithRoleControl'; // Import the SidebarWithRoleControl
import Container from '../components/Container';
import { AuthProvider } from '../components/Auth';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import CloseIcon from '@mui/icons-material/Close'; // Import CloseIcon
import Logo from "../assets/inventory-logo.svg";
import SidebarItems from '../components/SidebarItems';
import TopNav from '../components/topnav/TopNav';

const HomePage = () => {
    const [scrolling, setScrolling] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false); // State to manage sidebar visibility

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    };

    const toggleSidebar = () => {
        setSidebarOpen((prev) => !prev);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <AuthProvider>
            <div className="home-page flex sm:flex-row flex-col w-full min-h-screen">
                {/* Sidebar for larger screens */}
                <div className="hidden sm:flex">
                    <SidebarWithRoleControl />
                </div>

                {/* Top navbar for small screens */}
                <TopNav sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />                

                {/* Main content container */}
                {!sidebarOpen && (
                    <div className={`flex-1 w-full ${scrolling ? 'pt-14' : ''} transition-padding duration-300`}>
                        <Container />
                    </div>
                )}
            </div>
        </AuthProvider>
    );
};

export default HomePage;