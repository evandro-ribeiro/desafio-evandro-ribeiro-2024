import { validacaoEspecial } from "./recintos.js";

describe('Validação Especial', () => {

    test('Deve validar regras do hipopotamo', () => {
        const hipopotamo = { tamanho: 4, biomas: ["savana", "rio"], carnivoro: false, nome: "HIPOPOTAMO" };
        const recinto = { numero: 4, bioma: "rio", tamanho: 8, ocupacao: 0, animaisPresentes: [] };
        let quantidade = 1;

        const resultado = validacaoEspecial(hipopotamo, recinto, quantidade);

        expect(resultado).toBeTruthy();
    });
});