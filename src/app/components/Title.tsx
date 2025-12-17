import * as React from 'react';

type TitleType = {
  children: React.ReactNode;
};

export const Title = (props: TitleType): React.ReactNode => {
  const { children } = props;

  return (
    <div className="container max-w-4xl mt-24 mb-8 mx-auto">
      <h2 className="text-5xl font-bold leading-none tracking-tight text-gray-900 text-center md:text-left">
        {children}
      </h2>
    </div>
  );
};
