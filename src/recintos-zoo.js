import { validaAnimal } from './animais.js';
import { espacoCompativel, biomaCompativel, filtrarRecintos, carnivoroCompativel, validaEspacoPelasEspecies, validacaoEspecial } from './recintos.js';

class RecintosZoo {

    analisaRecintos(animal, quantidade) {
        if (!Number.isInteger(quantidade) || quantidade <= 0) {
            let mensagemErro = { erro: "Quantidade inválida" };
            console.log(mensagemErro);
            return mensagemErro;
        }
    
        const animalValidado = validaAnimal(animal);

        if(animalValidado.erro === "Animal inválido") return animalValidado;
    
        const recintosViaveis = filtrarRecintos([
            (recinto) => biomaCompativel(recinto.bioma, animalValidado.biomas),
            (recinto) => espacoCompativel(recinto, animalValidado.tamanho, quantidade),
            (recinto) => carnivoroCompativel(animalValidado, recinto.animaisPresentes),
            (recinto) => validacaoEspecial(animalValidado, recinto, quantidade)
        ]);
        
        if (recintosViaveis.length === 0) {
            let mensagemErro = { erro: "Não há recinto viável" };
            console.log(mensagemErro);
            return mensagemErro;
        }
    
        let listaRecintosViaveis = {
            recintosViaveis: recintosViaveis.map((recinto) => 
                `Recinto ${recinto.numero} (espaço livre: ${validaEspacoPelasEspecies(animalValidado, recinto, quantidade)} total: ${recinto.tamanho})`
            )
        };
        console.log(listaRecintosViaveis);
        return listaRecintosViaveis;        
    }

}

export { RecintosZoo as RecintosZoo };
