import React from 'react';

import { Tab, Tabs } from '@mui/material';
import { MenuItem } from '../types/nav';

interface LinkTabProps {
  label: string;
  href: string;
}

function LinkTab(props: LinkTabProps) {
  const { label, href } = props;
  return <Tab component="a" onClick={() => {}} label={label} href={href} />;
}

interface NavProps {
  activePage: number;
}

function Nav(props: NavProps) {
  const menuItems: MenuItem[] = [
    { name: 'Home', link: '/' },
    { name: 'Star Field', link: '/star-field' },
    { name: 'Conways Game of Life', link: '/conways-game-of-life' },
  ];
  const { activePage } = props;
  return (
    <nav>
      <Tabs value={activePage} aria-label="challenge list">
        {menuItems.map((item: { link: string; name: string }) => (
          <LinkTab label={item.name} href={item.link} key={item.link} />
        ))}
      </Tabs>
    </nav>
  );
}

export default Nav;
