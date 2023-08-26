import { Divider } from '@mantine/core';
import { StyledButton } from '../components/StyleButton.tsx';
import { CreateRequestMenu } from './CreateRequestMenu.tsx';

export const LayoutNavbarContent = () => {
  return (
    <>
      <CreateRequestMenu />
      <StyledButton color="gray" radius="md">
        123
      </StyledButton>
      <Divider my="sm" p={0} />
      {/*<Grid>*/}
      {/*    <Grid.Col>*/}
      {/*        <Group position={'right'} p={'sm'} align={'center'}>*/}
      {/*            <CreateRequestMenu/>*/}
      {/*        </Group>*/}
      {/*        <Divider my="sm" p={0}/>*/}
      {/*    </Grid.Col>*/}
      {/*</Grid>*/}
    </>
  );
};
