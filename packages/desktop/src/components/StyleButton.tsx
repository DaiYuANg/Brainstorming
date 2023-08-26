import styled from '@emotion/styled';
import { Button, ButtonProps, createPolymorphicComponent } from '@mantine/core';

const _StyledButton = styled(Button)`
  border-width: 0.125rem;
  color: ${({ theme }) =>
    theme.colorScheme === 'dark' ? theme.white : theme.black};
`;

const StyledButton = createPolymorphicComponent<'button', ButtonProps>(
  _StyledButton,
);

export { StyledButton };
