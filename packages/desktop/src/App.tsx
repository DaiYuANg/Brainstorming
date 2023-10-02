import { Button } from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';

function App() {
  const preferredColorScheme = useColorScheme();
  console.log(preferredColorScheme);

  return <Button>1231</Button>;
}

export default App;
