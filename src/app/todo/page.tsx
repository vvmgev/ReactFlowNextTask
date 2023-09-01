'use client';
import { useCallback, useMemo, useState, useEffect } from 'react';
import TodoForm from '@/components/todoForm/todoForm';
import Button from '@/components/button/button';
import ReactFlow, {
  Controls,
  Background,
  applyNodeChanges,
  NodeChange,
} from 'reactflow';
import PlusIcon from '@/assets/icons/plus.svg';
import TodoService from '@/services/TodoService';
import 'reactflow/dist/style.css';

const Todo: React.FC = (): React.ReactElement => {
  const [nodes, setNodes] = useState([] as NodeTodo[]);
  
  const nodeTypes = useMemo(() => ({ todoForm: (props: { data: NodeTodoData }) => (
    <TodoForm onSave={saveTodo} onDelete={onDelete} {...props} />)}), 
  []);
  
  const onNodesChange = useCallback(
    // @ts-ignore
    (changes: NodeChange[]) => setNodes((nds: NodeTodo[]) => applyNodeChanges(changes, nds)),
    [setNodes]
  );

  const createTodo = async (): Promise<void> => {
    const nodeTodo: NodeTodo = await TodoService.create();
    setNodes((nds: NodeTodo[]) => [...nds, nodeTodo]);
  };

  const onDelete = async (id: string): Promise<void> => {
    await TodoService.delete(id);
    getNodeTodos();
  }

  const saveTodo = (nodeData: NodeTodoData): void => {
    setNodes((nodes: NodeTodo[]) => {
      const foundNodeTodo: NodeTodo = nodes.find((item: NodeTodo) => item.id === nodeData.id) as NodeTodo;
      foundNodeTodo.data = nodeData;
      TodoService.save(
        {
          id: foundNodeTodo.id,
          data: nodeData,
          position: foundNodeTodo.position,
          type: 'todoForm'
        }
      );
      return [...nodes];
    })
  };

  const getNodeTodos = async (): Promise<void> => {
    const nodeTodos: NodeTodo[] = await TodoService.get();
    setNodes(nodeTodos);
  };

  useEffect(() => {
    getNodeTodos()
  }, []);

  return (
    <div className='p-20 pb-5 max-md:px-2 w-full h-full relative'>
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        nodeTypes={nodeTypes}
      >
        <Controls />
        <Background />
      </ReactFlow>
      <div className='absolute right-10 top-20'>
        <Button onClick={createTodo} icon={PlusIcon}>Create</Button>
      </div>
    </div>
  );
};

export default Todo;
