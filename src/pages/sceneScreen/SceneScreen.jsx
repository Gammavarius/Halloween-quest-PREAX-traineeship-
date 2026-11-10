import { useParams, useNavigate } from 'react-router-dom';
import { useGame } from '@/context/GameContext';
import storyData from '@/data/story.json';
import { Card, CardImage, Button } from '@/components';
import styles from './sceneScreen.module.css';
import { ScreenLayout } from '@/layout';

export function SceneScreen() {
    const { sceneId } = useParams();
    const navigate = useNavigate();
    const {inventory, addItems, resetGame} =useGame();
    const scene = storyData.scenes[sceneId];
    const location = storyData.locations[scene.location];

    const renderText = (text) => {
    const parts = text.split('**');
        return parts.map((part, index) => 
        index % 2 !== 0 ? <strong key={index}>{part}</strong> : part
        );
    };

    const availableChoices = scene.choices.filter(choice => {
        if (choice.if && choice.if.has) {
            return inventory.includes(choice.if.has);
        }
        return true; 
    });

    const handleChoice = (choice) => {
        if (choice.effects) {
            const itemsToAdd = choice.effects.map(effect => effect.add);
            addItems(itemsToAdd);
        }
        
        if (storyData.endings[choice.next]) {
            navigate(`/ending/${choice.next}`);
        } else {
            navigate(`/scene/${choice.next}`);
        }
    }

    const isCta = scene.layout === 'cta';

    const handleClose = () => {
        if (window.confirm("Вы уверены, что хотите выйти? Прогресс будет потерян.")) {
            resetGame();
            navigate('/');
        }
    };


    return (
        <ScreenLayout background={storyData.meta.background} cardWidth="1216px" cardWidthTablet="896px" cardWidthMobile="704px" >
            <div className={styles.wrapper}>
                <button className={styles.closeBtn} onClick={handleClose}>×</button>
                <Card 
                    image={<CardImage imageKey={location.image} alt={location.caption} />}
                    className={styles.sceneCard}
                >
                    <span className={styles.kicker}>{scene.kicker}</span>
                    <h2 className={styles.title}>{scene.title}</h2>
                    <p className={styles.text}>{renderText(scene.text)}</p>
                    {scene.question && <p className={styles.question}>{scene.question}</p>}

                    <div className={styles.choices}>
                        {isCta ? (
                            <Button onClick={() => handleChoice(availableChoices[0])}>
                                {availableChoices[0].text}
                            </Button>
                        ) : (
                            availableChoices.map((choice, index) => (
                                <Button
                                    key={index}
                                    variant="choice"
                                    number={index + 1}
                                    onClick={() => handleChoice(choice)}
                                >
                                    {choice.text}
                                </Button>
                            ))
                        )}
                    </div>
                </Card>
            </div>
        </ScreenLayout>
    );
};