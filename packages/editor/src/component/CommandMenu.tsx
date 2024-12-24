import { Button, Stack } from '@mantine/core';

// 定义菜单命令的类型
interface Command {
  label: string;
  format: string;
}

// 定义 CommandMenu 的 props 类型
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
        background: 'white',
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
