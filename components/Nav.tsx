import { Tab, Tabs } from "@mui/material";
import Link from "next/link";
import { env } from "process";
import { useState } from "react";
import { MenuItem } from "../types/nav";

interface LinkTabProps {
  label?: string;
  href?: string;
}

const LinkTab = (props: LinkTabProps) => {
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {}}
      {...props}
    />
  );
};
interface NavProps {
  activePage: number;
}
const Nav = (props: NavProps) => {
  const menuItems: MenuItem[] = [
    { name: "Home", link: "/" },
    { name: "Star Field", link: "/star-field" },
  ];
  return (
    <nav>
      <Tabs value={props.activePage} aria-label="challenge list">
        {menuItems.map((item: { link: string; name: string }) => (
          <LinkTab label={item.name} href={item.link} key={item.link} />
        ))}
      </Tabs>
    </nav>
  );
};

export default Nav;
