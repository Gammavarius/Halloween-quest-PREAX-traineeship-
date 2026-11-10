import styles from './card.module.css';

export function Card({ children, image, accent, className}) {
    const cardClass = `
        ${styles.card}
        ${accent ? styles[`card--${accent}`] : ''}
        ${className || ''}
    `.trim();

    return (
        <div className={cardClass}>
            {image && (
                <div className={styles.imageCol}>
                    {image}
                </div>
            )}
            <div className={styles.contentCol}>
                {children}
            </div>
        </div>
    )
}   