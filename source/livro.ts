export class Livro {
    private titulo: string = "Título Desconhecido";
    private autor: string = "Autor Desconhecido";
    private ano: number = 0;
    private paginas: number = 0;
    
    constructor(titulo: string, autor: string, ano: number, numeroPaginas: number) {
        // No construtor, os setters são chamados por atribuição (sem parênteses!)
        this.definirTitulo = titulo; 
        this.definirAutor = autor;
        this.definirAno = ano;
        this.definirPaginas = numeroPaginas;
    }

    public get obterTitulo(): string {
         return this.titulo; 
        }
    
    public get obterAutor(): string { 
        return this.autor;
     }

    public get obterAno(): number {
         return this.ano;
     }
    
    public get obterPaginas(): number { 
        return this.paginas; 
    }
    
    public set definirTitulo(novoTitulo: string) {
        if (novoTitulo && novoTitulo.trim() !== '') {
            this.titulo = novoTitulo.trim();
        } else {
            console.error("Erro: Título não pode ser vazio.");
        }
    }
    
    public set definirAutor(novoAutor: string) {
        this.autor = novoAutor.trim();
    }

    public set definirAno(novoAno: number) {
        const anoAtual = new Date().getFullYear();
        if (novoAno > 0 && novoAno <= anoAtual) {
            this.ano = novoAno;
        } else {
            console.error(`Erro: Ano ${novoAno} inválido.`);
            this.ano = 0; 
        }
    }

    public set definirPaginas(novoNum: number) {
        if (Number.isInteger(novoNum) && novoNum > 0) {
            this.paginas = novoNum;
        } else {
            console.error(`Erro: Número de páginas ${novoNum} inválido.`);
            this.paginas = 0; 
        }
    }

    public toString(): string {
        return `Título: "${this.obterTitulo}" | Autor: ${this.obterAutor} | Ano: ${this.obterAno} | Páginas: ${this.obterPaginas}`;
    }
}
