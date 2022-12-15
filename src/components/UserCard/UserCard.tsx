import React, { FC } from 'react';
import Image from 'next/image';
import styles from '@/styles/usercard.module.scss';
import { useRouter } from 'next/router';

export const UserCard: FC<IUserCardProps> = (props) => {
  const { src, alt, age, name, content, id } = props;
  const { push } = useRouter();

  return (
    <button
      className={styles.button}
      onClick={() => push(`/swr-based-approach/${id}`)}
    >
      <ul className={styles.userCardWrapper}>
        <li>
          <Image priority height={100} width={100} src={src} alt={alt} />
        </li>
        <li className={styles.contentWrapper}>
          <h3>
            <i>{name}</i> - Age: {age}
          </h3>
          <p>{content}</p>
        </li>
      </ul>
    </button>
  );
};

export interface IUserCardProps {
  id: number;
  src: string;
  alt: string;
  age: number;
  name: string;
  content: string;
}
