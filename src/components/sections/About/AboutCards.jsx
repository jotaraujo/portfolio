/**
 * Grid of about cards
 */
import { ABOUT_CARDS } from '@/constants/stats';
import { AboutCard } from './AboutCard';

export function AboutCards() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
      {ABOUT_CARDS.map((card, index) => (
        <AboutCard
          key={card.title}
          icon={card.icon}
          title={card.title}
          description={card.description}
          delay={index * 100}
        />
      ))}
    </div>
  );
}
