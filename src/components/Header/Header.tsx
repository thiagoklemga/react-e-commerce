import { FC } from 'react';

interface HeaderProps {
  header?: string;
}

export const Header: FC<HeaderProps> = ({ header }) => {
  return <div>Hello, {header}!</div>;
};
