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
import { Spotlight, SpotlightActionData, spotlight } from '@mantine/spotlight';
import { FiDatabase, FiDollarSign, FiHome, FiMenu, FiMoon, FiSearch, FiSun } from 'react-icons/fi';
import clsx from 'clsx';
import classes from './Header.module.scss';

const actions: SpotlightActionData[] = [
  {
    id: 'home',
    label: 'Home',
    description: 'Get to home page',
    onClick: () => console.log('Home'),
    leftSection: <FiHome style={{ width: rem(24), height: rem(24) }} stroke={1.5} />,
  },
  {
    id: 'dashboard',
    label: 'Dashboard',
    description: 'Get full information about current system status',
    onClick: () => console.log('Dashboard'),
    leftSection: <FiDatabase style={{ width: rem(24), height: rem(24) }} stroke={1.5} />,
  },
  {
    id: 'documentation',
    label: 'Documentation',
    description: 'Visit documentation to lean more about all features',
    onClick: () => console.log('Documentation'),
    leftSection: <FiDollarSign style={{ width: rem(24), height: rem(24) }} stroke={1.5} />,
  },
];

export default function Header({ toggleDesktopNav, toggleMobileNav }) {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
  return (
    <AppShell.Header>
      <Group h="100%" px="xs" justify="space-between">
        <Group h="100%">
          <ActionIcon
            size="lg"
            visibleFrom="xs"
            variant="default"
            onClick={() => {
              toggleDesktopNav();
            }}
          >
            <FiMenu size={32}></FiMenu>
          </ActionIcon>
          <ActionIcon
            size="lg"
            hiddenFrom="xs"
            variant="default"
            onClick={() => {
              toggleMobileNav();
            }}
          >
            <FiMenu size={32}></FiMenu>
          </ActionIcon>
          <Text fz="xl" fw="bold" c="pink">
            Make a Friend
          </Text>
        </Group>
        <Group>
          <Autocomplete
            visibleFrom="sm"
            data={[
              { group: 'Frontend', items: ['React', 'Angular'] },
              { group: 'Backend', items: ['Express', 'Django'] },
            ]}
            comboboxProps={{ shadow: 'md' }}
            leftSection={<FiSearch size={24}></FiSearch>}
            fz="xl"
            placeholder="Seach"
          ></Autocomplete>
          <ActionIcon
            size="lg"
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
