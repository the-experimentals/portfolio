import React, { JSX, lazy, Suspense } from 'react';

const LazyCoverPage = lazy(() => import('./CoverPage'));

const CoverPage = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyCoverPage {...props} />
  </Suspense>
);

export default CoverPage;
