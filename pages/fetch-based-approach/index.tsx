import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from '@/components/Button';
import { Spinner } from '@/components/Spinner';
import { UserCard } from '@/components/UserCard';
import { IUser } from '../../interfaces/interfaces';
import styles from '@/styles/fetch-based-approach.module.scss';

const FetchBasedApproach = () => {
  const { push } = useRouter();
  const [users, setUsers] = useState<IUser[]>();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`http://localhost:5001/users`);
        const users = await response.json();
        setUsers(users);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.titleWrapper}>
        <Button onClick={() => push('/')}>&#8962; Home</Button>
        <h1>Convetional Fetch with Fetch API</h1>
      </div>
      {users ? (
        users.map((user: IUser) => {
          const { id, name, age, image, content } = user;
          return (
            <UserCard
              onClick={() => push(`/fetch-based-approach/${id}`)}
              id={id}
              key={id}
              src={image}
              alt={name}
              age={age}
              name={name}
              content={content}
            />
          );
        })
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default FetchBasedApproach;
