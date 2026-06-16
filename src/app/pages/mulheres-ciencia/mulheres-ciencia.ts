import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

// Interface para cada card (imagem + título + descrição)
interface Card {
  id: number;
  imagemUrl: string;
  nome: string;
  descricao1: string;
  descricao2: string;
}

// Interface para cada slide (contém 3 cards)
interface Slide {
  id: number;
  cards: Card[];
}

@Component({
  selector: 'app-mulheres-ciencia',
  imports: [CommonModule],
  templateUrl: './mulheres-ciencia.html',
  styleUrl: './mulheres-ciencia.css',
  host: {
    'role': 'region',
    'attr.aria-label': 'Carrossel de cards com mulheres na ciência'
  }
})
export class MulheresCiencia {
  
  // Dados estruturados: cada slide tem 3 cards
  public slidesData = signal<Slide[]>([
    {
      id: 1,
      cards: [
        { id: 1, imagemUrl: 'assets/Annie_Easley.png', nome: 'Annie Easley', descricao1: 'Annie Easley foi uma cientista da computação, matemática e engenheira americana que atuou por mais de três décadas na área aeroespacial. Seu trabalho contribuiu significativamente para avanços tecnológicos e para a inclusão de mulheres e pessoas negras nas áreas de STEM.', descricao2: 'Fundamental tanto para o avanço da tecnologia quanto para a transformação social. Sua atuação na NASA contribuiu para o desenvolvimento de sistemas energéticos e pesquisas aeroespaciais importantes, mostrando sua relevância científica. Além disso, Annie teve um papel essencial na representatividade, ao quebrar barreiras como mulher negra em um ambiente dominado por homens, abrindo caminhos para futuras gerações. Seu trabalho também impactou o combate à discriminação e o incentivo à educação, inspirando jovens — especialmente mulheres e minorias — a ingressarem nas áreas de ciência e tecnologia.'},
         { id: 1, imagemUrl: 'assets/Annie_Easley.png', nome: 'Annie Easley', descricao1: 'Annie Easley foi uma cientista da computação, matemática e engenheira americana que atuou por mais de três décadas na área aeroespacial. Seu trabalho contribuiu significativamente para avanços tecnológicos e para a inclusão de mulheres e pessoas negras nas áreas de STEM.', descricao2: 'Fundamental tanto para o avanço da tecnologia quanto para a transformação social. Sua atuação na NASA contribuiu para o desenvolvimento de sistemas energéticos e pesquisas aeroespaciais importantes, mostrando sua relevância científica. Além disso, Annie teve um papel essencial na representatividade, ao quebrar barreiras como mulher negra em um ambiente dominado por homens, abrindo caminhos para futuras gerações. Seu trabalho também impactou o combate à discriminação e o incentivo à educação, inspirando jovens — especialmente mulheres e minorias — a ingressarem nas áreas de ciência e tecnologia.'},
          { id: 1, imagemUrl: 'assets/Annie_Easley.png', nome: 'Annie Easley', descricao1: 'Annie Easley foi uma cientista da computação, matemática e engenheira americana que atuou por mais de três décadas na área aeroespacial. Seu trabalho contribuiu significativamente para avanços tecnológicos e para a inclusão de mulheres e pessoas negras nas áreas de STEM.', descricao2: 'Fundamental tanto para o avanço da tecnologia quanto para a transformação social. Sua atuação na NASA contribuiu para o desenvolvimento de sistemas energéticos e pesquisas aeroespaciais importantes, mostrando sua relevância científica. Além disso, Annie teve um papel essencial na representatividade, ao quebrar barreiras como mulher negra em um ambiente dominado por homens, abrindo caminhos para futuras gerações. Seu trabalho também impactou o combate à discriminação e o incentivo à educação, inspirando jovens — especialmente mulheres e minorias — a ingressarem nas áreas de ciência e tecnologia.'},
      ]
    },
    {
      id: 2,
      cards: [
        { id: 1, imagemUrl: 'assets/Annie_Easley.png', nome: 'Annie Easley', descricao1: 'Matemática e cientista da computação da NASA', descricao2: 'testando'},
        { id: 2, imagemUrl: 'assets/Annie_Easley.png', nome: 'Marie Curie', descricao1: 'Prêmio Nobel de Física e Química', descricao2:'teste 2' },
        { id: 3, imagemUrl: 'assets/Annie_Easley.png', nome: 'Ada Lovelace', descricao1: 'Primeira programadora da história', descricao2: 'teste3' }
      ]
    },
    {
      id: 3,
      cards: [
        { id: 1, imagemUrl: 'assets/Annie_Easley.png', nome: 'Annie Easley', descricao1: 'Annie Easley foi uma cientista da computação, matemática e engenheira americana que atuou por mais de três décadas na área aeroespacial. Seu trabalho contribuiu significativamente para avanços tecnológicos e para a inclusão de mulheres e pessoas negras nas áreas de STEM.', descricao2: 'Fundamental tanto para o avanço da tecnologia quanto para a transformação social. Sua atuação na NASA contribuiu para o desenvolvimento de sistemas energéticos e pesquisas aeroespaciais importantes, mostrando sua relevância científica. Além disso, Annie teve um papel essencial na representatividade, ao quebrar barreiras como mulher negra em um ambiente dominado por homens, abrindo caminhos para futuras gerações. Seu trabalho também impactou o combate à discriminação e o incentivo à educação, inspirando jovens — especialmente mulheres e minorias — a ingressarem nas áreas de ciência e tecnologia.'},
        { id: 2, imagemUrl: 'assets/Annie_Easley.png', nome: 'Marie Curie', descricao1: 'Prêmio Nobel de Física e Química', descricao2:'teste 2' },
        { id: 3, imagemUrl: 'assets/Annie_Easley.png', nome: 'Ada Lovelace', descricao1: 'Primeira programadora da história', descricao2: 'teste3' }
      ]
    }
  ]);

  // Estado do slide atual (começa no 0 = primeiro slide)
  indiceAtual = signal<number>(0);

  // Computed: total de slides
  totalSlides = computed(() => this.slidesData().length);

  // Computed: slide atual (contém os 3 cards)
  slideAtual = computed(() => this.slidesData()[this.indiceAtual()]);

  // Computed: número formatado do slide (01, 02, 03)
  numeroFormatado = computed(() => {
    return (this.indiceAtual() + 1).toString().padStart(2, '0');
  });

  // Computed: verifica se tem próximo slide
  temProximo = computed(() => this.indiceAtual() + 1 < this.totalSlides());

  // Computed: verifica se tem slide anterior
  temAnterior = computed(() => this.indiceAtual() > 0);

  // Navegação entre slides
  slideAnterior(): void {
    if (this.temAnterior()) {
      this.indiceAtual.update(valor => valor - 1);
    }
  }

  proximoSlide(): void {
    if (this.temProximo()) {
      this.indiceAtual.update(valor => valor + 1);
    }
  }

  irParaSlide(indice: number): void {
    if (indice >= 0 && indice < this.totalSlides()) {
      this.indiceAtual.set(indice);
    }
  }
}