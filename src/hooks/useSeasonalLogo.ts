import { useState, useEffect } from 'react';

export function useSeasonalLogo() {
    // Calculate synchronously to avoid hydration mismatch/flicker
    const [logoPath, setLogoPath] = useState(() => {
        const date = new Date();
        const month = date.getMonth(); // 0 = Jan, 11 = Dec
        const day = date.getDate();

        // New Year (Jan 1 - Jan 5)
        if (month === 0 && day <= 5) return '/logo-new-year.png';

        // Sri Lankan Independence Day (Feb 4)
        if (month === 1 && day === 4) return '/logo-independence.png';

        // Valentine's Day (Feb 14)
        if (month === 1 && day === 14) return '/logo-valentines.png';

        // Halloween (Oct 25 - Oct 31)
        if (month === 9 && day >= 25) return '/logo-halloween.png';

        // Christmas / Holiday Season (Dec 20 - Dec 31)
        if (month === 11 && day >= 20) return '/logo-xmas.jpg';

        // Default
        return '/home-logo.png';
    });

    return logoPath;
}
