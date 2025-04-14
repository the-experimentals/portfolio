import React, { FC } from 'react';
import styles from './WorkExperiencePage.module.scss';

interface WorkExperiencePageProps {}

const WorkExperiencePage: FC<WorkExperiencePageProps> = () => (
  <div className={styles.WorkExperiencePage} data-testid="WorkExperiencePage">
    WorkExperiencePage Component
  </div>
);

export default WorkExperiencePage;
