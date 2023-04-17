import { Button } from '@material-tailwind/react';

const LoadingCard = () => {
  return (
    <Button
      disabled
      variant="text"
      className="w-[200px] 
  p-4 
  space-y-5 
  rounded-2xl 
  bg-white/95 
  dark:bg-white/5
  shadow-lg
  shadow-black/50
  isolate
  overflow-hidden 
  relative 
  before:absolute 
  before:inset-0
  before:-translate-x-full
  before:animate-[shimmer_2s_infinite]
  before:bg-gradient-to-r
  before:from-transparent 
before:dark:via-blue-gray-100/10
before:via-blue-gray-900/10
  before:to-transparent"
    >
      <div className="h-24 rounded-lg bg-blue-gray-900/10 dark:bg-gray-100/10 "></div>
      <div className="space-y-3">
        <div className="w-3/5 h-3 rounded-lg bg-gray-900/10 dark:bg-gray-100/10"></div>
        <div className="w-4/5 h-3 rounded-lg bg-gray-900/20 dark:bg-gray-100/20"></div>
      </div>
    </Button>
  );
};

export default LoadingCard;
