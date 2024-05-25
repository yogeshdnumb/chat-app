import { AppShell, NavLink, Text } from '@mantine/core';
import { FiHome, FiSearch } from 'react-icons/fi';
import classes from './Navbar.module.scss';

export default function Navbar() {
  return (
    <AppShell.Navbar>
      <NavLink
        label={<Text fz={'xl'}>Home</Text>}
        leftSection={<FiHome size={24}></FiHome>}
      ></NavLink>
      <NavLink
        label={<Text fz={'xl'}>Search</Text>}
        leftSection={<FiSearch size={24}></FiSearch>}
      ></NavLink>
    </AppShell.Navbar>
  );
}
