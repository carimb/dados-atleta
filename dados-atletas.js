class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }
    calculaCategoria() {
        if (this.idade >= 9 && this.idade <= 11) {
            return "Infantil";
        }
        else {
            if (this.idade >= 12 && this.idade <= 13) {
                return "Juvenil";
            }
        else {
            if (this.idade >= 14 && this.idade <= 15) {
                return "Intermediário";
            }
        else {
            if (this.idade >= 16 && this.idade <= 30) {
                return "Adulto";
        }
        else {
            return "Sem categoria";}
        }
        }
        }
    }
    calculaIMC() {
        return this.peso / (this.altura * this.altura);
    }
    calculaMediaValida() {
        let notasOrdenadas = this.notas.sort((a, b) => a - b);
        let notasValidas = notasOrdenadas.slice(1, 4);
        let somaNotas = notasValidas.reduce((acc, nota) => acc + nota, 0);
        return somaNotas / notasValidas.length;
    }
    obtemNomeAtleta() {
        return this.nome;
    }
    obtemIdadeAtleta() {
        return this.idade;
    }
    obtemPesoAtleta() {
        return this.peso;
    }
    obtemNotasAtleta() {
        return this.notas.join(", ");
    }
    obtemCategoria() { 
        return this.calculaCategoria();
    }
    obtemIMC() {
        return this.calculaIMC();
    }
    obtemMediaValida() {
        return this.calculaMediaValida();
    }
} 
// Declarando os atletas
    const atleta = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);
    const atleta2 = new Atleta("Maria Silva", 25, 65, 1.60, [9.5, 8.75, 9.0, 9.25, 8.5]);
    const atleta3 = new Atleta("João Pereira", 15, 70, 1.75, [8.0, 7.5, 9.0, 8.5, 7.0]);

// Lista com todos os atletas para facilitar impressão
    const listaAtletas = [atleta, atleta2, atleta3];

// Função auxiliar para formatar os dados de um atleta
    function imprimeDados(at) {
        console.log(`Nome: ${at.obtemNomeAtleta()}`);
        console.log(`Idade: ${at.obtemIdadeAtleta()} anos`);
        console.log(`Peso: ${at.obtemPesoAtleta()} kg`);
        console.log(`Notas: ${at.obtemNotasAtleta()}`);
        console.log(`Categoria: ${at.obtemCategoria()}`);
        console.log(`IMC: ${at.obtemIMC().toFixed(2)}`);
        console.log(`Média Válida: ${at.obtemMediaValida().toFixed(2)}`);
        console.log('------------------------');
    }

// Imprimindo os dados de todos os atletas
    listaAtletas.forEach(imprimeDados);
