import { FC } from 'react';
import { Fade as FadeAnimation, FadeProps } from 'react-awesome-reveal';

import { WithChildren } from '@/app/(shared)/types/common.types';

export const Fade: FC<FadeProps & WithChildren> = ({ children, ...props }) => {
  return <FadeAnimation {...props}>{children}</FadeAnimation>;
};
