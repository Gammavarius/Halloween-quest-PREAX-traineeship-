import styles from './footer.module.css';

export function Footer() {
    return <footer className={styles.pageFooter}>Проект выполнен в рамках стажировки <a className={styles.preaxLink} href='https://preax.ru/' target='_blank'>PREAX</a></footer>
}