import { Grid } from '@mantine/core';
const SettingsLayout = () => {
  return (
    <>
      <Grid>
        <Grid.Col span={2}>setting</Grid.Col>
        <Grid.Col span={10}>content</Grid.Col>
      </Grid>
    </>
  );
};

export { SettingsLayout };
