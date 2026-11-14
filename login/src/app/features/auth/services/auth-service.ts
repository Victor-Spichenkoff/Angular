import { inject, Service } from '@angular/core'
import { AuthServiceApi } from './auth-service-api'
import { Toast } from '../../../shared/components/toast/toast'

@Service()
export class AuthService {
    api = inject(AuthServiceApi)
    toast = inject(Toast)

    login(userName: string, password: string) {
        this.api.tryLogin(userName, password).subscribe({
            next: (data) => {
                //salvar aqui
                this.toast.success('Logged in successfully')
            },
            error: (err) => {
                this.toast.error(err.error.message)
            },
        })
    }
}
