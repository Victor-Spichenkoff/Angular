import { Toast } from './toast'
import { Component, inject } from '@angular/core'

@Component({
    standalone: true,
    selector: 'app-toast-container',
    template: `
        <div class="fixed top-4 right-4 z-50 flex flex-col gap-2">
            @for (toast of toastService.toasts(); track toast.id) {
                <div
                    class="rounded-lg px-4 py-3 text-white shadow-lg flex items-center gap-3
                    slide-in-out"
                    [class.bg-green-600]="toast.type === 'success'"
                    [class.bg-red-600]="toast.type === 'error'"
                    [class.bg-blue-600]="toast.type === 'info'"
                >
                    <span>{{ toast.message }}</span>
                    <button (click)="toastService.dismiss(toast.id)">✕</button>
                </div>
            }
        </div>
    `,
})
export class ToastContainerComponent {
    toastService = inject(Toast)
}
