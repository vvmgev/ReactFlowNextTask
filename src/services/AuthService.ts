import RequestService from "@/services/RequestService";

class AuthService {

    login(email: string, password: string): Promise<{token: string}> {
        return this.request('/login', {method: 'POST', body: JSON.stringify({email, password}),
                headers: { 'Content-Type': 'application/json; charset=utf-8' }
            });
    }


    register(email: string, password: string): Promise<{token: string}> {
        return this.request('/register', {method: 'POST', body: JSON.stringify({email, password}),
                headers: { 'Content-Type': 'application/json; charset=utf-8' }
            });
    }

    logout(): Promise<void> {
        return this.request('/logout', {method: 'POST',
                headers: { 'Content-Type': 'application/json; charset=utf-8' }
            });
    }

    private async request <T>(url: string, options: RequestInit): Promise<T> {
        return await RequestService.request(url, options);
    }
}

export default new AuthService();