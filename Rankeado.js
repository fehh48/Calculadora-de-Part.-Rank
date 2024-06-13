//Projeto Calculadora de rankeadas

function NivelRanqueadas(vitorias, derrotas) {
    // Calcula o saldo de vitórias
    let saldoVitorias = vitorias - derrotas;

    // Determina o nível com base no saldo de vitórias
    let nivel;

    if (saldoVitorias < 10) {
        nivel = "Ferro 🗡  ";
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        nivel = "Bronze 🥉 ";
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivel = "Prata 🥈 ";
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivel = "Ouro 🥇 ";
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivel = "Diamante 💎 ";
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivel = "Lendário ♚ ";
    } else {
        nivel = "Imortal 🏆 "
    }
    // Retorno a mensagem de saída
    return `O Herói tem um saldo de ${saldoVitorias} está no nível de ${nivel}!`;
}

let vitorias = 110;
let derrotas = 20;
const resultado = NivelRanqueadas(vitorias, derrotas);
console.log(resultado);