import { Component, inject } from '@angular/core';
import { DialogService } from './dialog-service';

@Component({
  selector: 'app-dialog-host',
  standalone: true,
  template: `
  <!-- No instante que pergunta, options passa a não ser null (ask), então exibe a lista -->
    @if (confirm.options(); as opts) {
      <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
           (click)="confirm.respond(false)">
        <div class="w-full max-w-sm rounded-lg bg-white p-6 shadow-xl"
             (click)="$event.stopPropagation()">
          <h2 class="text-lg font-semibold">{{ opts.title ?? 'Confirmar ação' }}</h2>
          <p class="mt-2 text-gray-600">{{ opts.message }}</p>

          <div class="mt-6 flex justify-end gap-2">
            <button class="rounded px-4 py-2 hover:bg-gray-100"
                    (click)="confirm.respond(false)">Cancelar</button>
            <button class="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                    (click)="confirm.respond(true)">
              {{ opts.confirmText ?? 'Confirmar' }}
            </button>
          </div>
        </div>
      </div>
    }
  `,
})
export class ConfirmHostComponent {
  confirm = inject(DialogService);
}