import useSWR from 'swr';
import { FC } from 'react';
import { useRouter } from 'next/router';
import { Button } from '@/components/Button';
import { Spinner } from '@/components/Spinner';
import { IOrder } from 'interfaces/interfaces';
import { OrderCard } from '@/components/OrderCard';
import styles from '@/styles/swr-based-approach.module.scss';

const SWRBasedApproachWithOrderId: FC<ISWRBasedApproachWithOrderIdProps> = (
  props
) => {
  const { queryId } = props;
  const { back } = useRouter();

  const { data: orders } = useSWR<IOrder[]>(`/users/${queryId}/orders`);

  return (
    <div className={styles.root}>
      <div className={styles.titleWrapper}>
        <Button onClick={() => back()}>&#x2190; Back</Button>
        <h1>SWR Based Approach with Order Id</h1>
      </div>
      {!orders && <Spinner />}
      {orders?.map((order: IOrder) => {
        const { id, ...rest } = order;
        return <OrderCard key={id} {...rest} />;
      })}
    </div>
  );
};

export interface ISWRBasedApproachWithOrderIdProps {
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

export default SWRBasedApproachWithOrderId;
