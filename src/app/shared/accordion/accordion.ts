import { Component, ChangeDetectionStrategy, input, computed } from '@angular/core';

@Component({
  selector: 'app-accordion',
  imports: [],
  templateUrl: './accordion.html',
  styleUrls: ['./accordion.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'block w-full'
  }
})
export class Accordion {
  label = input.required<string>();
  textColor = input<string>();
  backgroundColor = input<string>();
  
  shadowColor = input<string>();

  dynamicShadow = computed(() => `4px 5px 6.6px 0px ${this.shadowColor()}`);

}
