
import React from 'react';

interface SocialLinkProps {
  href: string;
  iconClass: string;
  tooltipText: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, iconClass, tooltipText }) => {
  return (
    <div className="relative group">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl text-slate-500 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
      >
        <i className={iconClass}></i>
      </a>
      <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        {tooltipText}
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-slate-800"></div>
      </div>
    </div>
  );
};

export default SocialLink;
