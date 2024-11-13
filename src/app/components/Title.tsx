import * as React from 'react';

type TitleType = {
  children: React.ReactNode;
};

export const Title = (props: TitleType): React.ReactNode => {
  const { children } = props;

  return (
    <div className="text-gray-800 pt-12">
      <div className="container max-w-4xl py-8 mx-auto">
        <h2 className="text-4xl font-bold leading-none tracking-tight text-gray-900 text-center md:text-left md:text-5xl lg:text-5xl">
          {children}
        </h2>
      </div>
    </div>
  );
};
