import React, { useRef, useEffect } from 'react';
import styles from './Page.module.scss';

type Props = {
  title?: string,
  children: React.Node
};

const Page = ({ title, children }: Props) => {
  const pageRef = useRef();

  useEffect(() => {
    const url = new URL(pageRef.current.baseURI);
    // prevent autoscrolling to articles when home page is opened directly
    const isBaseHomePage = url.pathname === '/' && url.hash.length === 0;
    // support for table of contents in projects page and allow tag autoscrolling in work page
    const isTaggedProjectsPage = url.pathname.startsWith('/pages/projects', 0) && url.hash.length > 0;
    const isTaggedWorkPage = url.pathname.startsWith('/pages/work', 0) && url.hash.length > 0;
    if (!isBaseHomePage && !isTaggedProjectsPage && !isTaggedWorkPage) {
      pageRef.current.scrollIntoView();
    }
  });

  return (
    <div ref={pageRef} className={styles['page']}>
      <div className={styles['page__inner']}>
        { title && <h1 className={styles['page__title']}>{title}</h1>}
        <div className={styles['page__body']}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Page;