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
         { id: 2, imagemUrl: 'assets/Alice Ball com cor.png', nome: 'Alice Ball', descricao1: 'A cientista que desenvolveu o primeiro tratamento eficaz contra ahanseníase no início do século XX. Mesmo enfrentando racismo e sexismo, ela sedestacou na química ainda muito jovem e se tornou a primeira mulher negra a obtermestrado na University of Hawaii.', descricao2: 'Alice criou um método para transformar o óleo de chaulmoogra em uma substância injetável e mais eficiente, ajudando milhares de pacientes com hanseníase. Porém, ela morreu aos 24 anos antes de concluir oficialmente suas pesquisas. Após sua morte, outro cientista tentou assumir o crédito pela descoberta, e seu trabalho ficou apagado por décadas. Hoje, Alice Ball é reconhecida como uma pioneira da ciência e símbolo da luta das mulheres negras no meio científico.'},
          { id: 3, imagemUrl: 'assets/Dorothy Vaughan com cor.png', nome: 'Dorothy Vaughan', descricao1: 'matemática e programadora norte-americana que foi uma das primeiras mulheres negras a trabalhar na NASA. Durante a Segunda Guerra Mundial, ela entrou para a NACA (agência que depois virou a NASA) como “computadora humana”, realizando cálculos matemáticos para pesquisas aeronáuticas.', descricao2: 'Mesmo enfrentando segregação racial e desigualdade de gênero, Dorothy se destacou e, em 1949, tornou-se a primeira supervisora negra da instituição. Ela liderou a equipe “West Area Computing”, formada por mulheres negras matemáticas, e ajudou outras funcionárias a conquistarem reconhecimento e promoções. Com a chegada dos computadores eletrônicos, Dorothy aprendeu programação emFORTRAN e ensinou sua equipe, garantindo espaço para elas na nova era tecnológicada NASA. Seu trabalho contribuiu para projetos espaciais importantes dos EstadosUnidos. Hoje, ela é lembrada como uma pioneira da ciência e da computação, além desímbolo da luta contra o racismo e o sexismo na área científica.'},
      ]
    },
    {
      id: 2,
      cards: [
        { id: 1, imagemUrl: 'assets/Katherine Johnson com cor.png', nome: 'Katherine Johnson', descricao1: 'matemática afro-americana que teve papel fundamental nas missões espaciais da NASA. Desde criança, demonstrava grande talento para matemática e avançou rapidamente nos estudos, tornando-se uma das primeiras estudantes negras a integrar programas acadêmicos antes segregados nos Estados Unidos.', descricao2: 'Em 1953, ela começou a trabalhar na NACA, agência que depois se tornou a NASA, realizando cálculos matemáticos essenciais para voos espaciais. Katherine ficou conhecida por calcular trajetórias de foguetes e órbitas com extrema precisão, incluindo os cálculos da missão de John Glenn e do programa Apollo 11, que levou humanos à Lua. Até os astronautas confiavam tanto em seus resultados que pediam que ela verificasse os cálculos feitos pelos computadores.Mesmo enfrentando racismo e sexismo, Katherine conquistou reconhecimento em uma área dominada por homens brancos. Ela trabalhou na NASA por mais de 30 anos, publicou pesquisas científicas e se tornou símbolo da participação das mulheres negras na ciência e tecnologia. Em 2015, recebeu a Medalha Presidencial da Liberdade, uma das maiores honrarias civis dos EUA. Sua história ganhou ainda mais destaque com o livro e filme Hidden Figures. '},
        { id: 2, imagemUrl: 'assets/Patricia Bath com cor.png', nome: 'Patricia Bath', descricao1: 'médica oftalmologista, inventora e pesquisadora norte-americana que revolucionou o tratamento da catarata. Desde jovem, demonstrava talento para ciência e medicina, e mais tarde tornou-se a primeira mulher negra médica a receber uma patente nos Estados Unidos.', descricao2:'Bath desenvolveu o “Laserphaco Probe”, um aparelho que utiliza laser para remover cataratas de forma mais precisa e menos invasiva, ajudando a restaurar a visão de milhares de pessoas no mundo. Além disso, ela criou o conceito de “oftalmologia comunitária”, defendendo que o acesso aos cuidados com os olhos deveria chegar também às populações pobres e marginalizadas. Ao longo da carreira, Patricia enfrentou racismo e sexismo em universidades e hospitais, mas conquistou diversos marcos históricos, como ser a primeira mulher a chefiar um programa de residência em oftalmologia nos EUA. Ela também lutou pela inclusão de mulheres e pessoas negras nas áreas STEM (ciência, tecnologia, engenharia e matemática). Hoje, é lembrada como uma pioneira da medicina e da inovação científica.' },
        { id: 3, imagemUrl: 'assets/Jaqueline Góes.png', nome: 'Jaqueline Góes de Jesus', descricao1: 'Cientista brasileira, biomédica e pesquisadora baiana que ganhou destaque internacional por coordenar a equipe responsável pelo sequenciamento do genoma do coronavírus no Brasil em apenas 48 horas após o primeiro caso confirmado de COVID-19 no país. Ela também participou do sequenciamento do vírus da zika durante as epidemias no Brasil.', descricao2: 'Nascida em Salvador, Jaqueline decidiu seguir carreira científica ainda adolescente. Formou-se em Biomedicina pela Escola Bahiana de Medicina, fez mestrado na Fiocruz e doutorado em Patologia Humana pela UFBA. Sua pesquisa sempre esteve ligada ao estudo de vírus e saúde pública.Além das contribuições científicas, Jaqueline se tornou símbolo da representatividade de mulheres negras na ciência. Em entrevistas e palestras, ela discute racismo, desigualdade de gênero e a falta de diversidade na pesquisa científica brasileira, defendendo maior inclusão nas áreas de ciência e tecnologia. Seu trabalho recebeu diversos prêmios e homenagens nacionais.' }
      ]
    },
    {
      id: 3,
      cards: [
        { id: 1, imagemUrl: 'assets/Joy Buolamwini.png', nome: 'Joy Buolamwini', descricao1: '- cientista da computação, pesquisadora e ativista conhecida por denunciar preconceitos raciais e de gênero em sistemas de inteligência artificial. Ela é fundadora da Algorithmic Justice League, criada para defender tecnologias mais éticas e inclusivas.', descricao2: 'Durante seus estudos no MIT, Joy percebeu que sistemas de reconhecimento facial tinham dificuldade para identificar rostos de pessoas negras, especialmente mulheres. Sua pesquisa “Gender Shades” revelou vieses em tecnologias usadas por grandes empresas como IBM, Microsoft e Amazon, mostrando que esses sistemas funcionavam melhor para homens brancos do que para mulheres negras.Além da pesquisa científica, Joy utiliza arte, poesia e palestras para discutir os impactos sociais da inteligência artificial. Seu trabalho aparece no documentário Coded Bias e em publicações como Time e New York Times. Ela também escreveu o livro Unmasking AI, no qual debate os perigos da IA discriminatória e a necessidade de tecnologias mais justas. Hoje, Joy é reconhecida mundialmente como uma das principais vozes na luta por ética e justiça na tecnologia.'},
        
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