import { FC, ReactNode } from 'react';

interface ButtonProps {
  children?: ReactNode;
  icon?: ReactNode;
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({ children, icon, onClick }) => {
  return (
    <button className={`inline-flex gap-3 `} onClick={onClick}>
      {icon}
      {children}
    </button>
  );
};
