import styles from './cardImage.module.css';
import { getImageUrl } from '@/utils/getImageUrl';

export function CardImage({ imageKey, alt }) {
    const url = getImageUrl(imageKey);

    return (
        <div className={styles.imgWrapper}>
            <img src={url} alt={alt} className={styles.img} />
        </div>
    );
};