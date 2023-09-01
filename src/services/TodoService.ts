import RequestService from "./RequestService";

class TodoService {

    private path: string = '/todo';

    get (): Promise<NodeTodo[]> {
        return this.request(this.path, { method: 'GET' })
    }

    create (): Promise<NodeTodo> {
        return this.request(this.path, { method: 'POST' })
    }

    delete (id: string): Promise<void> {
        return this.request(this.path, { method: 'DELETE', body: JSON.stringify({id}),
            headers: { 'Content-Type': 'application/json; charset=utf-8' }
        })
    }

    save (nodeTodo: NodeTodo): Promise<NodeTodo> {
        return this.request(this.path, { method: 'PUT', body: JSON.stringify(nodeTodo),
            headers: { 'Content-Type': 'application/json; charset=utf-8' }
        })
    }

    private async request <T>(url: string, options: RequestInit): Promise<T> {
        return await RequestService.request(url, options);
    }
}


export default new TodoService();

