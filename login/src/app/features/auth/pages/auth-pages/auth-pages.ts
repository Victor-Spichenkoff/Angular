import { Component, inject, signal } from '@angular/core'
import { Input } from '../../../../shared/components/input/input'
import { ReactiveFormsModule } from '@angular/forms'
import { AuthService } from '../../services/auth-service'

@Component({
    imports: [Input, ReactiveFormsModule],
    selector: 'app-auth-pages',
    templateUrl: './auth-pages.html',
})
export class AuthPages {
    protected email = signal('')
    protected password = signal('')

    service = inject(AuthService)
}
