import Usuario from './User';
import Tema from './Tema';

interface Postagem {
    id: number;
    titulo?: string| null;
    texto?: string| null;
    foto?: string| null;
    criador?: Usuario| null;
    tema?: Tema| null;
}

export default Postagem;