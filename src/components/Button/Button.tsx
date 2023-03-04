import { FC, ReactNode } from 'react';

interface ButtonProps {
  children?: ReactNode;
  icon?: ReactNode;
  className?: string;
}

export const Button: FC<ButtonProps> = ({ children, icon, className }) => {
  return (
    <button className={`inline-flex gap-3 `}>
      {icon}
      {children}
    </button>
  );
};
