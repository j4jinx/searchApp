import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
    apiUrl = 'https://api.github.com';

    constructor(private http: HttpClient) { }

    searchUsers(username: string) {
        const qs = 'q=' + encodeURIComponent(`${username} in:name in:login in:email`);
        return this.http.get<any>(`${this.apiUrl}/search/users?${qs}`);
    }

    getUser(username: string) {
        return this.http.get<any>(`${this.apiUrl}/users/${username}`);
    }
}