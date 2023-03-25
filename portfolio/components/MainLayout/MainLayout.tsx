import React, { FC } from 'react';
import styles from './MainLayout.module.scss';

interface MainLayoutProps {}

const MainLayout: FC<MainLayoutProps> = () => (
  <div className={styles.MainLayout} data-testid="MainLayout">
    MainLayout Component
  </div>
);

export default MainLayout;
