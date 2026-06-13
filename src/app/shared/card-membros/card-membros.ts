import { Component, computed, input, signal } from '@angular/core';

type Area =
  | 'cultura'
  | 'comunicacao'
  | 'relacoes'
  | 'diretoria'
  | null;

interface Membro {
  nome: string;
  cargo: string;
  area: Exclude<Area, null>;
  foto: string;
}

@Component({
  selector: 'app-card-membros',
  imports: [],
  templateUrl: './card-membros.html',
  styleUrl: './card-membros.css',
})
export class CardMembros {

  readonly filtro = input<Area>(null);

  readonly membros: Membro[] = [
    {
      nome: 'Julia Gouveia',
      cargo: 'Designer',
      area: 'comunicacao',
      foto: 'assets/image 1.png',
    },
    {
      nome: 'Jeniffer',
      cargo: 'Designer',
      area: 'comunicacao',
      foto: 'assets/image 2.png',
    },
    {
      nome: 'Andreza Moreira',
      cargo: 'Designer',
      area: 'comunicacao',
      foto: 'assets/WhatsApp Image 2026-02-23 at 13.43.22 1.png',
    },
    {
      nome: 'Lucas',
      cargo: 'Relações Institucionais',
      area: 'relacoes',
      foto: 'assets/lucas.jpeg',
    },
    {
      nome: 'Márcia',
      cargo: 'Cultura e Eventos',
      area: 'cultura',
      foto: 'assets/marcia.jpeg',
    },
    {
      nome: 'Zahur',
      cargo: 'Cultura e Eventos',
      area: 'cultura',
      foto: 'assets/zahur.jpeg',
    },
    {
      nome: 'Yuri Lucas',
      cargo: 'Cultura e Eventos',
      area: 'cultura',
      foto: 'assets/yuri.jpeg',
    },

     {
      nome: 'Igor Leal',
      cargo: 'Coordenador',
      area: 'diretoria',
      foto: 'assets/Igor.jpg',
    },

      {
      nome: 'Emilly Sancho',
      cargo: 'Vice-Secretária',
      area: 'diretoria',
      foto: 'assets/emilly.jpg',
    },

      {
      nome: 'Vitória Araújo',
      cargo: 'Secretária',
      area: 'diretoria',
      foto: 'assets/vitoria.jpg',
    },

       {
      nome: 'Breno Vinicius',
      cargo: 'Cultura e Eventos',
      area: 'cultura',
      foto: 'assets/breno.jpg',
    },

        {
      nome: 'Bruno Rios',
      cargo: 'Cultura e Eventos',
      area: 'cultura',
      foto: 'assets/bruno.jpg',
    },

         {
      nome: 'Darwin Sògbò',
      cargo: 'Comunicação',
      area: 'comunicacao',
      foto: 'assets/darwin.jpg',
    },

    
         {
      nome: 'Rafael',
      cargo: 'Comunicação',
      area: 'comunicacao',
      foto: 'assets/rafael.jpg',
    },
  ];

  readonly membrosFiltrados = computed(() => {
    const area = this.filtro();

    if (!area) {
      return this.membros;
    }

    return this.membros.filter(
      membro => membro.area === area
    );
  });

  readonly paginaAtual = signal(0);

  readonly membrosPorPagina = 2;

  readonly totalPaginas = computed(() =>
    Math.ceil(
      this.membrosFiltrados().length /
      this.membrosPorPagina
    )
  );

  readonly membrosMobile = computed(() => {
    const inicio =
      this.paginaAtual() * this.membrosPorPagina;

    return this.membrosFiltrados().slice(
      inicio,
      inicio + this.membrosPorPagina
    );
  });

  proximaPagina(): void {
    if (
      this.paginaAtual() <
      this.totalPaginas() - 1
    ) {
      this.paginaAtual.update(
        pagina => pagina + 1
      );
    }
  }

  paginaAnterior(): void {
    if (this.paginaAtual() > 0) {
      this.paginaAtual.update(
        pagina => pagina - 1
      );
    }
  }
}