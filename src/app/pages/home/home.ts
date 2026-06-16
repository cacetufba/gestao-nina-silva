import { Component } from '@angular/core';
import { Objetivos } from '../../shared/objetivos/objetivos';
import { Membros } from '../../shared/membros/membros';
import { Accordion } from '../../shared/accordion/accordion';
import { RouterLink} from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [Objetivos, Membros, Accordion, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
