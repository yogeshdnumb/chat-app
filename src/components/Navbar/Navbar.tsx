import { AppShell, Button, NavLink, Text } from '@mantine/core';
import {
  FiHome,
  FiMessageCircle,
  FiMessageSquare,
  FiSearch,
  FiUser,
  FiUsers,
} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import classes from './Navbar.module.scss';
import Users from '../Users/Users';

export default function Navbar() {
  return (
    <AppShell.Navbar>
      <Users></Users>
      <NavLink
        component={'div'}
        label={
          <Link to="/">
            <Text fz="xl">Home</Text>
          </Link>
        }
        leftSection={<FiHome size={24}></FiHome>}
      ></NavLink>
      <NavLink
        label={<Text fz="xl">Search</Text>}
        leftSection={<FiSearch size={24}></FiSearch>}
      ></NavLink>
      <NavLink
        label={<Text fz="xl">Chat</Text>}
        leftSection={<FiMessageSquare size={24}></FiMessageSquare>}
      ></NavLink>
      <NavLink label={<Text fz="xl">Rooms</Text>} leftSection={<FiUsers size={24}></FiUsers>}>
        <Link to="/room/general">
          <Text>General</Text>
        </Link>
        <Link to="/room/men">
          <Text>Men</Text>
        </Link>
        <Link to="/room/women">
          <Text>Women</Text>
        </Link>
      </NavLink>
    </AppShell.Navbar>
  );
}
