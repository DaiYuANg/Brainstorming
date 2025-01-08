import { Button, Stack } from '@mantine/core';

interface Command {
  label: string;
  format: string;
}

interface CommandMenuProps {
  onCommandSelect: (format: string) => void;
}

const COMMANDS: Command[] = [
  { label: 'Heading 1', format: 'heading-one' },
  { label: 'Heading 2', format: 'heading-two' },
  { label: 'Bulleted List', format: 'bulleted-list' },
];
const CommandMenu = ({ onCommandSelect }: CommandMenuProps) => {
  return (
    <Stack
      style={{
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.15)',
        padding: '8px',
        borderRadius: '4px',
        zIndex: 1000,
      }}
    >
      {COMMANDS.map((command) => (
        <Button
          key={command.label}
          variant='light'
          onClick={() => onCommandSelect(command.format)}
          fullWidth
        >
          {command.label}
        </Button>
      ))}
    </Stack>
  );
};

export { CommandMenu };
