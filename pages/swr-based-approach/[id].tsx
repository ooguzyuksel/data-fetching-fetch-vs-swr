import useSWR from 'swr';
import { useRouter } from 'next/router';
import { Button } from '@/components/Button';
import { Spinner } from '@/components/Spinner';
import { IOrder } from 'interfaces/interfaces';
import { OrderCard } from '@/components/OrderCard';
import styles from '@/styles/swr-based-approach.module.scss';

const SWRBasedApproachWithOrderId = () => {
  const {
    query: { id },
    back,
  } = useRouter();

  const { data: orders, isValidating } = useSWR<IOrder[]>(
    id && `/users/${id}/orders`
  );

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

export default SWRBasedApproachWithOrderId;
