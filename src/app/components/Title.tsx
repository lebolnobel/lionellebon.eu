import * as React from 'react';

type TitleType = {
  children: React.ReactNode;
};

export const Title = (props: TitleType): React.ReactNode => {
  const { children } = props;

  return (
    <div className="text-gray-800 pt-6">
      <div className="container max-w-4xl px-10 py-6 mx-auto">
        <h2 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl">
          {children}
        </h2>
      </div>
    </div>
  );
};
