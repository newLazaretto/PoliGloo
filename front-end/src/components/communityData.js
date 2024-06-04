
import igluImage from '../assets/images/Iglu.png';
import community2Image from '../assets/images/Iglu2.png';
import community3Image from '../assets/images/Iglu3.png';
import user1Image from '../assets/images/1.png';
import user2Image from '../assets/images/2.png';
import user3Image from '../assets/images/3.png';
import user4Image from '../assets/images/4.png';

const CommunityData = {
  Avisos: {
    name: 'AVISOS',
    name: 'AVISOS',
    creator: 'admin',
    members: [{ username: 'Monalisa', image: user1Image, program: 'Engenharia da Computação'  }, { username: 'Leonardo', image: user2Image, program: 'Engenharia da Computação' }, { username: 'Gabriel', image: user3Image, program: 'Engenharia da Computação' }, { username: 'Igor', image: user4Image, program: 'Engenharia da Computação' }],
    members: [{ username: 'Monalisa', image: user1Image, program: 'Engenharia da Computação'  }, { username: 'Leonardo', image: user2Image, program: 'Engenharia da Computação' }, { username: 'Gabriel', image: user3Image, program: 'Engenharia da Computação' }, { username: 'Igor', image: user4Image, program: 'Engenharia da Computação' }],
    posts: [
      { id: 1, username: 'Roberta', mensagem: 'Primeiro post de exemplo', data_hora: new Date().toISOString() },
      { id: 2, username: 'João', mensagem: 'Segundo post de exemplo', data_hora: new Date().toISOString() }
    ],
    avisos: [
      { id: 1, title: 'Aviso 1', content: 'Conteúdo do aviso 1' },
      { id: 2, title: 'Aviso 2', content: 'Conteúdo do aviso 2' }
    ],
    arquivos: [
      { id: 1, name: 'Arquivo 1', url: '/path/to/arquivo1' },
      { id: 2, name: 'Arquivo 2', url: '/path/to/arquivo2' }
    ],
    image: igluImage
    
  },
  Compiladores: {
    name: 'COMPILADORES',
    creator: 'admin',
    members: [{ username: 'Gabriel',  image: user3Image }, { username: 'Igor',  image: user4Image }],
    posts: [],
    avisos: [],
    arquivos: [],
    image: community2Image
  },
  RedesNeurais: {
    name: 'REDES',
    creator: 'admin',
    members: [{ username: 'Hemir',  image: user1Image }, { username: 'Edison',  image: user2Image }, { username: 'Gabriel', image: user3Image, program: 'Engenharia da Computação' }, { username: 'Igor', image: user4Image, program: 'Engenharia da Computação' }],
    posts: [
      { id: 1, username: 'Hemir', mensagem: 'Entrega do trabalho até dia 4.', data_hora: new Date().toISOString() },
      { id: 2, username: 'Edison', mensagem: 'O servidor tem que rodar!', data_hora: new Date().toISOString() }
    ],
    avisos: [],
    arquivos: [],
    image: community3Image
  }
};

export default CommunityData;