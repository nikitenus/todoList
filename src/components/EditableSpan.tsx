 import React, {ChangeEvent, useState} from "react";
 import {TextField} from "@mui/material";

type EditableSpanPropsType = {
    title: string
    callBack: (title: string) => void
}

export function EditableSpan(props: EditableSpanPropsType) {

    const [edit, setEdit] = useState(false);
    const [newTitle, setTitle] = useState(props.title);

    const onEditMode = () => setEdit(true);
    const offEditMode = () => {
        setEdit(false);
        props.callBack(newTitle);
    };
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)


    return (
        edit
            ? <TextField onBlur={offEditMode} autoFocus value={newTitle} onChange={onChangeHandler}/>
            : <span onDoubleClick={onEditMode}>{props.title}</span>
    )
}