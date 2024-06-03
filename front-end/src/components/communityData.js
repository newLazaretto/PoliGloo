// src/components/CommunityData.js
import igluImage from '../assets/images/Iglu.png';
import community2Image from '../assets/images/Iglu2.png';
import community3Image from '../assets/images/Iglu3.png';

const CommunityData = {
  Avisos: {
    name: 'Avisos',
    creator: 'admin',
    members: [{ username: 'user1' }, { username: 'user2' }, { username: 'user3' }, { username: 'user4' }],
    posts: [
      { id: 1, username: 'user1', mensagem: 'Primeiro post de exemplo', data_hora: new Date().toISOString() },
      { id: 2, username: 'user2', mensagem: 'Segundo post de exemplo', data_hora: new Date().toISOString() }
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
    name: 'Compiladores',
    creator: 'admin',
    members: [{ username: 'user3' }, { username: 'user4' }],
    posts: [],
    avisos: [],
    arquivos: [],
    image: community2Image
  },
  RedesNeurais: {
    name: 'Redes Neurais',
    creator: 'admin',
    members: [{ username: 'user5' }, { username: 'user6' }],
    posts: [],
    avisos: [],
    arquivos: [],
    image: community3Image
  }
};

export default CommunityData;

