import { memo } from 'react';

// Memoized marquee component to prevent unnecessary re-renders
const WorkoutMarquee = memo(() => {
  return (
    <div className="bg-primary py-3 md:py-4 overflow-hidden will-change-transform">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(8)].map((_, i) => (
          <span key={i} className="text-primary-foreground font-display font-black text-lg md:text-xl mx-6 md:mx-8 uppercase tracking-wider">
            Workout
          </span>
        ))}
      </div>
    </div>
  );
});

WorkoutMarquee.displayName = 'WorkoutMarquee';

export default WorkoutMarquee;