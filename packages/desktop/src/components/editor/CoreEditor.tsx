import {Container} from '@mantine/core';
import '@mantine/dropzone/styles.css';
import {useCallback, useEffect, useMemo} from 'react';
import {
    BaseEditor,
    Descendant,
    Editor,
    Node,
    Element as SlateElement,
    createEditor,
} from 'slate';
import {HistoryEditor, withHistory} from 'slate-history';
import {
    Editable,
    ReactEditor,
    RenderElementProps,
    Slate,
    withReact,
} from 'slate-react';
import classes from './CoreEditor.module.css';
import {Element} from './Element.tsx';
import {SHORTCUTS, withShortcuts} from './WithShortcuts.ts';

interface CoreEditorProps {
    initialValue: Array<Descendant>;
}

const CoreEditor = (props: CoreEditorProps) => {
    const editor = useMemo<BaseEditor & ReactEditor & HistoryEditor>(
        () => withShortcuts(withReact(withHistory(createEditor()))),
        [],
    );

    const renderElement = useCallback(
        (props: RenderElementProps) => (
            <Element {...props} children={props.children}/>
        ),
        [],
    );
    const task = useCallback(() => {
        const pendingDiffs = ReactEditor.androidPendingDiffs(editor);

        const scheduleFlush = pendingDiffs?.some(({diff, path}) => {
            if (!diff.text.endsWith(' ')) {
                return false;
            }

            const {text} = Node.leaf(editor, path);
            const beforeText = text.slice(0, diff.start) + diff.text.slice(0, -1);
            if (!(beforeText in SHORTCUTS)) {
                return;
            }

            const blockEntry = Editor.above(editor, {
                at: path,
                match: (n) => SlateElement.isElement(n) && Editor.isBlock(editor, n),
            });
            if (!blockEntry) {
                return false;
            }

            const [, blockPath] = blockEntry;
            return Editor.isStart(editor, Editor.start(editor, path), blockPath);
        });

        if (scheduleFlush) {
            ReactEditor.androidScheduleFlush(editor);
        }
    },[editor]);
    
    const handleDOMBeforeInput = useCallback(() => {
        queueMicrotask(task);
    }, [task]);

    return (
        <>
            <Container style={{
                position: 'relative'
            }}>
                <Slate editor={editor} initialValue={props.initialValue}>
                    <Editable
                        id={'editor'}
                        className={classes.root}
                        onDOMBeforeInput={handleDOMBeforeInput}
                        renderElement={renderElement}
                        placeholder='Write some markdown...'
                        autoFocus
                    />
                </Slate>
            </Container>
        </>
    );
};

export {CoreEditor};
export type {CoreEditorProps};
