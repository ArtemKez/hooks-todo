import './App.css';
import TasksList from "./components/TasksList";
import CreateTaskForm from "./components/CreateTaskForm";
import {useState} from "react";

function App() {
    const [state, setState] = useState({
        lastIndex: 3,
        items: [
            {
                id: 1,
                isDone: false,
                text: 'text1',
            },
            {
                id: 2,
                isDone: true,
                text: 'text2',
            },
            {
                id: 3,
                isDone: false,
                text: 'text3',
            }
        ]
    })

    function setChecked(id) {
        const items = state.items.map((el) => {
            if (el.id === id) {
                el.isDone = !el.isDone
            }
            return el
        })
        setState({items})
    }

    function removeItem(id) {
        const items = state.items.filter((el) => {
            return el.id !== id
        })
        setState({items})
    }

    function addNewItem(item) {
        const newLastIndex = state.lastIndex + 1
        item.id = newLastIndex
        item.isDone = false
        setState({lastIndex: newLastIndex, items: [...state.items, item]})
    }

    return (
        <>
            <header className={"header"}>To-Do List</header>
            <div className="container">
                <TasksList items={state.items} removeItem={removeItem} setChecked={setChecked}/>
                <CreateTaskForm addNewItem={addNewItem}/>
            </div>
        </>
    );
}

export default App;
