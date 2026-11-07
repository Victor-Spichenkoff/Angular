import { Service, signal } from '@angular/core'

export interface ConfirmOptions {
    title?: string
    message: string
    confirmText?: string
}


@Service()
export class DialogService {
    readonly options = signal<ConfirmOptions | null>(null)// começa null, logo, apagado
    private resolver: ((value: boolean) => void) | null = null //Confirm e cancel chamam ele. 
    //E repassa para quem chama o service

    ask(options: ConfirmOptions): Promise<boolean> {
        this.resolver?.(false) // se já havia um aberto, cancela ele
        this.options.set(options)
        return new Promise<boolean>(resolve => (this.resolver = resolve))
    }

    respond(result: boolean) {
        this.resolver?.(result)
        this.resolver = null
        this.options.set(null) // fecha o dialog
    }
}
