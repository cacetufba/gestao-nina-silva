import {
  Component, ChangeDetectionStrategy, input, output
} from '@angular/core';

import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-membros',
  imports: [NgOptimizedImage],
  templateUrl: './membros.html',
  styleUrl: './membros.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'inline-block',
    '[attr.role]': '"article"',
    '[attr.aria-label]': '"Card de membro: " + name()'
  }
})
export class Membros {
  // Inputs Reativos (Signals)
  diretoria = input.required<string>();
  name = input.required<string>();
  role = input.required<string>();
  photoUrl = input<string | null>(null);

  // Output para ação do botão
  viewMore = output<void>();
}
