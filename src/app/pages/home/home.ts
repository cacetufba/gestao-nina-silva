import { Component } from '@angular/core';
import { Objetivos } from '../../shared/objetivos/objetivos';
import { Membros } from '../../shared/membros/membros';

@Component({
  selector: 'app-home',
  imports: [Objetivos, Membros],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
