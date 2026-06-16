import { Component, signal } from '@angular/core';
import { CardMembros } from '../../shared/card-membros/card-membros';

type Area =
  | 'cultura'
  | 'comunicacao'
  | 'relacoes'
  | 'diretoria'
  | null;

@Component({
  selector: 'app-membros',
  imports: [CardMembros],
  templateUrl: './membros.html',
  styleUrl: './membros.css',
})
export class Membros {

  readonly filtroSelecionado = signal<Area>(null);

  readonly menuFiltroAberto = signal(false);

  alternarMenuFiltro(): void {
    this.menuFiltroAberto.update(
      aberto => !aberto
    );
  }

  selecionarFiltro(area: Area): void {
    this.filtroSelecionado.set(area);
    this.menuFiltroAberto.set(false);
  }
}