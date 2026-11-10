import styles from './button.module.css';

export function Button({ children, variant="primary", number, className, ...props}) {
    const modifierClass = styles[`btn--${variant}`] || '';
    const buttonClass = `${styles.btn} ${modifierClass} ${className || ''}`.trim();

    return (
        <button className={buttonClass} {...props}>
            {number && <span className={styles.number}>#{number}</span>}
            {children}
        </button>
    )

}