import { Text, Group, Flex } from '@mantine/core';
import classes from './Message.module.scss';

export default function Message({ message, id, username }) {
  return (
    <Group>
      <Flex gap="sm">
        <Text fw="bold" variant="gradient" gradient={{ from: 'orange', to: 'red', deg: 90 }}>
          {username}
        </Text>
        <Text>{message}</Text>
      </Flex>
    </Group>
  );
}
