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
      nome: 'Darwin Sògbò',
      cargo: 'Gestor de Comunicação',
      area: 'diretoria',
      foto: 'assets/darwin.jpg',
    },

     {
      nome: 'Breno Vinicius',
      cargo: 'Coordenador de Cultura e Eventos',
      area: 'diretoria',
      foto: 'assets/breno.jpg',
    },

       {
      nome: 'Bruno Rios',
      cargo: 'Vice-Coordenador de Cultura e Eventos',
      area: 'diretoria',
      foto: 'assets/bruno.jpg',
    },

    
      {
      nome: 'Vitória Araújo',
      cargo: 'Secretária',
      area: 'diretoria',
      foto: 'assets/vitoria.jpg',
    },

     {
      nome: 'Emilly Sancho',
      cargo: 'Vice-Secretária',
      area: 'diretoria',
      foto: 'assets/emilly.jpg',
    },

    {
      nome: 'Igor Leal',
      cargo: 'Coordenador',
      area: 'diretoria',
      foto: 'assets/Igor.jpg',
    },
    {
      nome: 'Julia Gouveia',
      cargo: 'Social Mídia',
      area: 'comunicacao',
      foto: 'assets/image 1.png',
    },
    {
      nome: 'Jeniffer',
      cargo: 'Social Mídia',
      area: 'comunicacao',
      foto: 'assets/image 2.png',
    },
    {
      nome: 'Andreza Moreira',
      cargo: 'Comunicação',
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
      nome: 'Rafael',
      cargo: 'Comunicação',
      area: 'comunicacao',
      foto: 'assets/rafael.jpg',
    },

    
         {
      nome: 'Andresa Fernandes',
      cargo: 'Design',
      area: 'comunicacao',
      foto: 'assets/andresa.jpeg',
    },

        {
      nome: 'Lucas Alves',
      cargo: 'Design',
      area: 'comunicacao',
      foto: 'assets/lucasA.jpeg',
    },

        {
      nome: 'Henrique Batista',
      cargo: 'Design',
      area: 'comunicacao',
      foto: 'assets/henrique.jpeg',
    },

        {
      nome: 'Milena Barbosa',
      cargo: 'Social Mídia',
      area: 'comunicacao',
      foto: 'assets/milena.jpeg',
    },

        {
      nome: 'Ingrid Chamusca',
      cargo: 'Social Mídia',
      area: 'comunicacao',
      foto: 'assets/ingrid.jpeg',
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