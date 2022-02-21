import { convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

EditorField.propTypes = {
    onEditorStateChange: PropTypes.func
};

function EditorField({ onEditorStateChange = null }) {
    let editorState;
    editorState = EditorState.createEmpty()

    let [editor, setEditor] = useState(editorState)

    function onChangeEditorState(editorState) {
        if (!onEditorStateChange) return;

        setEditor(editorState)
        const value = (draftToHtml(convertToRaw(editor.getCurrentContent())))

        onEditorStateChange(value)
    }

    return <div style={{ border: "1px solid #dce0e4", minHeight: "200px", padding: "0 5px" }}>

        <Editor
            placeholder='Thêm nội dung bài viết...'
            editorState={editor}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={onChangeEditorState}
            toolbar={{
                options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'textAlign', 'colorPicker', 'link', 'embedded', 'emoji', 'image', 'remove', 'history'],
                fontFamily: {
                    options: ['Arial', 'Georgia', 'Impact', 'Tahoma', 'Times New Roman', 'Verdana', 'Montserrat'],
                    className: undefined,
                    component: undefined,
                    dropdownClassName: undefined,
                },

            }}
        />
    </div>
        ;
}

export default EditorField;
