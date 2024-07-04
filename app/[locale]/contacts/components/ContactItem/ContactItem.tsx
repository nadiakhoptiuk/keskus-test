import { FC } from 'react';

import { ContactItemType } from './ContactItem.types';

export const ContactItem: FC<ContactItemType> = ({ id, href, heading, content }) => {
  return (
    <>
      <p className="font-regular mb-1 text-[18px] leading-[1.6] text-zinc-50 opacity-50">
        {heading}
      </p>

      {id === 'tel' && (
        <a href={`tel:${href}`} className="font-regular text-[18px] leading-[1.6] text-zinc-50">
          {content}
        </a>
      )}
      {id === 'email' && (
        <a href={`mailto:${href}`} className="font-regular text-[18px] leading-[1.6] text-zinc-50">
          {content}
        </a>
      )}
      {id === 'address' && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="font-regular text-[18px] leading-[1.6] text-zinc-50"
        >
          {content}
        </a>
      )}
    </>
  );
};
