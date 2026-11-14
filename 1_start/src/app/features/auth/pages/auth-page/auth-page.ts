import { Component, computed, effect, inject, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { HttpTestService } from '../../services/http-test-service';
import { Toast } from '../../../../shared/components/toast/toast';
import { Loading } from '../../../../shared/components/utils/loading/loading';

@Component({
    imports: [Loading],
    selector: 'app-auth-page',
    styles: ``,
    templateUrl: './auth-page.html',
})
// lembrar, precisa iniciar
export class AuthPage implements OnInit {
    authService = inject(AuthService)
    httpTestService = inject(HttpTestService)// chama o service, não o HTTP
    toast = inject(Toast)

    send() {
        this.authService.getTest()
    }

    // pegos os valores via service
    isLoading = this.httpTestService.loading
    error = this.httpTestService.error
    points = this.httpTestService.points// também o service que cuida, aqui só exibe

    // teste = computed(() => this.toast.error(this.error() ?? ""))

    contructor() {
        effect(()=> {
            console.log("error: ", this.error())
            this.toast.error(this.error() ?? "")
        })
    }


    ngOnInit() {
        this.httpTestService.load();
    }
}
