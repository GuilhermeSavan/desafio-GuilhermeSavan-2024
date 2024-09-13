
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

        // Calcula o espaço livre no recinto, subtraindo o espaço ocupado pelos animais existentes
        function calcularEspacoLivre(recinto) {
            const animalExistenteInfo = animais[recinto.animaisExistentes.animal];
            const espacoOcupado = animalExistenteInfo ? animalExistenteInfo.tamanho * recinto.animaisExistentes.qtd : 0;
            return recinto.tamanhoTotal - espacoOcupado;
        }

        // Encontrar recintos viáveis para o animal e quantidade fornecidos
        function encontrarRecintosViaveis(animal, quantidade) {
            const animalInfo = validarAnimal(animal);
            if (animalInfo.erro) return animalInfo;

            const quantidadeValida = validarQuantidade(quantidade);
            if (quantidadeValida.erro) return quantidadeValida;

            const recintosViaveis = recintos
                .filter(recinto =>
                    animalInfo.biomas.some(bioma => recinto.bioma.includes(bioma)) && // Verifica se pelo menos um bioma é compatível
                    (recinto.animaisExistentes.animal === animal || recinto.animaisExistentes.qtd === 0) &&
                    (animalInfo.carnivoro ? true : !recinto.animaisExistentes.animal || !animais[recinto.animaisExistentes.animal].carnivoro)
                )
                .map(recinto => {
                    const espacoLivre = calcularEspacoLivre(recinto);
                    if (espacoLivre >= animalInfo.tamanho * quantidade) {
                        const espacoLivreAtualizado = espacoLivre - (animalInfo.tamanho * quantidade);
                        return `Recinto ${recinto.numero} (espaço livre: ${espacoLivreAtualizado} total: ${recinto.tamanhoTotal})`;
                    }
                    return null; // Explicitamente retorna null se o recinto não for viável
                })
                .filter(Boolean); // Remove qualquer valor null ou undefined

            if (recintosViaveis.length === 0) {
                return { erro: "Não há recinto viável" };
            }

            return { recintosViaveis };
        }

        // Chama a função para encontrar recintos viáveis e retorna o resultado
        return encontrarRecintosViaveis(animal, quantidade);
    }
}

export { RecintosZoo as RecintosZoo };
