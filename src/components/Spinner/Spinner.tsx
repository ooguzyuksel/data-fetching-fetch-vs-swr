import React from 'react';
import styles from '@/styles/spinner.module.scss';

export const Spinner = () => {
  return (
    <div className={styles.spinnerWrapper}>
      <div className={styles.customLoader} />
    </div>
  );
};
