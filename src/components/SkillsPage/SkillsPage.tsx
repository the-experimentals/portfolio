import React, { FC } from 'react';
import styles from './SkillsPage.module.scss';

interface SkillsPageProps {}

const SkillsPage: FC<SkillsPageProps> = () => (
  <div className={styles.SkillsPage} data-testid="SkillsPage">
    SkillsPage Component
  </div>
);

export default SkillsPage;
