import {Container, Flex, Text} from '@mantine/core';
import {RouterProvider} from 'react-router-dom';
import {router} from '../modules';
import {WorkspaceTabs} from "./WorkspaceTabs.tsx";

export const Workspace = () => {
    return (
        <>
            <WorkspaceTabs />
            <Flex>
                <Text>123</Text>
                <Text>123</Text>
            </Flex>
            <Container>
                <RouterProvider router={router}/>
            </Container>
        </>
    );
};
