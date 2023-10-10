import { createContext, useState } from "react";
import { createIncrementalCompilerHost } from "typescript";

interface Context{
    readonly toDoList: string[];
    readonly onAdd: (toDo: string) => void;
    readonly onDelete: (toDo: string) => void;
}

const ToDoListContext = createContext<Context>({
    toDoList: [],
    /* eslint-disable @typescript-eslint/no-empty-function*/
    onAdd: (): void => {},
    /* eslint-disable @typescript-eslint/no-empty-function*/
    onDelete: (): void => {},
});

interface Props{
    children: JSX.Element | JSX.Element[];
}

const ToDoListContextProvider = ({children}: Props) => {
    const [toDoList, setToDoList] = useState([
        '리액트 공부하기',
        '운동하기',
        '책읽기',
    ]);

    const onDelete = (toDo: string) => {
        setToDoList(toDoList.filter((item) => item != toDo));
    };
    
    const onAdd = (toDo: string) => {
        setToDoList([...toDoList, toDo]);
    };

    return(
        <ToDoListContext.Provider
            value={{
                toDoList,
                onAdd,
                onDelete,
            }}>
                {children}
            </ToDoListContext.Provider>
    );
};

export {ToDoListContext, ToDoListContextProvider};