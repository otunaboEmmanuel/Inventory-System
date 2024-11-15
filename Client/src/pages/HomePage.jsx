import React, { useEffect, useState } from 'react';
import SidebarWithRoleControl from '../components/SidebarWithRoleControl'; // Import the SidebarWithRoleControl
import Container from '../components/Container';
import { AuthProvider } from '../components/Auth';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import CloseIcon from '@mui/icons-material/Close'; // Import CloseIcon
import Logo from "../assets/inventory-logo.svg";
import HomeIcon from '@mui/icons-material/Home';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import CategoryIcon from '@mui/icons-material/Category';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import EmailIcon from '@mui/icons-material/Email';
import LogoutIcon from '@mui/icons-material/Logout';
import { Settings } from '@mui/icons-material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SidebarItems from '../components/SidebarItems';

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
            <div className="home-page flex flex-row w-full min-h-screen">
                {/* Sidebar for larger screens */}
                <div className="hidden sm:flex">
                    <SidebarWithRoleControl />
                </div>

                {/* Top navbar for small screens */}
                {!sidebarOpen &&
                    <div className={`fixed w-full top-0 left-0 right-0 z-10 transition-colors duration-100 ${scrolling ? 'bg-white' : 'bg-white'} md:hidden flex items-center justify-between p-4 shadow-md`}>
                        <div className='flex flex-row items-center gap-2'>
                            <img src={Logo} alt="Inventory-Logo" className='w-10' />
                            <h1 className="text-xl font-bold">InventoryHUB</h1>
                        </div>
                        <div onClick={toggleSidebar} className="cursor-pointer">
                            {sidebarOpen ? <CloseIcon /> : <DensityMediumIcon />}
                        </div>
                    </div>
                }

                {/* Sidebar for small screens */}
                {sidebarOpen && (
                    <div className="bg-white flex flex-col items-center shadow-lg min-h-screen w-full">
                        <div className='flex flex-col w-full p-4 items-center justify-between '>
                            <div className='w-full flex flex-row items-center justify-between'>
                                <div className='flex flex-row items-center gap-2'>
                                    <img src={Logo} alt="Inventory-Logo" className='w-10' />
                                    <h1 className="text-xl font-bold">InventoryHUB</h1>
                                </div>
                                <div onClick={toggleSidebar} className="cursor-pointer">
                                    {sidebarOpen ? <CloseIcon /> : <DensityMediumIcon />}
                                </div>
                            </div>

                        </div>
                        <SidebarItems />
                    </div>
                )}

                {/* Main content container */}
                {!sidebarOpen && (<div className={`flex-1 w-full ${scrolling ? 'pt-14' : ''} transition-padding duration-300`}>
                    <Container />
                </div>)
                }

            </div>
        </AuthProvider>
    );
};

export default HomePage;