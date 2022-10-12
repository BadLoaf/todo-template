import React, { ChangeEvent } from 'react'
import { useState } from 'react'

export default function TaskAdder() {
    const [value, setValue] = useState<string>('');
    const [tasks, setTasks] = useState<string[]>([])
    

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    const addTask = () => {
        setTasks([value, ...tasks])
        setValue('')
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={onChange} />
            <button onClick={addTask}>Add Task</button>
        </form>
        <div>
            {tasks.map(item => <li>{item}</li>)}
        </div>
        </>
    )
}