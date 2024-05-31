import { useEffect, useState } from 'react';
import { FiSend } from 'react-icons/fi';
import {
  ActionIcon,
  AppShell,
  Container,
  Flex,
  Group,
  Stack,
  TextInput,
  Title,
  rem,
  useMantineTheme,
} from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { useParams } from 'react-router-dom';
import classes from './ChatRoom.module.scss';
import { socket } from '@/utils/socket';
import Message from '../Message/Message';

export default function ChatRoom() {
  // console.log(roomId);

  const { roomId } = useParams();
  // const [isConnected, setIsConnected] = useState(socket.connected);
  const [messages, setMessages] = useState([]);
  const [messageValue, setMessageValue] = useState('');
  useEffect(() => {
    socket.emit('join room', roomId);
    function onMsgReceive(data) {
      const tmp_arr = [...messages];
      tmp_arr.unshift(data);
      // setMessages([...messages, data]);
      setMessages(tmp_arr);
      console.log('message recived');
    }
    socket.on('message', onMsgReceive);
    return () => {
      socket.off('message', onMsgReceive);
      socket.emit('leave room', roomId);
    };
  }, [messages]);
  return (
    <Flex direction="column" h="100%" gap="xs">
      <Title>Room:{roomId}</Title>
      <Flex
        w="100%"
        h="100%"
        style={{ overflowY: 'scroll' }}
        direction="column-reverse"
        justify="end"
      >
        {messages.map((message, index) => (
          <Message
            message={message.message}
            id={message.id}
            username={message.username}
            key={index}
          ></Message>
        ))}
      </Flex>
      <Flex align="center" justify="center">
        <Flex w="100%">
          <TextInput
            onChange={(e) => {
              setMessageValue(e.target.value);
            }}
            w="100%"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                socket.emit('message', { message: messageValue, roomId });
              }
            }}
          ></TextInput>
          <ActionIcon
            size="lg"
            variant="subtle"
            onClick={() => {
              socket.emit('message', { message: messageValue, roomId });
            }}
          >
            <FiSend size="100%"></FiSend>
          </ActionIcon>
        </Flex>
      </Flex>
    </Flex>
  );
}
