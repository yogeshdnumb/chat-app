import { Button, Container, Stack, TextInput } from '@mantine/core';
import classes from './SelectUsername.module.scss';
import { socket } from '@/utils/socket';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function SelectUsername() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  return (
    <Container>
      <TextInput
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        label="Choose Username"
        description="name"
        placeholder="username"
      ></TextInput>

      <Button
        onClick={() => {
          socket.auth = { username };
          socket.connect();
          navigate('room/general');
        }}
      >
        Start Chatting!
      </Button>
    </Container>
  );
}
