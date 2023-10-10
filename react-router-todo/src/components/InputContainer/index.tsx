import { useState } from "react";
import { ToDoInput } from "pages/ToDoInput";
import { ShowInputButton } from "components/ShowInputButton";

export const InputContainer = () => {
    const [showToDoInput, setShowToDoInput] = useState(false);

    const onClose = () => {
        setShowToDoInput(false);
    };

    return(
        <>
        {showToDoInput && <ToDoInput></ToDoInput>}
        <ShowInputButton show={showToDoInput} onClick={() => setShowToDoInput(!showToDoInput)}></ShowInputButton>
        </>
    );
}