"use client";

import { useEffect, useState } from "react";

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=[]{}|;':,./<>?";

interface HackerTextProps {
    text: string;
    className?: string;
}

export default function HackerText({ text, className = "" }: HackerTextProps) {
    const [displayText, setDisplayText] = useState(text);

    useEffect(() => {
        let iterations = 0;

        const interval = setInterval(() => {
            setDisplayText((prev) =>
                prev
                    .split("")
                    .map((letter, index) => {
                        if (index < iterations) {
                            return text[index];
                        }
                        return LETTERS[Math.floor(Math.random() * LETTERS.length)];
                    })
                    .join("")
            );

            if (iterations >= text.length) {
                clearInterval(interval);
            }

            iterations += 1 / 3;
        }, 30);

        return () => clearInterval(interval);
    }, [text]);

    return <span className={className}>{displayText}</span>;
}
