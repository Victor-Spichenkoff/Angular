import { inject, Service } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { BASE_URL } from '../../../global'

@Service()
export class AuthServiceApi {
    http = inject(HttpClient)
    baseUrl = `${BASE_URL}/auth`

    tryLogin(userName: string, password: string ) {
        return this.http.post<LoginResponse>(`${this.baseUrl}/signin`, { userName, password })
    }
}


interface LoginResponse {
    id:number
    userName:string
    role:string
    access_token:string
    expires_in:number
}
