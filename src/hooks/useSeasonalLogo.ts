import { useState, useEffect } from 'react';

export function useSeasonalLogo() {
    // Initialize with default to prevent hydration mismatch/flicker
    const [logoPath, setLogoPath] = useState('/logo.png');

    useEffect(() => {
        const date = new Date();
        const month = date.getMonth(); // 0 = Jan, 11 = Dec

        // Logic: If month is X, use seasonal logo
        // IMPORTANT: You must ensure these files exist in /public, otherwise it will show broken image.

        if (month === 11) { // December
            setLogoPath('/logo-xmas.jpg');
        } else if (month === 9) { // October
            setLogoPath('/logo-halloween.png');
        } else {
            setLogoPath('/logo.png');
        }
    }, []);

    return logoPath;
}
