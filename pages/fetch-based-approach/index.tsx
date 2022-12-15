import React, { useEffect, useState } from 'react';
import { IRoot, IUser } from '../../interfaces/interfaces';
import axios from 'axios';
import { Spinner } from '@/components/Spinner';
import { UserCard } from '@/components/UserCard';
import styles from '@/styles/fetch-based-approach.module.scss';

const FetchBasedApproach = () => {
  const [users, setUsers] = useState<IUser[]>();

  useEffect(() => {
    (async () => {
      const { data } = await axios('/users');
      setUsers(data);
    })();
  }, []);

  return (
    <div className={styles.root}>
      <h1>Convetional Fetch with Axios</h1>
      {users ? (
        users.map((user: IUser) => {
          const { id, name, age, image, content } = user;
          return (
            <UserCard
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
