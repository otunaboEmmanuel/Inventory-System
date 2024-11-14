// import React from 'react'
// import SidebarWithRoleControl from '../components/SidebarWithRoleControl'; // Import the SidebarWithRoleControl
// import Container from '../components/Container';
// import { AuthProvider } from '../components/Auth';
// const Inventory = () => {
//     return (
//         <AuthProvider>
//             <div className="home-page flex flex-row w-full min-h-screen">
//                 <SidebarWithRoleControl /> {/* Use SidebarWithRoleControl instead of Sidebar */}
//                 <div className="ml-64 w-full bg-[#f4f4f4]">
//                     Inventory
//                 </div>
//             </div>
//         </AuthProvider>
//     )
// }

// export default Inventory

import React, { useState } from 'react';
import SidebarWithRoleControl from '../components/SidebarWithRoleControl'; // Import the SidebarWithRoleControl
import { AuthProvider } from '../components/Auth';

const Inventory = () => {
    // Sample inventory data
    const [inventory, setInventory] = useState([
        { id: 1, model: 'iPhone 13', price: 799, quantity: 10 },
        { id: 2, model: 'Samsung Galaxy S21', price: 699, quantity: 5 },
        { id: 3, model: 'Google Pixel 6', price: 599, quantity: 8 },
        { id: 4, model: 'OnePlus 9', price: 729, quantity: 3 },
    ]);

    const handleAddStock = (id) => {
        setInventory(inventory.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        ));
    };

    const handleRemoveStock = (id) => {
        setInventory(inventory.map(item =>
            item.id === id && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item
        ));
    };

    return (
        <AuthProvider>
            <div className="home-page flex flex-row w-full min-h-screen">
                <SidebarWithRoleControl />
                <div className="ml-64 w-full bg-[#f4f4f4] p-8">
                    <h1 className="text-3xl font-bold mb-6">Inventory</h1>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <table className="min-w-full">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="py-2 px-4 text-left">Model</th>
                                    <th className="py-2 px-4 text-left">Price</th>
                                    <th className="py-2 px-4 text-left">Quantity</th>
                                    <th className="py-2 px-4 text-left">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {inventory.map(item => (
                                    <tr key={item.id} className="border-b">
                                        <td className="py-2 px-4">{item.model}</td>
                                        <td className="py-2 px-4">${item.price}</td>
                                        <td className="py-2 px-4">{item.quantity}</td>
                                        <td className="py-2 px-4">
                                            <button
                                                onClick={() => handleAddStock(item.id)}
                                                className="bg-green-500 text-white px-2 py-1 rounded-md mr-2"
                                            >
                                                Add Stock
                                            </button>
                                            <button
                                                onClick={() => handleRemoveStock(item.id)}
                                                className="bg-red-500 text-white px-2 py-1 rounded-md"
                                            >
                                                Remove Stock
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthProvider>
    );
};

export default Inventory;