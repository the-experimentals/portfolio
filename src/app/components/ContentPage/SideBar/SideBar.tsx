import React, { FC } from 'react';
import styles from './SideBar.module.scss';

interface SideBarProps {}

const SideBar: FC<SideBarProps> = () => (
  <div className={styles.SideBar}>
    SideBar Component
  </div>
);

export default SideBar;
