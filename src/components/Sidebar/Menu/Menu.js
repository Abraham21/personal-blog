// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import styles from './Menu.module.scss';

type Props = {
  menu: {
    label: string,
    path: string
  }[]
};

const isActive = ({ isCurrent, href, location }) => {
  const baseMenuStyle = styles['menu__list-item-link'];
  const activeMenuStyle = styles['menu__list-item-link--active'];
  const activeStyles = `${baseMenuStyle} ${activeMenuStyle}`;
  if (isHomePageOrArticlesPage(href, location)) {
    return { className: activeStyles };
  }
  return isCurrent ? { className: activeStyles } : {};
};

function isHomePageOrArticlesPage(href, location) {
  const isHomePage = href === '/#articles' && location.pathname === '/';
  const isArticlesPage = href === '/#articles' && location.hash === '#articles';
  return isHomePage || isArticlesPage;
}

const Menu = ({ menu }: Props) => (
  <nav className={styles['menu']}>
    <ul className={styles['menu__list']}>
      {menu.map((item) => (
        <li className={styles['menu__list-item']} key={item.path}>
          <Link
            to={item.path}
            className={styles['menu__list-item-link']}
            activeClassName={styles['menu__list-item-link--active']}
            getProps={isActive}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Menu;
