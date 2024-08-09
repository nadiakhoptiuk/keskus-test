import { classnames } from '@/app/(shared)/utils/classnames';
import { FC } from 'react';

type Props = {
  contact_type: 'address' | 'phone' | 'email';
  contact_title: string;
  content: string;
  link: string;
  variant?: 'footer' | 'contacts_page';
};

export const ContactItem: FC<Props> = ({
  contact_type,
  contact_title,
  content,
  link,
  variant = 'contacts_page',
}) => {
  const mainStyles =
    'font-regular not-italic text-[18px] leading-[1.6] transition-colors duration-200 ease-in-out inline hocus:text-yellow-400';
  const contactsStyles = {
    'text-black': variant === 'footer',
    'text-zinc-50': variant === 'contacts_page',
  };

  return (
    <li>
      {variant !== 'footer' && (
        <p className="font-regular mb-1 text-[18px] leading-[1.6] text-zinc-50 opacity-50">
          {contact_title}
        </p>
      )}

      {contact_type === 'phone' && (
        <a href={`tel:${link}`} className={classnames(mainStyles, contactsStyles)}>
          {content}
        </a>
      )}
      {contact_type === 'email' && (
        <a href={`mailto:${link}`} className={classnames(mainStyles, contactsStyles)}>
          {content}
        </a>
      )}
      {contact_type === 'address' && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className={classnames(mainStyles, contactsStyles)}
        >
          {content}
        </a>
      )}
    </li>
  );
};
