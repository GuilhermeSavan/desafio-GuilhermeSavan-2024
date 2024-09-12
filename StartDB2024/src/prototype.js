/* import { RecintosZoo } from "./recintos-zoo.js";

// Criando uma classe que será usada para instanciar e armazenar a lógica da aplicação
class Zoologico extends RecintosZoo {
    constructor() {
        super();
        // Inicializando recintos e animais conforme regras fornecidas
        this.recintos = [
            { numero: 1, bioma: "savana", tamanhoTotal: 10, animaisExistentes: { qtd: 3, animal: "MACACO" } },
            { numero: 2, bioma: "floresta", tamanhoTotal: 5, animaisExistentes: { qtd: 0, animal: "" } },
            { numero: 3, bioma: "savana e rio", tamanhoTotal: 7, animaisExistentes: { qtd: 1, animal: "GAZELA" } },
            { numero: 4, bioma: "rio", tamanhoTotal: 8, animaisExistentes: { qtd: 0, animal: "" } },
            { numero: 5, bioma: "savana", tamanhoTotal: 9, animaisExistentes: { qtd: 1, animal: "LEAO" } }
        ];
        
        this.animais = {
            LEAO: { tamanho: 3, biomas: ["savana"], carnivoro: true },
            LEOPARDO: { tamanho: 2, biomas: ["savana"], carnivoro: true },
            CROCODILO: { tamanho: 3, biomas: ["rio"], carnivoro: true },
            MACACO: { tamanho: 1, biomas: ["savana", "floresta"], carnivoro: false },
            GAZELA: { tamanho: 2, biomas: ["savana"], carnivoro: false },
            HIPOPOTAMO: { tamanho: 4, biomas: ["savana", "rio"], carnivoro: false },
        };
    }

    // Método principal para analisar recintos
    analisaRecintos(animal, quantidade) {
        const validarAnimal = (animal) => {
            if (!this.animais[animal]) {
                return { erro: "Animal inválido" };
            }
            return this.animais[animal];
        };

        const validarQuantidade = (quantidade) => {
            if (!Number.isInteger(quantidade) || quantidade <= 0) {
                return { erro: "Quantidade inválida" };
            }
            return true;
        };

        const animalInfo = validarAnimal(animal);
        if (animalInfo.erro) return { erro: animalInfo.erro };

        const quantidadeValida = validarQuantidade(quantidade);
        if (quantidadeValida.erro) return { erro: quantidadeValida.erro };

        const recintosViaveis = this.recintos
            .filter(recinto => {
                const espacoLivre = recinto.tamanhoTotal - recinto.animaisExistentes.qtd * animalInfo.tamanho;
                return (
                    animalInfo.biomas.includes(recinto.bioma) &&
                    espacoLivre >= quantidade * animalInfo.tamanho &&
                    (!animalInfo.carnivoro || recinto.animaisExistentes.animal === "")
                );
            })
            .map(recinto => `Recinto ${recinto.numero} (espaço livre: ${recinto.tamanhoTotal - recinto.animaisExistentes.qtd * animalInfo.tamanho} total: ${recinto.tamanhoTotal})`);

        if (recintosViaveis.length === 0) {
            return { erro: "Não há recinto viável" };
        }

        return { recintosViaveis };
    }
}

// Criando instância da classe Zoologico que extende RecintosZoo
const recintosTeste = new Zoologico();

// Chamada de teste para o método analisaRecintos
const resultado = recintosTeste.analisaRecintos('CROCODILO', 1);

if (resultado.erro) {
    console.log(resultado.erro);
} else {
    console.log("Recintos viáveis encontrados:", resultado.recintosViaveis);
}
*/