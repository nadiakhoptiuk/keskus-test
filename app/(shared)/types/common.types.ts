import { ComponentPropsWithoutRef, ReactNode } from 'react';

import { LocaleProps } from '@/app/(shared)/types/i18n.types';

export type WithChildren = {
  children: ReactNode;
};

export type WithClassName = {
  className?: string;
};

export type WithError = {
  error?: string;
};

export type RootLayoutProps = WithChildren & PageProps;

export type PageProps = { params: LocaleProps };

export type Inputs = Record<string, string>;

export type ButtonProps = ComponentPropsWithoutRef<'button'> & WithChildren & WithClassName;

export type InputProps = ComponentPropsWithoutRef<'input'> & WithClassName & WithError;

export type TextAreaProps = ComponentPropsWithoutRef<'textarea'> & WithClassName & WithError;

export interface NavbarLinkProps {
  title: string;
  href: string;
  variant: 'header' | 'footer';
}
