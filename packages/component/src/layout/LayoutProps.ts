import {
  AppShellHeaderConfiguration,
  AppShellNavbarConfiguration,
} from '@mantine/core';
import { LayoutComponentProps } from './LayoutComponentProps.ts';

type LayoutProps = Partial<{
  defaultNavbarWidth: number;
  defaultHeaderHeight: number;
}> &
  AppShellHeaderConfiguration &
  Omit<AppShellNavbarConfiguration, 'width'> &
  LayoutComponentProps;
export type { LayoutProps };
