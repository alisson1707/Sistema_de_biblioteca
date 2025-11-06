// aplicacao.ts
// 1. Importar as classes de domínio e de interação
import { Biblioteca } from './biblioteca.js';
import { InteracaoConsole } from './interacao.js';
import { Livro } from './livro.js'; // Importar Livro para dados iniciais

export class Aplicacao {
    private biblioteca: Biblioteca;
    private interacao: InteracaoConsole;

    constructor() {
        this.biblioteca = new Biblioteca();
        this.interacao = new InteracaoConsole(this.biblioteca);

        this.adicionarDadosIniciais();
    }
    
    // Método auxiliar para pré-carregar a biblioteca
    private adicionarDadosIniciais(): void {
        console.log("Adicionando dados iniciais para teste...");
        try {
            this.biblioteca.adicionarLivro(new Livro("Cem Anos de Solidão", "Gabriel García Márquez", 1967, 417));
            this.biblioteca.adicionarLivro(new Livro("1984", "George Orwell", 1949, 328));
            this.biblioteca.adicionarLivro(new Livro("O Pequeno Príncipe", "Antoine de Saint-Exupéry", 1943, 96));
        } catch (e) {
            
            console.error("Erro ao adicionar dados iniciais:", e);
        }
    }


    // 3. Implementar o loop principal (Controle de Fluxo)
    public iniciar(): void {
        let rodando = true;

        // Loop 'while' principal para manter a aplicação aberta
        while (rodando) {
            const escolha = prompt(
                "   MENU DA BIBLIOTECA   \n" +
                "1. Adicionar Novo Livro\n" +
                "2. Listar Todos os Livros\n" +
                "3. Buscar Livro (Título ou Autor)\n" +
                "4. Remover Livro (Título Exato)\n" +
                "5. Sair\n\n" +
                "Digite o número da opção desejada:"
            );

            // SWITCH/CASE para controlar o fluxo
     switch (escolha) {
     case '1':
       this.interacao.cadastrarNovoLivro();
    break;
     case '2':
    this.interacao.listarTodos();
    break;
     case '3':
    this.interacao.buscarLivro();
    break;
     case '4':
    this.interacao.removerLivro();
    break;
     case '5':
     case null: // Usuário clicou em Cancelar ou escolheu Sair
    alert("Obrigado por usar o sistema da Biblioteca. Encerrando o programa.");
     rodando = false;
    break;
default:
    alert("Opção inválida. Por favor, escolha um número de 1 a 5.");
        }
     }
 }
}

// 4. Iniciar a execução do programa
const app = new Aplicacao();
app.iniciar();
