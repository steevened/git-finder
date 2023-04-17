import { FC, PropsWithChildren } from 'react';

const CardsGridContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="grid grid-cols-1 gap-5 p-3 sm:grid-cols-2 md:grid-cols-3 place-items-center">
      {children}
    </div>
  );
};

export default CardsGridContainer;
