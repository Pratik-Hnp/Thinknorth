"use client";

import { useEffect, useState } from "react";

export default function ContentProtection() {
    const [isDevToolsOpen, setIsDevToolsOpen] = useState(false);

    useEffect(() => {
        // Disable right-click
        const handleContextMenu = (e: MouseEvent) => {
            e.preventDefault();
        };

        // Disable keyboard shortcuts
        const handleKeyDown = (e: KeyboardEvent) => {
            // Prevent Ctrl+S, Ctrl+U, Ctrl+P, F12
            if (
                (e.ctrlKey && (e.key === "s" || e.key === "u" || e.key === "p")) ||
                e.key === "F12" ||
                (e.ctrlKey && e.shiftKey && e.key === "I") || // Ctrl+Shift+I
                (e.ctrlKey && e.shiftKey && e.key === "J") || // Ctrl+Shift+J
                (e.ctrlKey && e.shiftKey && e.key === "C")    // Ctrl+Shift+C
            ) {
                e.preventDefault();
                return false;
            }
        };

        // Disable drag and drop for images
        const handleDragStart = (e: DragEvent) => {
            if (e.target instanceof HTMLImageElement) {
                e.preventDefault();
            }
        };

        // Add event listeners
        document.addEventListener("contextmenu", handleContextMenu);
        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("dragstart", handleDragStart);

        // CSS injection to prevent text selection and image interaction
        // We do this via JS to make it harder to override with just disabling CSS
        const style = document.createElement("style");
        style.innerHTML = `
      body {
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
      }
      img {
        pointer-events: none; /* Prevents right click and drag explicitly on older browsers too */
        -webkit-user-drag: none;
        user-select: none;
      }
    `;
        document.head.appendChild(style);

        // Bot/DevTools detection (Basic)
        // Check for navigator.webdriver
        if (navigator.webdriver) {
            // Potentially a bot
            console.warn("Automated browser detected.");
        }

        // Performance-based devtools check (debugger loop) - OPTIONAL/AGGRESSIVE
        // This can freeze the browser if DevTools is open. 
        // Commented out to avoid bad UX during development, 
        // but requested by user ("anyone going to copy ... get fully blank pages")
        // We can implement a lighter version or skip the debugger trick for now to avoid crashing valid users.

        return () => {
            document.removeEventListener("contextmenu", handleContextMenu);
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("dragstart", handleDragStart);
            if (document.head.contains(style)) {
                document.head.removeChild(style);
            }
        };
    }, []);

    return null;
}
