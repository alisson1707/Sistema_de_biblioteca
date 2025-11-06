import { Livro } from "./livro";
export class Biblioteca {
    constructor() {
        this.livros = [];
    }
    adicionarLivro(titulo, autor, ano, numeroDePaginas) {
        let livro = new Livro(titulo, autor, ano, numeroDePaginas);
        this.livros.push(livro);
    }
    listarLivros() {
        if (this.livros.length === 0) {
            alert('nenhum livro cadastrado!');
        }
        else {
            let lista = this.livros.map((l) => l.toString()).join('\n');
            alert('livros cadastrados : \n + lista');
        }
    }
}
