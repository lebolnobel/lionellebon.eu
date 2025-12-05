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
      <div className="container max-w-4xl px-10 pt-10 pb-8 mx-auto bg-gray-50 border-gray-100 rounded-2xl shadow-sm">
        <div className="flex flex-wrap items-center justify-between">
          <h2 className="text-2xl font-bold">
            <a
              href={link}
              className="text-gray-900 no-underline hover:underline"
            >
              {title}
            </a>
          </h2>
          {tag && (
            <div className="px-3 py-1 bg-[#e6f0ee] text-green-900 rounded-full font-semibold">
              {tag}
            </div>
          )}
        </div>
        <div className="mt-8 mb-4">{content}</div>
        <div className="flex items-center justify-between">
          {(description && (
            <span className="text-base text-gray-500">{description}</span>
          )) ||
            '\u00A0'}

          <a href={link} className="no-underline hover:underline">
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
