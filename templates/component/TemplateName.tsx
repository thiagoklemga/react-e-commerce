import { FC } from 'react';

interface Props {
  name: string;
}

export const MyComponent: FC<Props> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};
