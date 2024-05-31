import { AppShell, Notification } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '@/components/Header/Header';
import Navbar from '@/components/Navbar/Navbar';
import Main from '@/components/Main/Main';
import classes from './HomePage.module.scss';
import { socket } from '@/utils/socket';
import { notifications } from '@mantine/notifications';

export default function Layout() {
  useEffect(() => {
    function onConnect() {
      console.log('connected');

      notifications.show({ message: 'Connected', autoClose: 2000 });
    }
    function onDisconnect() {
      notifications.show({ message: 'Disconnected', autoClose: 2000 });
      console.log('disconnected');
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.onAny((event, ...args) => {
      console.log(event, args);
    });

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
    };
  }, []);
  const [isDesktopOpened, { toggle: toggleDesktopNav }] = useDisclosure(true);
  const [isMobileOpened, { toggle: toggleMobileNav }] = useDisclosure(false);
  return (
    <AppShell
      h="100%"
      // padding={'lg'}
      header={{ height: { base: 60 } }}
      navbar={{
        width: { base: 200 },
        breakpoint: 'xs',
        collapsed: { mobile: !isMobileOpened, desktop: !isDesktopOpened },
      }}
      padding="md"
    >
      <Header toggleMobileNav={toggleMobileNav} toggleDesktopNav={toggleDesktopNav}></Header>
      <Navbar></Navbar>
      {/* <Main></Main> */}
      <AppShell.Main h="100%">
        <Outlet></Outlet>
      </AppShell.Main>
    </AppShell>
  );
}
