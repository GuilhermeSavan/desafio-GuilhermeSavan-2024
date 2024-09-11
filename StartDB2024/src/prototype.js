import { RecintosZoo } from "./recintos-zoo.js";


// tratando a entrada
const recintosTeste = new RecintosZoo();

recintosTeste.analisaRecintos('CROCODILO', 1);
// regras


// recintos
class RecintosEanimais {
    constructor() {
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
}
// Função para validar se o animal é válido e retornar suas informações
function validarAnimal(animal) {
    if (!recintosTeste.animais[animal]) {
      return { erro: "Animal inválido" };
    }
    return recintosTeste.animais[animal];
  }
  
  // Função para validar a quantidade de animais
  function validarQuantidade(quantidade) {
    if (!Number.isInteger(quantidade) || quantidade <= 0) {
      return { erro: "Quantidade inválida" };
    }
    return true;
  }
  
  // Função para encontrar recintos viáveis
  function encontrarRecintosViaveis(animal, quantidade) {
    const animalInfo = validarAnimal(animal);
    if (animalInfo.erro) return animalInfo;
  
    const quantidadeValida = validarQuantidade(quantidade);
    if (quantidadeValida.erro) return quantidadeValida;
  
    // Chamar método analisaRecintos da classe RecintosZoo
    return recintosTeste.analisaRecintos(animal, quantidade);
  }
  
  // Função principal para análise
  function analisaRecintos(animal, quantidade) {
    const resultado = encontrarRecintosViaveis(animal, quantidade);
  
    if (resultado.erro) {
      console.log(resultado);
    } else {
      console.log({ recintosViaveis: resultado.recintosViaveis });
    }
  }

