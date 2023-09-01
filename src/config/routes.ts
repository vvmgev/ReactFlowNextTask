import ChartIcon from '@/assets/icons/chart.svg';
import TodoIcon from '@/assets/icons/todo.svg';

type Path = {
    path: string,
    name: string,
    icon: string,
};

export const sidebarPaths: readonly Path[] = [
    { path: '/todo', name: 'Todo', icon: TodoIcon},
    { path: '/charts', name: 'Charts', icon: ChartIcon},
];
