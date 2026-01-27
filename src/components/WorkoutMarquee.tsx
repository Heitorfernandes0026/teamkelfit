// Reusable lightweight marquee component for performance
const WorkoutMarquee = () => {
  return (
    <div className="bg-primary py-3 md:py-4 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(12)].map((_, i) => (
          <span key={i} className="text-primary-foreground font-display font-black text-lg md:text-xl mx-6 md:mx-8 uppercase tracking-wider">
            Workout
          </span>
        ))}
      </div>
    </div>
  );
};

export default WorkoutMarquee;