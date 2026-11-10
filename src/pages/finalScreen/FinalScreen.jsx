import { useParams, useNavigate } from 'react-router-dom';
import { useGame } from '@/context/GameContext';
import storyData from '@/data/story.json';
import { Card, CardImage, Button } from '@/components';
import styles from './finalScreen.module.css';
import { ScreenLayout } from '@/layout';

export function FinalScreen() {
    const {endingId} = useParams();
    const navigate = useNavigate();
    const {resetGame} = useGame();

    const ending = storyData.endings[endingId];

    const handleRestart = () => {
        resetGame();
        navigate('/');
    }

    const renderText = (text) => {
        const parts = text.split('**');
        return parts.map((part, index) => 
        index % 2 !== 0 ? <strong key={index}>{part}</strong> : part
        );
    };

    return (
        <ScreenLayout background={storyData.meta.background} cardWidth="1216px" cardWidthTablet="896px" cardWidthMobile="704px" >
            <div className={styles.wrapper}>
                <Card
                    image={<CardImage imageKey={ending.image} alt={ending.title} />}
                    accent={ending.accent}
                    className={styles.finalCard}
                >
                    <span className={styles.kicker}>ТВОЯ РОЛЬ</span>
                    <h2 className={styles.title}>{ending.title}</h2>
                    <p className={styles.text}>{renderText(ending.text)}</p>

                    <Button variant={ending.accent} onClick={handleRestart} className={styles.restartBtn}>
                        Пройти еще раз
                    </Button>
                </Card>
            </div>
        </ScreenLayout>
    );
}