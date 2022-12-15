import React, { FC } from 'react';
import styles from '@/styles/ordercard.module.scss';

export const OrderCard: FC<IOrderCardProps> = (props) => {
  const { userId, quantity, name, content } = props;
  return (
    <ul className={styles.orderCardWrapper}>
      <li>
        This order belongs to <b>{name}</b> with user id of <b>{userId}</b>
      </li>
      <li className={styles.contentWrapper}>
        <h3>
          <i>{name}</i>
        </h3>
        <p>
          User ordered <u>{quantity}</u> pieces.
        </p>
      </li>
    </ul>
  );
};

export interface IOrderCardProps {
  content: string;
  userId: number;
  quantity: number;
  name: string;
}
