import React from 'react';
import SidebarWithRoleControl from '../components/SidebarWithRoleControl'; // Import the SidebarWithRoleControl
import Container from '../components/Container';
import { AuthProvider } from '../components/Auth';

const HomePage = () => {
    return (
        <AuthProvider>
            <div className="home-page flex flex-row w-full min-h-screen">
                <SidebarWithRoleControl /> {/* Use SidebarWithRoleControl instead of Sidebar */}
                <Container />
            </div>
        </AuthProvider>
    );
};

export default HomePage;