import { FC } from 'react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const Card: FC<Props> = ({ className, children }) => {
  return (
    <div
      className={`shadow-lg shadow-black/20 bg-blue-gray-200 dark:bg-blue-gray-700 rounded-md p-3 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
