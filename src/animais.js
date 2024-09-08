const animais = {
    LEAO: { tamanho: 3, biomas: ["savana"], carnivoro: true, nome: "LEAO" },
    LEOPARDO: { tamanho: 2, biomas: ["savana"], carnivoro: true, nome: "LEOPARDO" },
    CROCODILO: { tamanho: 3, biomas: ["rio"], carnivoro: true, nome: "CROCODILO" },
    MACACO: { tamanho: 1, biomas: ["savana", "floresta"], carnivoro: false, nome: "MACACO" },
    GAZELA: { tamanho: 2, biomas: ["savana"], carnivoro: false, nome: "GAZELA" },
    HIPOPOTAMO: { tamanho: 4, biomas: ["savana", "rio"], carnivoro: false, nome: "HIPOPOTAMO" },
  };
  
  function validaAnimal(animal) {
    if (!animais[animal]) {
      let mensagemErro = { erro : "Animal inválido" };
      console.log(mensagemErro)
      return mensagemErro;
    }
    return animais[animal];
  }
  
  export { validaAnimal };
  