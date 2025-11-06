// interacao.ts
import { Biblioteca } from "./biblioteca.js";
import { Livro } from "./livro.js";

export class InteracaoConsole {
    private biblioteca: Biblioteca;

    constructor(biblioteca: Biblioteca) {
        this.biblioteca = biblioteca;
    }

    public cadastrarNovoLivro(): void {
        const titulo = prompt("Digite o título do livro:") || "";
        const autor = prompt("Digite o autor do livro:") || "";
        const ano = Number(prompt("Digite o ano de publicação:")) || 0;
        const paginas = Number(prompt("Digite o número de páginas:")) || 0;

        const livro = new Livro(titulo, autor, ano, paginas);
        this.biblioteca.adicionarLivro(livro);

        alert(`Livro "${titulo}" adicionado com sucesso!`);
    }

    public listarTodos(): void {
        const livros = this.biblioteca.listarLivros();

        if (livros.length === 0) {
            alert("Nenhum livro cadastrado.");
        } else {
            let lista = "Lista de livros:\n\n";
            livros.forEach((livro, i) => {
                lista += `${i + 1}. ${livro.toString()}\n`;
            });
            alert(lista);
        }
    }

    public buscarLivro(): void {
        const termo = prompt("Digite o termo de busca (título ou autor):") || "";
        const encontrados = this.biblioteca.buscarLivro(termo);

        if (encontrados.length === 0) {
            alert(`Nenhum livro encontrado com "${termo}".`);
        } else {
            let resultado = "Resultados da busca:\n\n";
            encontrados.forEach(livro => {
                resultado += livro.toString() + "\n";
            });
            alert(resultado);
        }
    }

    public removerLivro(): void {
        const titulo = prompt("Digite o título exato do livro que deseja remover:") || "";
        const sucesso = this.biblioteca.removerLivro(titulo);

        if (sucesso) {
            alert(`Livro "${titulo}" removido com sucesso.`);
        } else {
            alert(`Nenhum livro encontrado com o título "${titulo}".`);
        }
    }
}
