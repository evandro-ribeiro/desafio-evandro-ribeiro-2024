const recintos = [
    { numero: 1, bioma: "savana", tamanho: 10, ocupacao: 3, animaisPresentes: ["MACACO"] },
    { numero: 2, bioma: "floresta", tamanho: 5, ocupacao: 0, animaisPresentes: [] },
    { numero: 3, bioma: "savana e rio", tamanho: 7, ocupacao: 2, animaisPresentes: ["GAZELA"] },
    { numero: 4, bioma: "rio", tamanho: 8, ocupacao: 0, animaisPresentes: [] },
    { numero: 5, bioma: "savana", tamanho: 9, ocupacao: 3, animaisPresentes: ["LEAO"] },
];
  
function biomaCompativel(bioma, biomasPermitidos) {
    return biomasPermitidos.some((permitido) => bioma.includes(permitido));
}
  
function espacoCompativel(recinto, tamanhoAnimal, qtdAnimais) {
    let ocupacaoTotal = recinto.ocupacao + tamanhoAnimal * qtdAnimais;
    return ocupacaoTotal <= recinto.tamanho;
}

function carnivoroCompativel(animal, animaisPresentes) {
    let animalJaExisteNoRecinto = animaisPresentes.includes(animal.nome);
    let animalCarnivoroNoRecinto = animaisPresentes.includes("LEAO") || animaisPresentes.includes("LEOPARDO") || animaisPresentes.includes("CROCODILO");

    if(animalJaExisteNoRecinto) {
        return animalJaExisteNoRecinto;
    }
    
    if(!animalCarnivoroNoRecinto && animal.carnivoro === false) {
        return true;
    }

    if(animaisPresentes.length === 0 && animal.carnivoro === true) {
        return true;
    } else { return false }
}

function validacaoEspecial(animal, recinto, quantidade) {
    if(animal.nome === "HIPOPOTAMO") {
        let criterio1 = recinto.bioma === "rio";
        let criterio2 = !recinto.animaisPresentes.includes("CROCODILO");
    
        //PRECISA ADICIONAR O HIPOPOTAMO SEM O CROCODILO, DAÍ VALIDA ESSA PARTE
        if(criterio1 && criterio2) {
            return true;
        }

        if(recinto.bioma === "savana e rio") {
            return true;
        } else { return false }
    }

    if(animal.nome === "MACACO" && quantidade === 1) {
        return recinto.ocupacao > 1 ? true : false;
    } else { return true }
}
  
function filtrarRecintos(criterios) {
    return recintos.filter((recinto) => {
      return criterios.every((criterio) => criterio(recinto));
    });
}

function validaEspacoPelasEspecies(animal, recinto, qtdAnimaisInseridos) {
    let ocupacaoFinal;
    let animalPresente = recinto.animaisPresentes.includes(animal.nome);

    if(!animalPresente) {
        recinto.animaisPresentes.push(animal.nome);
    }

    if(recinto.animaisPresentes.length > 1) {
        ocupacaoFinal = recinto.ocupacao + 1;
    } else {
        ocupacaoFinal = recinto.ocupacao;
    }

    let espacoLivre = recinto.tamanho - (ocupacaoFinal + animal.tamanho * qtdAnimaisInseridos);
    return espacoLivre;
}
  
export { biomaCompativel, espacoCompativel, filtrarRecintos, carnivoroCompativel, validaEspacoPelasEspecies, validacaoEspecial };
  