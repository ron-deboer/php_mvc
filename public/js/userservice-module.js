import cipher from './cipher.min.js';

class UserService {
    constructor() {
        this.api_base = "http://localhost:3000/api/users";
    }

    async getAllUsers() {
        const url = this.api_base;
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        };
        const resp = await fetch(url, options);
        return await resp.json();
    }
    
    async userLogin(data) {
        data.timestamp = dateTimeStr();
        let body = JSON.stringify({
            data: cipher.encode(JSON.stringify(data)),
        });
        const url = this.api_base.replace('api/users', 'api/userlogin');
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body,
        };
        const resp = await fetch(url, options);
        const result = await resp.json();
        return result;
    }

    async registerUser(data) {
        data.timestamp = dateTimeStr();
        let body = JSON.stringify({
            data: cipher.encode(JSON.stringify(data)),
        });
        const url = this.api_base;
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body,
        };
        const resp = await fetch(url, options);
        return await resp.json();
    }

    async updateUser(data) {
        data.timestamp = dateTimeStr();        
        let body = JSON.stringify({
            data: cipher.encode(JSON.stringify(data)),
        });
        const url = this.api_base + "/";
        const options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body,
        };
        const resp = await fetch(url, options);
        return await resp.json();
    }

    async getUser(id) {
        const url = this.api_base + "/" + id;
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        };
        const resp = await fetch(url, options);
        return await resp.json();
    }

    async deleteUser(id) {
        const url = this.api_base + "/" + id;
        const options = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        }
        const resp = await fetch(url, options);
        return await resp.json();
    }
}
export default new UserService();