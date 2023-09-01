import { useState } from 'react';
import Button from '@/components/button/button';
import InputText from '../inputText/inputText';

type Props = {
    onSave: (nodeData: NodeTodoData) => void;
    onDelete: (id: string) => void;
    data: NodeTodoData,
};

const TodoForm: React.FC<Props> = ({ data, onSave, onDelete }): React.ReactElement => {
    const [title, setTitle] = useState(data.title);
    const [description, setDescription] = useState(data.description);
    const [completed, setCompleted] = useState(data.completed);
    const showSaveBtn: boolean = (data.title !== title) || 
                                 (data.description !== description) || 
                                 (data.completed !== completed);
    return (
        <div className={`text-updater-node p-5 rounded-xl flex flex-col gap-3 min-w-[350px] ${completed ? 'bg-slate-400' : 'bg-slate-500'}`}>
        <div className='flex items-center justify-between'>
            <div>ID: {data.id}</div>
            <div className='w-[100px]'>
                {showSaveBtn && <Button onClick={() => {onSave({id: data.id, title, description, completed})}}>Save</Button>}
            </div>
            <div className='w-[100px]'><Button onClick={() => {onDelete(data.id)}}>Delete</Button></div>
        </div>
        <div className='flex flex-col gap-2'>
            <InputText name="title" onChange={e => setTitle(e.target.value)} value={title}
                classes="nodrag text-black w-full border border-slate-700 rounded pl-2" />
            <InputText type='textarea' name="description" onChange={e => setDescription(e.target.value)} value={description}
                classes="nodrag min-h-[150px] text-black w-full border border-slate-700 rounded resize-none pl-2" />
            <Button onClick={() => setCompleted((completed: boolean) => !completed)}>
                Mark as {completed ? 'incompleted' : 'completed'}
            </Button>
        </div>
        </div>
    );
}

export default TodoForm;
