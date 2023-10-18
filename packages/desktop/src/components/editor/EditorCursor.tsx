import {Editor, Range} from 'slate'
import {ReactEditor, useSlate} from "slate-react";
import {useEffect, useRef, useState} from "react";

const EditorCursor = () => {
    const editor = useSlate()
    const cursorPosition = useRef(null);
    const [top, setTop] = useState(0)
    const [left, setLeft] = useState(0)

    return (
        <>
            <span
                style={{
                    position: 'absolute',
                    background: 'red',
                    width: '10px',
                    height: '20px',
                    top: top,
                    left: left
                }}
            >
            </span>
        </>
    )
}

export {EditorCursor}