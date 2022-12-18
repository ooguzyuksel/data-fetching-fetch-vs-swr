import { FC, useEffect, useState } from 'react';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import { Button } from '@/components/Button';
import { Spinner } from '@/components/Spinner';
import { IOrder } from 'interfaces/interfaces';
import { OrderCard } from '@/components/OrderCard';
import styles from '@/styles/fetch-vs-swr.module.scss';

const FetchVsSWRWithOrderId: FC<IFetchVsSWRWithOrderIdProps> = (props) => {
  const { queryId } = props;
  const { back } = useRouter();
  const [fetchBasedOrders, setFetchBasedOrders] = useState<IOrder[]>();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `http://localhost:5001/users/${queryId}/orders`
        );
        const orders = await response.json();
        setFetchBasedOrders(orders);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [queryId]);

  const { data: swrBasedOrders } = useSWR<IOrder[]>(`/users/${queryId}/orders`);

  return (
    <div className={styles.root}>
      <div>
        <div className={styles.fetchRoot}>
          <div className={styles.titleWrapper}>
            <h1>Fetch API Based Approach with Order Id</h1>
          </div>
          {fetchBasedOrders ? (
            fetchBasedOrders?.map((order: IOrder) => {
              const { id, ...rest } = order;
              return <OrderCard key={id} {...rest} />;
            })
          ) : (
            <Spinner />
          )}
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        <Button onClick={() => back()}>&#x2190; Back</Button>
      </div>
      <div>
        <div className={styles.swrRoot}>
          <div className={styles.titleWrapper}>
            <h1>SWR Based Approach with Order Id</h1>
          </div>
          {swrBasedOrders ? (
            swrBasedOrders?.map((order: IOrder) => {
              const { id, ...rest } = order;
              return <OrderCard key={id} {...rest} />;
            })
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    </div>
  );
};

export interface IFetchVsSWRWithOrderIdProps {
  queryId: number;
}

export async function getServerSideProps(context: { params: { id: number } }) {
  const { id } = context.params;
  return {
    props: {
      queryId: id,
    },
  };
}

export default FetchVsSWRWithOrderId;
