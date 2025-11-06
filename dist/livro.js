export class Livro {
    constructor(titulo, autor, ano, numeroDePaginas) {
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
        this.numeroDePaginas = numeroDePaginas;
    }
    toString() {
        return `${this.titulo} - ${this.autor} - ${this.ano} - ${this.numeroDePaginas}`;
    }
}
