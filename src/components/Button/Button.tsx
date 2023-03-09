import { FC, ReactNode } from 'react';

interface ButtonProps {
  children?: ReactNode;
  icon?: ReactNode;
  onClick?: () => void;
  className?: string;
}

export const Button: FC<ButtonProps> = ({
  children,
  icon,
  onClick,
  className,
}) => {
  return (
    <button className={`inline-flex gap-3 ${className}`} onClick={onClick}>
      {icon}
      {children}
    </button>
  );
};
