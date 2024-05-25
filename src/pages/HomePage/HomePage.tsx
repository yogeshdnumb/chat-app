import { AppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Header from '@/components/Header/Header';
import Navbar from '@/components/Navbar/Navbar';
import Main from '@/components/Main/Main';
import classes from './HomePage.module.scss';

export default function HomePage() {
  const [isDesktopOpened, { toggle: toggleDesktopNav }] = useDisclosure(true);
  const [isMobileOpened, { toggle: toggleMobileNav }] = useDisclosure(false);
  return (
    <AppShell
      // padding={'lg'}
      header={{ height: { base: 60 } }}
      navbar={{
        width: { base: 300 },
        breakpoint: 'xs',
        collapsed: { mobile: !isMobileOpened, desktop: !isDesktopOpened },
      }}
    >
      <Header toggleMobileNav={toggleMobileNav} toggleDesktopNav={toggleDesktopNav}></Header>
      <Navbar></Navbar>
      <Main></Main>
    </AppShell>
  );
}
