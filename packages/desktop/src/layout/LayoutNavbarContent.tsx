import {
  ActionIcon,
  AppShell,
  Card,
  Group,
  Image,
  Menu,
  ScrollArea,
  SimpleGrid,
  Text,
  rem,
} from '@mantine/core';
import {
  IconDots,
  IconEye,
  IconFileZip,
  IconLayoutSidebarLeftCollapseFilled,
  IconTrash,
} from '@tabler/icons-react';

export const LayoutNavbarContent = () => {
  const images = [
    'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
    'https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
    'https://images.unsplash.com/photo-1444084316824-dc26d6657664?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
  ];
  return (
    <>
      <AppShell.Navbar withBorder={true} >
        {/*<Group justify={'end'} align={'center'}>*/}
        {/*  <ActionIcon color={'pink'} size={'lg'}>*/}
        {/*    <IconLayoutSidebarLeftCollapseFilled />*/}
        {/*  </ActionIcon>*/}
        {/*</Group>*/}
        {/*<ScrollArea*/}
        {/*  p={0}*/}
        {/*  style={{*/}
        {/*    width: '100%',*/}
        {/*    backgroundColor: 'gray',*/}
        {/*  }}*/}
        {/*>*/}
        {/*  <Card shadow="sm" radius={0}>*/}
        {/*    <Card.Section withBorder inheritPadding py="xs">*/}
        {/*      <Group justify="space-between">*/}
        {/*        <Text fw={500}>Review pictures</Text>*/}
        {/*        <Menu withinPortal position="bottom-end" shadow="sm">*/}
        {/*          <Menu.Target>*/}
        {/*            <ActionIcon variant="subtle" color="gray">*/}
        {/*              <IconDots style={{ width: rem(16), height: rem(16) }} />*/}
        {/*            </ActionIcon>*/}
        {/*          </Menu.Target>*/}

        {/*          <Menu.Dropdown>*/}
        {/*            <Menu.Item*/}
        {/*              leftSection={*/}
        {/*                <IconFileZip*/}
        {/*                  style={{ width: rem(14), height: rem(14) }}*/}
        {/*                />*/}
        {/*              }*/}
        {/*            >*/}
        {/*              Download zip*/}
        {/*            </Menu.Item>*/}
        {/*            <Menu.Item*/}
        {/*              leftSection={*/}
        {/*                <IconEye style={{ width: rem(14), height: rem(14) }} />*/}
        {/*              }*/}
        {/*            >*/}
        {/*              Preview all*/}
        {/*            </Menu.Item>*/}
        {/*            <Menu.Item*/}
        {/*              leftSection={*/}
        {/*                <IconTrash*/}
        {/*                  style={{ width: rem(14), height: rem(14) }}*/}
        {/*                />*/}
        {/*              }*/}
        {/*              color="red"*/}
        {/*            >*/}
        {/*              Delete all*/}
        {/*            </Menu.Item>*/}
        {/*          </Menu.Dropdown>*/}
        {/*        </Menu>*/}
        {/*      </Group>*/}
        {/*    </Card.Section>*/}

        {/*    <Text mt="sm" c="dimmed" size="sm">*/}
        {/*      <Text span inherit c="var(--mantine-color-anchor)">*/}
        {/*        200+ images uploaded*/}
        {/*      </Text>{' '}*/}
        {/*      since last visit, review them to select which one should be added*/}
        {/*      to your gallery*/}
        {/*    </Text>*/}

        {/*    <Card.Section mt="sm">*/}
        {/*      <Image src="https://images.unsplash.com/photo-1579263477001-7a703f1974e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" />*/}
        {/*    </Card.Section>*/}

        {/*    <Card.Section inheritPadding mt="sm" pb="md">*/}
        {/*      <SimpleGrid cols={3}>*/}
        {/*        {images.map((image) => (*/}
        {/*          <Image src={image} key={image} radius="sm" />*/}
        {/*        ))}*/}
        {/*      </SimpleGrid>*/}
        {/*    </Card.Section>*/}
        {/*  </Card>*/}
        {/*</ScrollArea>*/}
      </AppShell.Navbar>
    </>
  );
};
