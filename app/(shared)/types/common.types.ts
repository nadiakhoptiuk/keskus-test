import { ComponentPropsWithoutRef, ReactNode } from 'react';

export type WithChildren = {
  children: ReactNode;
};

export type WithClassName = {
  className?: string;
};

export type WithError = {
  error?: string;
};

export type Inputs = Record<string, string>;

export type ButtonProps = ComponentPropsWithoutRef<'button'> &
  WithChildren &
  WithClassName;

export type InputProps = ComponentPropsWithoutRef<'input'> &
  WithClassName &
  WithError;

export type TextAreaProps = ComponentPropsWithoutRef<'textarea'> &
  WithClassName &
  WithError;
