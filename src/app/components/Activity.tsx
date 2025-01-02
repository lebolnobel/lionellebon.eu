import * as React from 'react';
import { GoArrowRight } from 'react-icons/go';

type ActivityType = {
  description?: React.ReactNode;
  title: React.ReactNode;
  content: React.ReactNode;
  tag: string;
  link: string;
};

export const Activity = (props: ActivityType): React.ReactNode => {
  const { description, title, content, tag, link } = props;

  return (
    <div className="text-gray-800 pt-6">
      <div className="container max-w-4xl px-10 pt-10 pb-8 mx-auto rounded-lg shadow-sm bg-gray-50">
        <div className="flex flex-wrap items-center justify-between">
          <div className="text-2xl font-bold hover:underline">
            <a href={link}>{title}</a>
          </div>
          {tag && (
            <div className="px-2 py-1 font-bold rounded text-violet-900 bg-gradient-to-r from-violet-300 to-violet-200">
              {tag}
            </div>
          )}
        </div>
        <div className="mt-8 mb-4">{content}</div>
        <div className="flex items-center justify-between">
          {(description && (
            <span className="text-sm text-gray-500">{description}</span>
          )) ||
            '\u00A0'}

          <a href={link} className="hover:underline text-violet-600">
            En savoir plus
            <GoArrowRight
              size="14"
              role="presentation"
              className="inline-flex mb-0.5 ml-2"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
