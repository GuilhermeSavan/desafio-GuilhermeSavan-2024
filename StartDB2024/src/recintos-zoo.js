
// default
class RecintosZoo {

    analisaRecintos(animal, quantidade) {
      // Definindo recintos e regras de animais
      const recintos = [
        { numero: 1, bioma: "savana", tamanhoTotal: 10, animaisExistentes: { qtd: 3, animal: "MACACO" } },
        { numero: 2, bioma: "floresta", tamanhoTotal: 5, animaisExistentes: { qtd: 0, animal: "" } },
        { numero: 3, bioma: "savana e rio", tamanhoTotal: 7, animaisExistentes: { qtd: 1, animal: "GAZELA" } },
        { numero: 4, bioma: "rio", tamanhoTotal: 8, animaisExistentes: { qtd: 0, animal: "" } },
        { numero: 5, bioma: "savana", tamanhoTotal: 9, animaisExistentes: { qtd: 1, animal: "LEAO" } }
    ];

    const animais = {
        LEAO: { tamanho: 3, biomas: ["savana"], carnivoro: true },
        LEOPARDO: { tamanho: 2, biomas: ["savana"], carnivoro: true },
        CROCODILO: { tamanho: 3, biomas: ["rio"], carnivoro: true },
        MACACO: { tamanho: 1, biomas: ["savana", "floresta"], carnivoro: false },
        GAZELA: { tamanho: 2, biomas: ["savana"], carnivoro: false },
        HIPOPOTAMO: { tamanho: 4, biomas: ["savana", "rio"], carnivoro: false },
    };

    // Função para validar se o animal é válido e retornar suas informações
    function validarAnimal(animal) {
        if (!animais[animal]) {
            return { erro: "Animal inválido" };
        }
        return animais[animal];
    }

    // Função para validar a quantidade de animais
    function validarQuantidade(quantidade) {
        if (!Number.isInteger(quantidade) || quantidade <= 0) {
            return { erro: "Quantidade inválida" };
        }
        return true;
    }

    // Validando o animal e a quantidade
    const animalInfo = validarAnimal(animal);
    if (animalInfo.erro) return { erro: animalInfo.erro };

    const quantidadeValida = validarQuantidade(quantidade);
    if (quantidadeValida.erro) return { erro: quantidadeValida.erro };

    // Filtrando recintos viáveis
    const recintosViaveis = recintos
        .filter(recinto => {
            const espacoLivre = recinto.tamanhoTotal - recinto.animaisExistentes.qtd * animalInfo.tamanho;
            return (
                animalInfo.biomas.some(bioma => recinto.bioma.includes(bioma)) &&
                espacoLivre >= quantidade * animalInfo.tamanho &&
                (!animalInfo.carnivoro || recinto.animaisExistentes.animal === "")
            );
        })
        .map(recinto => `Recinto ${recinto.numero} (espaço livre: ${recinto.tamanhoTotal - recinto.animaisExistentes.qtd * animalInfo.tamanho} total: ${recinto.tamanhoTotal})`);

    // Verificando se há recintos viáveis
    if (recintosViaveis.length === 0) {
        return { erro: "Não há recinto viável", recintosViaveis: false };
    }

    return { recintosViaveis };
}
}

export { RecintosZoo as RecintosZoo };
