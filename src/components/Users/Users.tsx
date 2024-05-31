import { Stack } from '@mantine/core';
import classes from './Users.module.scss';
import { socket } from '@/utils/socket';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    function onUsers(users) {
      setUsers(users);
    }
    function onNewUserConnected(user) {
      setUsers([...users, user]);
      console.log('new user cme');
    }
    socket.on('users', onUsers);
    socket.on('new user connected', onNewUserConnected);
    return () => {
      socket.off('users', onUsers);
      socket.off('new user connected', onNewUserConnected);
    };
  }, [users]);
  return (
    <Stack>
      {users.map((user, index) => (
        <Link to={`/room/${user.id}`}>{user.username}</Link>
      ))}
    </Stack>
  );
}
