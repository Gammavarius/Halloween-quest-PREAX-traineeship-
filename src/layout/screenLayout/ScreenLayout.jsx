import styles from './screenLayout.module.css';
import { getImageUrl } from '@/utils';
import { Footer } from '@/components';

export function ScreenLayout({ 
    background, 
    children, 
    cardWidth = '1216px',
    cardWidthTablet = '896px',
    cardWidthMobile = '704px'
}) {
    const bgImageUrl = getImageUrl(background);

    return (
        <div 
            className={styles.screen} 
            style={{
                '--bg-image' : `url(${bgImageUrl})`, 
                '--card-width': cardWidth,
                '--card-width-tablet': cardWidthTablet,
                '--card-width-mobile': cardWidthMobile
            }}>
            <main className={styles.mainContent}>
                {children}
                <Footer />
            </main>
        </div>
    )
}