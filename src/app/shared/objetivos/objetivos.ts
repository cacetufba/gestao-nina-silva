import {
  Component, ChangeDetectionStrategy,
  computed,
  input
} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-objetivos',
  imports: [NgOptimizedImage],
  templateUrl: './objetivos.html',
  styleUrl: './objetivos.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'block w-full max-w-2xs',
    '[attr.aria-label]': 'title()'
  }
})
export class Objetivos {
  title = input.required<string>();
  description = input.required<string>();
  imageSrc = input<string | null>(null);
  imageAlt = input<string>('Ilustração do card');
  color_description = input.required<string>();
  color_title = input.required<string>();

  // Input para cor de fundo (aceita HEX, Tailwind classes ou nomes de cores)
  backgroundColor = input<string>('#6200B3');
}
