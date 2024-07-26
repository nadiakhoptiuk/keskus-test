import { FC } from 'react';

import { ContactItemType } from '@/app/(shared)/types/common.types';

export const ContactItem: FC<ContactItemType> = ({
  contact_type,
  contact_title,
  content,
  link,
}) => {
  return (
    <>
      <p className="font-regular mb-1 text-[18px] leading-[1.6] text-zinc-50 opacity-50">
        {contact_title}
      </p>

      {contact_type === 'phone' && (
        <a href={`tel:${link}`} className="font-regular text-[18px] leading-[1.6] text-zinc-50">
          {content}
        </a>
      )}
      {contact_type === 'email' && (
        <a href={`mailto:${link}`} className="font-regular text-[18px] leading-[1.6] text-zinc-50">
          {content}
        </a>
      )}
      {contact_type === 'address' && (
        <a
          href={link}
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
