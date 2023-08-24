import {AppShell, Box} from '@mantine/core';
import {LayoutNavbar} from './LayoutNavbar.tsx';
import {Workspace} from './Workspace.tsx';
import {LayoutHeader} from './LayoutHeader.tsx';

export const MainLayout = () => {
    return (
        <>
            <Box>
                <AppShell
                    fixed
                    styles={(theme) => ({
                        main: {
                            backgroundColor:
                                theme.colorScheme === 'dark'
                                    ? theme.colors.dark[8]
                                    : theme.colors.gray[0],
                        },
                    })}
                    navbar={<LayoutNavbar/>}
                    header={<LayoutHeader/>}
                >
                    <Workspace/>
                </AppShell>
            </Box>
        </>
    );
};
