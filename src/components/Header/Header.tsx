import {
  AppShell,
  Group,
  rem,
  ActionIcon,
  Text,
  useMantineColorScheme,
  useComputedColorScheme,
  Autocomplete,
} from '@mantine/core';
import { FiMenu, FiMoon, FiSearch, FiSun } from 'react-icons/fi';
import clsx from 'clsx';
import classes from './Header.module.scss';

export default function Header({ toggleDesktopNav, toggleMobileNav }) {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
  return (
    <AppShell.Header>
      <Group h={'100%'} px={'xs'} justify="space-between">
        <Group h="100%">
          <ActionIcon
            visibleFrom="xs"
            variant="subtle"
            onClick={() => {
              toggleDesktopNav();
            }}
          >
            <FiMenu size={100}></FiMenu>
          </ActionIcon>
          <ActionIcon
            hiddenFrom="xs"
            variant="subtle"
            onClick={() => {
              toggleMobileNav();
            }}
          >
            <FiMenu size={18}></FiMenu>
          </ActionIcon>
          <Text fz={'xl'} fw={'bold'} c={'pink'}>
            Make a Friend
          </Text>
        </Group>
        <Group>
          <Autocomplete
            leftSection={<FiSearch size={24}></FiSearch>}
            fz={'xl'}
            placeholder="Seach"
          ></Autocomplete>
          <ActionIcon
            variant="default"
            onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
          >
            <FiSun size={24} className={clsx(classes.icon, classes.light)}></FiSun>
            <FiMoon size={24} className={clsx(classes.icon, classes.dark)}></FiMoon>
          </ActionIcon>
        </Group>
      </Group>
    </AppShell.Header>
  );
}
