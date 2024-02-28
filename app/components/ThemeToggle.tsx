'use client';
import { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";

const ThemeToggle = () => {
    // State to manage whether dark mode is active or not
    const [darkMode, setDarkMode] = useState(false);

    // Function to toggle the theme
    const handleToggle = () => {
        setDarkMode(!darkMode); // Toggle the state

        // Apply or remove the 'dark' class based on the new state
        if (!darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }

    return (
        <div>
            <Switch onClick={handleToggle} />
        </div>
    )
};

export default ThemeToggle;
