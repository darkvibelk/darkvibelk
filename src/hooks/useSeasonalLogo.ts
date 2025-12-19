import { useState, useEffect } from 'react';

export function useSeasonalLogo() {
    // Calculate synchronously to avoid hydration mismatch/flicker
    // This allows the server and client to agree immediately (assuming sync dates)
    const [logoPath, setLogoPath] = useState(() => {
        const date = new Date();
        const month = date.getMonth(); // 0 = Jan, 11 = Dec

        if (month === 11) return '/logo-xmas.jpg';
        if (month === 9) return '/logo-halloween.png';
        return '/logo.png';
    });

    return logoPath;
}
