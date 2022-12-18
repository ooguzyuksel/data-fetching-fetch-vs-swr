import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import { Button } from '@/components/Button';
import { IUser } from 'interfaces/interfaces';
import { Spinner } from '@/components/Spinner';
import { UserCard } from '@/components/UserCard';
import styles from '@/styles/fetch-vs-swr.module.scss';

const FetchVsSWR = () => {
  const { push } = useRouter();
  const [usersFromFetch, setUsersFromFetch] = useState<IUser[]>();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`http://localhost:5001/users`);
        const users = await response.json();
        setUsersFromFetch(users);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const { data: usersFromSWR } = useSWR<IUser[]>(`/users`);

  const onClickHandler = (id: number) => {
    push(`/fetch-vs-swr/${id}`);
  };

  return (
    <div className={styles.root}>
      <div className={styles.fetchRoot}>
        <div className={styles.titleWrapper}>
          <h1>Convetional Fetch with Fetch API</h1>
        </div>
        {usersFromFetch ? (
          usersFromFetch.map((user: IUser) => {
            const { id, name, age, image, content } = user;
            return (
              <UserCard
                onClick={() => onClickHandler(id)}
                id={id}
                key={id}
                age={age}
                alt={name}
                name={name}
                src={image}
                content={content}
              />
            );
          })
        ) : (
          <Spinner />
        )}
      </div>
      <div className={styles.buttonWrapper}>
        <Button onClick={() => push('/')}>&#8962; Home</Button>
      </div>
      <div className={styles.swrRoot}>
        <div className={styles.titleWrapper}>
          <h1>useSWR Hook 🪝 Based Approach</h1>
        </div>
        {!usersFromSWR && <Spinner />}
        {usersFromSWR?.map((user: IUser) => {
          const { id, name, age, image, content } = user;
          return (
            <UserCard
              onClick={() => onClickHandler(id)}
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
    </div>
  );
};

export default FetchVsSWR;
