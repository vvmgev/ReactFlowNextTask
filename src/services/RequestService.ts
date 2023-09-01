class RequestService {
    
    private static url: string = `http://localhost:${process.env.SERVER_PORT}`;

    static async request <T>(path: string, options: RequestInit): Promise<T> {
        const response = await fetch(`${RequestService.url}${path}` , {...options, credentials: 'include'});
        if (response.ok) return response.json();
        throw new Error();
        
    }
}

export default RequestService;
