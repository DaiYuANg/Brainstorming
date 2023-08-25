import {ActionIcon, Divider, Grid, Group, Navbar, Stack, useMantineTheme} from '@mantine/core';
import { IconRocket, IconSettings } from '@tabler/icons-react';
import { CreateRequestMenu } from './CreateRequestMenu.tsx';
import { OpenSettings } from './OpenSettings.tsx';
import {useCallback, useEffect, useRef, useState} from "react";

export const LayoutNavbar = () => {
  const sidebarRef = useRef<HTMLElement>(null);
  const theme = useMantineTheme();
  const [isResizing, setIsResizing] = useState(false);

  const resize = useCallback(
      (mouseMoveEvent:MouseEvent) => {
        if (isResizing) {
          setSidebarWidth(
              mouseMoveEvent.clientX -
              sidebarRef.current!.getBoundingClientRect().left
          );
        }
      },
      [isResizing]
  );
  const [sidebarWidth, setSidebarWidth] = useState<number>(268);
  const startResizing = useCallback((mouseDownEvent) => {
    setIsResizing(true);
  }, []);

  const stopResizing = useCallback(() => {
    setIsResizing(false);
  }, []);
  useEffect(() => {
    window.addEventListener("mousemove", resize);
    window.addEventListener("mouseup", stopResizing);
    return () => {
      window.removeEventListener("mousemove", resize);
      window.removeEventListener("mouseup", stopResizing);
    };
  }, [resize, stopResizing]);

  return (
    <>
      <Navbar width={{ base: sidebarWidth }}
              ref={sidebarRef}
      >
        <Grid>
          <Grid.Col
            span={2}
            p={'sm'}
            sx={{
              height: '100vh',
            }}
          >
            <Stack>
              <ActionIcon>
                <IconRocket />
              </ActionIcon>
              <ActionIcon>
                <IconRocket />
              </ActionIcon>
              <ActionIcon>
                <IconRocket />
              </ActionIcon>
              <ActionIcon>
                <IconSettings />
              </ActionIcon>
            </Stack>
            <Stack
              sx={{
                position: 'absolute',
                bottom: 0,
              }}
            >
              <OpenSettings />
            </Stack>
          </Grid.Col>
          <Grid.Col span={9}>
            <Group position={'right'} p={'sm'} align={'center'}>
              <CreateRequestMenu />
            </Group>
            <Divider my="sm" p={0} />
          </Grid.Col>
          <Grid.Col span={1}>
            <div className="resizer"
                 onMouseDown={(event)=>{

                 }}
                 style={{
              backgroundColor: theme.colors.gray[2],
              width: '10px',
              height: '100vh',
              resize: 'horizontal',
              cursor: 'col-resize'
            }} />
          </Grid.Col>
        </Grid>
      </Navbar>
    </>
  );
};
