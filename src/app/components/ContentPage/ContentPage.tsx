import React, { FC } from 'react';
import styles from './ContentPage.module.scss';

interface ContentPageProps {}

const ContentPage: FC<ContentPageProps> = () => (
  <div className={styles.ContentPage}>
    ContentPage Component
  </div>
);

export default ContentPage;
