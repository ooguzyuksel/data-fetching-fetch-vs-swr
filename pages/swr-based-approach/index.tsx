import React from 'react';
import useSWR from 'swr';
import { IUser } from 'interfaces/interfaces';
import styles from '@/styles/fetch-based-approach.module.scss';
import { UserCard } from '@/components/UserCard';
import { Spinner } from '@/components/Spinner';

const SWRBasedApproach = () => {
  const { data: users } = useSWR<IUser[]>(`/users`);

  return (
    <div className={styles.root}>
      <h1>useSWR Hook 🪝</h1>
      {!users && <Spinner />}
      {users?.map((user: IUser) => {
        const { id, name, age, image, content } = user;
        return (
          <UserCard
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
