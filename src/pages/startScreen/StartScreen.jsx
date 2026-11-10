import { useNavigate } from 'react-router-dom';
import storyData from '@/data/story.json';
import { Button, Card } from '@/components';
import styles from './startScreen.module.css';
import { ScreenLayout } from '@/layout';

export function StartScreen() {
  const { intro, startScene } = storyData.meta;
  const navigate = useNavigate();

  const renderText = (text) => {
    const parts = text.split('**');
    return parts.map((part, index) => 
      index % 2 !== 0 ? <strong key={index}>{part}</strong> : part
    );
  };

  return (
    <ScreenLayout background={storyData.meta.background} cardWidth="992px" cardWidthTablet="640px" cardWidthMobile="704px">
        <Card className={styles.startCard}>
          <span className={styles.kicker}>{intro.kicker}</span>
          <h2 className={styles.title}>{intro.title}</h2>
          <div className={styles.textContainer}>
            {intro.paragraphs.map((paragraph, index) => (
              <p key={index}>
                {renderText(paragraph)}
              </p>
            ))}
          </div>
          <Button onClick={() => navigate(`/scene/${startScene}`)}>
            {intro.button}
          </Button>
        </Card>
      </ScreenLayout>
  );
};