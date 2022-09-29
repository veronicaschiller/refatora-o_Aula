const prompt = require("prompt-sync");

let TesteDoMomento = Number(0);

const InsulinaNph = [14, 14, 14];

const insulinaRapida = [7, 7, 8, 4];

const InsulinaComp = [1, 2, 3, 4, 5];

let teclado = prompt();
let option = 0;

const menu = (InsulinaNph, insulinaRapida, InsulinaComp) => {
    const estaAlterado = TesteDoMomento >= 160 && TesteDoMomento < 240
    const estaMaisAlterado = TesteDoMomento >= 240 && TesteDoMomento < 260
    const estaAlto = TesteDoMomento > 260 && TesteDoMomento < 300
    const estaMuitoAlto = TesteDoMomento > 300 && TesteDoMomento < 400
    const estaMuitoBaixo = TesteDoMomento < 73

    while (option != 6) {
        TesteDoMomento = +teclado("Indice Glicêmico: ")
        console.log(`------------ Insulina para ${TesteDoMomento} de glicose ---------------`);
        console.log("* 1- 140 < > 160----------------------*");
        console.log("* 2- 160 < > 240---------------------*");
        console.log("* 3- 240 < > 260 --------------------*");
        console.log("* 4- 260 < > 300---------------------*");
        console.log("* 5- 300 < > 400 ---------------------*");
        console.log("* 6- < 73 ----------------------------*");
        console.log("* 7- Sair ----------------------------*");
        console.log("-------------------------------------");
        option = +teclado("Escolha a refeição (Digite '5' para sair): ");
        switch (option) {
            case 1:
                if (estaLevementeAlterado) {
                    console.log(`Sua primeira dosagem é: ${InsulinaComp[0] + insulinaRapida[0]}`)
                    console.log(`Sua dosagem total é:  ${InsulinaNph[0] + insulinaRapida[0] + InsulinaComp[0]}`);
                } T
            case 2: if (estaAlterado) {
                console.log(`Sua primeira dosagem é: ${InsulinaComp[1] + insulinaRapida[0]}`)
                console.log(`Sua dosagem total é:  ${InsulinaNph[0] + insulinaRapida[0] + InsulinaComp[1]}`);
            }
            case 3:
                if (estaMaisAlterado) {
                    console.log(`Sua primeira dosagem é: ${InsulinaComp[2] + insulinaRapida[0]}`)
                    console.log(`Sua dosagem total é:  ${InsulinaNph[0] + insulinaRapida[0] + InsulinaComp[2]}`);
                }
            case 4:
                if (estaAlto) {
                    console.log(`Sua primeira dosagem é: ${InsulinaComp[3] + insulinaRapida[0]}`)
                    console.log(`Sua dosagem total é:  ${InsulinaNph[0] + insulinaRapida[0] + InsulinaComp[3]}`);
                }
            case 5:
                if (estaMuitoAlto) {
                    console.log(`Sua primeira dosagem é: ${InsulinaComp[5] + insulinaRapida[0]}`)
                    console.log(`Sua dosagem total é:  ${InsulinaNph[0] + insulinaRapida[0] + InsulinaComp[5]}`);
                }
            case 6:

                if (estaMuitoBaixo) {
                    console.log(`Sua primeira dosagem é: ${insulinaRapida[0] - 1}`)
                    console.log(`Sua dosagem total é:  ${InsulinaNph[0] + insulinaRapida[0] - 1}`);
                }
            case 7:
                console.log("ate a proxima !")
                break;
            default:
                break;
        }
    }
}
menu(InsulinaNph, insulinaRapida, InsulinaComp)