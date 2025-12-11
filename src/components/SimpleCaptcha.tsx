"use client";

import { useState, useEffect, useCallback, forwardRef, useImperativeHandle } from "react";
import { RefreshCcw } from "lucide-react";

interface SimpleCaptchaProps {
    onValidate: (isValid: boolean) => void;
}

export interface SimpleCaptchaHandle {
    reset: () => void;
}

const SimpleCaptcha = forwardRef<SimpleCaptchaHandle, SimpleCaptchaProps>(({ onValidate }, ref) => {
    const [captchaCode, setCaptchaCode] = useState("");
    const [userInput, setUserInput] = useState("");
    const [isClient, setIsClient] = useState(false);

    // Generate random 6-character alphanumeric code
    const generateCaptcha = useCallback(() => {
        const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let code = "";
        for (let i = 0; i < 6; i++) {
            code += chars[Math.floor(Math.random() * chars.length)];
        }
        setCaptchaCode(code);
        setUserInput("");
        onValidate(false);
    }, [onValidate]);

    useEffect(() => {
        setIsClient(true);
        generateCaptcha();
    }, [generateCaptcha]);

    useImperativeHandle(ref, () => ({
        reset: generateCaptcha
    }));

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.toUpperCase();
        setUserInput(value);
        onValidate(value === captchaCode);
    };

    if (!isClient) return null;

    return (
        <div className="space-y-3">
            <div className="flex items-center gap-4">
                {/* Captcha Display */}
                <div
                    className="bg-gray-100 p-3 rounded-lg select-none font-mono text-xl font-bold tracking-widest text-gray-700 w-32 text-center border border-gray-300 relative overflow-hidden"
                    style={{
                        backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, #e5e7eb 10px, #e5e7eb 20px)"
                    }}
                >
                    {captchaCode}
                </div>

                {/* Refresh Button */}
                <button
                    type="button"
                    onClick={generateCaptcha}
                    className="p-2 text-gray-500 hover:text-brand transition-colors rounded-full hover:bg-gray-100"
                    title="Refresh Captcha"
                >
                    <RefreshCcw size={20} />
                </button>
            </div>

            {/* Input Field */}
            <input
                type="text"
                value={userInput}
                onChange={handleChange}
                placeholder="Enter the code from above"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand focus:border-brand outline-hidden transition-all text-sm"
                maxLength={6}
            />
        </div>
    );
});

SimpleCaptcha.displayName = "SimpleCaptcha";

export default SimpleCaptcha;
