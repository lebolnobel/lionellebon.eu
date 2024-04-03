import * as React from "react";

export const Activity = (props) => {
  const { date, title, content, tag, link } = props;

  return (
    <div className="text-gray-800 pt-6">
      <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-gray-50">
        <div className="flex items-center justify-between">
          {(date && <span className="text-sm text-gray-600">{date}</span>) ||
            "\u00A0"}
          {tag && (
            <span className="px-2 py-1 font-bold rounded bg-violet-400 text-gray-50">
              {tag}
            </span>
          )}
        </div>
        <div className="mt-3">
          <div className="text-2xl font-bold hover:underline">
            <a href={link} title={title}>
              {title}
            </a>
          </div>
          <p className="mt-2">{content}</p>
        </div>
        <div className="flex items-center justify-between mt-4">
          <a
            href={link}
            title={title}
            className="hover:underline text-violet-600"
          >
            En savoir plus
          </a>
        </div>
      </div>
    </div>
  );
};
