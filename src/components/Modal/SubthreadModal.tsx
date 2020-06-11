import React, { useState, useRef } from 'react'
import { Editor, EditorState } from 'draft-js'
import Modal from '../UI/Modal'

function SubthreadModal() {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const editor = useRef<any>();
    function onChange(state: any){
        setEditorState(state);
    }

    return (
        <Modal modalName="subthread">
            <Editor ref={editor} editorState={editorState} onChange={onChange} />
        </Modal>
    )
}

export default SubthreadModal;