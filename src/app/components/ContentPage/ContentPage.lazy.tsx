import React, { lazy, Suspense } from 'react';

const LazyContentPage = lazy(() => import('./ContentPage'));

const ContentPage = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyContentPage {...props} />
  </Suspense>
);

export default ContentPage;
