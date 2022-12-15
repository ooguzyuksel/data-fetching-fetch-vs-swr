import React, { FC } from 'react';
import styles from '@/styles/button.module.scss';

export const Button: FC<IButtonProps> = (props) => {
  const { children, onClick } = props;
  return (
    <button className={styles.myButton} onClick={onClick}>
      <span>{children}</span>
    </button>
  );
};

export interface IButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}
