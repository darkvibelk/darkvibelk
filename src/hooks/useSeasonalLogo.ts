import { useState } from 'react';

export function useSeasonalLogo() {
    // Calculate synchronously to avoid hydration mismatch/flicker
    const [logoPath] = useState(() => {
        const date = new Date();
        const month = date.getMonth(); // 0 = Jan, 11 = Dec
        const day = date.getDate();

        // 1. New Year (Jan 1 - Jan 5)
        if (month === 0 && day <= 5) return '/logo-new-year.png';

        // 2. Thai Pongal [Tamil] (Jan 13 - Jan 16)
        if (month === 0 && day >= 13 && day <= 16) return '/logo-thai-pongal.png';

        // 3. Sri Lankan Independence Day [National] (Feb 4)
        if (month === 1 && day === 4) return '/logo-independence.png';

        // 4. Valentine's Day [Global] (Feb 12 - Feb 15)
        if (month === 1 && day >= 12 && day <= 15) return '/logo-valentines.png';

        // 5. Eid al-Fitr [Muslim] (2026: March 18 - March 22)
        if (month === 2 && day >= 18 && day <= 22) return '/logo-eid-fitr.png';

        // 6. Easter [Christian] (2026: April 3 - April 6)
        if (month === 3 && day >= 3 && day <= 6) return '/logo-easter.png';

        // 7. Sinhala & Tamil New Year [Sinhala/Tamil] (Apr 12 - Apr 16)
        if (month === 3 && day >= 12 && day <= 16) return '/logo-avurudu.png';

        // 8. Vesak Festival [Buddhist] (2026: April 30 - May 4)
        if ((month === 3 && day === 30) || (month === 4 && day >= 1 && day <= 4)) return '/logo-vesak.png';

        // 9. Eid al-Adha [Muslim] (2026: May 25 - May 29)
        if (month === 4 && day >= 25 && day <= 29) return '/logo-eid-adha.png';

        // 10. Halloween [Global] (Oct 25 - Oct 31)
        if (month === 9 && day >= 25) return '/logo-halloween.png';

        // 11. Deepavali [Tamil/Hindu] (2026: November 6 - November 10)
        if (month === 10 && day >= 6 && day <= 10) return '/logo-deepavali.png';

        // 12. Christmas / Holiday Season [Christian] (Dec 20 - Dec 31)
        if (month === 11 && day >= 20) return '/logo-xmas.jpg';

        // Default
        return '/home-logo.png';
    });

    return logoPath;
}
