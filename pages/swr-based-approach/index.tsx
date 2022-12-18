import React from 'react';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import { Button } from '@/components/Button';
import { IUser } from 'interfaces/interfaces';
import { Spinner } from '@/components/Spinner';
import { UserCard } from '@/components/UserCard';
import styles from '@/styles/swr-based-approach.module.scss';

const SWRBasedApproach = () => {
  const { data: users } = useSWR<IUser[]>(`/users`);
  const { push } = useRouter();

  return (
    <div className={styles.root}>
      <div className={styles.titleWrapper}>
        <Button onClick={() => push('/')}>&#8962; Home</Button>
        <h1>useSWR Hook 🪝 Based Approach</h1>
      </div>
      {!users && <Spinner />}
      {users?.map((user: IUser) => {
        const { id, name, age, image, content } = user;
        return (
          <UserCard
            onClick={() => push(`/swr-based-approach/${id}`)}
            key={id}
            src={image}
            alt={name}
            age={age}
            name={name}
            content={content}
            id={id}
          />
        );
      })}
    </div>
  );
};

export default SWRBasedApproach;
