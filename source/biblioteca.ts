import { Livro } from './livro.js';

export class Biblioteca {
  private livros: Livro[] = [];

  // Função auxiliar para normalizar texto (remove acentos, espaços e diferenciação de maiúsculas/minúsculas)
  private normalizar(texto: string): string {
  return (texto || '')
    .toLowerCase()
    .trim()
    // Substitui manualmente os acentos mais comuns
    .replace(/[áàãâä]/g, 'a')
    .replace(/[éèêë]/g, 'e')
    .replace(/[íìîï]/g, 'i')
    .replace(/[óòõôö]/g, 'o')
    .replace(/[úùûü]/g, 'u')
    .replace(/[ç]/g, 'c');
}


  // Adiciona livro
  public adicionarLivro(livro: Livro): void {
    this.livros.push(livro);
    alert(`Livro '${livro.obterTitulo}' adicionado com sucesso!`);
  }

  // Lista todos os livros
  public listarLivros(): Livro[] {
    if (this.livros.length === 0) {
      alert("Nenhum livro cadastrado na biblioteca.");
    } else {
      let lista = 'Livros cadastrados:\n\n';
      this.livros.forEach((livro, i) => {
        lista += `${i + 1}. ${livro.toString()}\n`;
      });
      alert(lista);
    }
    return this.livros; // retorna cópia
  }

  // Busca livros por título ou autor (ignora maiúsculas, minúsculas e acentos)
  public buscarLivro(termo: string): Livro[] {
    const termoNormalizado = this.normalizar(termo);

    const encontrados = this.livros.filter(livro => {
      const titulo = this.normalizar(livro.obterTitulo);
      const autor = this.normalizar(livro.obterAutor);
      return titulo.includes(termoNormalizado) || autor.includes(termoNormalizado);
    });

    if (encontrados.length === 0) {
      alert(`Nenhum livro encontrado com o termo "${termo}".`);
    } else {
      let lista = 'Resultados da busca:\n';
      encontrados.forEach(livro => {
        lista += `${livro.toString()}\n`;
      });
      alert(lista);
    }

    return encontrados;
  }

  // Remove livro pelo título exato (ignora acentos e maiúsculas/minúsculas)
  public removerLivro(tituloExato: string): boolean {
    const tituloNormalizado = this.normalizar(tituloExato);

    const indice = this.livros.findIndex(livro =>
      this.normalizar(livro.obterTitulo) === tituloNormalizado
    );

    if (indice !== -1) {
      const removido = this.livros.splice(indice, 1)[0];
      alert(`Livro "${removido.obterTitulo}" removido com sucesso!`);
      return true;
    } else {
      alert(`Nenhum livro encontrado com o título "${tituloExato}".`);
      return false;
    }
  }
}
