import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import Markdown from 'react-markdown';

import { CustomIcon } from '@/app/(shared)/components/ui/CustomIcon';
import { Typography } from '@/app/(shared)/components/ui/Typography';

import { RoutesEnum } from '@/app/(shared)/types/enums';
import { SingleNewDataType } from '@/app/(shared)/types/common.types';

type Props = {
  card: SingleNewDataType;
  readMoreText: string;
  Tag?: 'li' | 'div';
};

export const NewsCard: FC<Props> = async ({ card, readMoreText, Tag = 'div' }) => {
  const {
    attributes: {
      title,
      slug,
      date,
      image: {
        alt,
        image: {
          data: {
            attributes: { url },
          },
        },
      },
      content,
    },
  } = card;

  return (
    <Tag>
      <div className="h-[320px] overflow-hidden rounded">
        <Image
          src={url}
          alt={alt}
          width={384}
          height={320}
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            width: '100%',
            height: '100%',
          }}
        />
      </div>

      <div className="grid gap-y-4 pt-5">
        <Typography as="span" className="text-sm font-light text-zinc-500">
          {format(new Date(date), 'dd.MM.y')}
        </Typography>

        <Typography as="h3" className="font-fixel !text-ui_bold_28 md:min-h-[96px]">
          {title}
        </Typography>

        <Markdown
          components={{
            h1: 'p',
            h2: 'p',
            h3: 'p',
            h4: 'p',
            h5: 'p',
            h6: 'p',
            img(props: React.ImgHTMLAttributes<HTMLImageElement>) {
              return (
                <Image
                  alt={props?.alt ?? ''}
                  width={0}
                  height={0}
                  src={props?.src ?? ''}
                  className="hidden"
                />
              );
            },

            a(props) {
              const { children, ...rest } = props;
              return (
                <a
                  target="_blank"
                  rel="noreferrer noopener nofollow"
                  {...rest}
                  className="base-transition font-bold hocus:text-blue-600"
                >
                  {children}
                </a>
              );
            },
          }}
          className="prose line-clamp-6 font-fixel !text-ui_reg_16 prose-p:my-0 prose-p:whitespace-pre-wrap xl:line-clamp-5"
        >
          {content}
        </Markdown>

        <Link
          className="base-transition ml-auto inline-flex items-center gap-x-1 hover:text-blue-600 focus:text-blue-600"
          href={`${RoutesEnum.NEWS}/${slug}`}
        >
          <Typography className="text-inherit" as="span">
            {readMoreText}
          </Typography>

          <CustomIcon className="-rotate-90 text-blue-600" icon="arrow-sm" />
        </Link>
      </div>
    </Tag>
  );
};
