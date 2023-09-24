import { Button, ButtonProps } from '@mui/base';

interface RButtonProp extends ButtonProps {}

const RButton = (prop: RButtonProp) => {
  console.log(prop);
  return (
    <>
      <Button>dasda</Button>
    </>
  );
};

export { RButton };
export type { RButtonProp };
