import { Service, signal } from '@angular/core'


export type ToastType = 'success' | 'error' | 'info'

export interface ToastItem {
    id: number
    type: ToastType
    message: string
}

@Service()
export class Toast {
    private nextId = 0
    readonly toasts = signal<ToastItem[]>([])

    // Mesmo tempo da animação
    show(type: ToastType, message: string, duration = 4000) {
        const id = this.nextId++
        this.toasts.update((list) => [...list, { id, type, message }])
        setTimeout(() => this.dismiss(id), duration)
    }

    success(message: string) {
        this.show('success', message)
    }
    error(message: string) {
        this.show('error', message, 6000)
    } // erro fica mais tempo
    info(message: string) {
        this.show('info', message)
    }

    dismiss(id: number) {
        this.toasts.update((list) => list.filter((t) => t.id !== id))
    }
}
