import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from '@/components/Button';
import { Spinner } from '@/components/Spinner';
import { IOrder } from 'interfaces/interfaces';
import { OrderCard } from '@/components/OrderCard';
import styles from '@/styles/fetch-based-approach.module.scss';

const FetchBasedApproachWithOrderId: FC<IFetchBasedApproachWithOrderIdProps> = (
  props
) => {
  const { queryId } = props;
  const { back } = useRouter();
  const [orders, setOrders] = useState<IOrder[]>();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `http://localhost:5001/users/${queryId}/orders`
        );
        const orders = await response.json();
        setOrders(orders);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [queryId]);

  return (
    <div className={styles.root}>
      <div className={styles.titleWrapper}>
        <Button onClick={() => back()}>&#x2190; Back</Button>
        <h1>Fetch API Based Approach with Order Id</h1>
      </div>
      {!orders && <Spinner />}
      {orders?.map((order: IOrder) => {
        const { id, ...rest } = order;
        return <OrderCard key={id} {...rest} />;
      })}
    </div>
  );
};

export interface IFetchBasedApproachWithOrderIdProps {
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

export default FetchBasedApproachWithOrderId;
