const prompt = require("prompt-sync");

let TesteDoMomento = Number(0);

const Nph = [14, 14, 14];

const Rapida = [7, 7, 8, 4];

const comp = [1, 2, 3, 4, 5];

let teclado = prompt();
let option = 0;

const menu = (Nph, Rapida, comp) => {

    while (option != 6) {
        TesteDoMomento = +teclado("Indice Glicêmico: ")
        console.log(`------------ Insulina para ${TesteDoMomento} de glicose ---------------`);
        console.log("* 1- 140 <> 160----------------------*");
        console.log("* 2- 160 <> 240---------------------*");
        console.log("* 3- 240 <> 260 --------------------*");
        console.log("* 4- 260 <> 300---------------------*");
        console.log("* 5- 300<> 400 ---------------------*");
        console.log("* 6- < 73 ----------------------------*");
        console.log("* 7- Sair ----------------------------*");
        console.log("-------------------------------------");
        option = +teclado("Escolha a refeição (Digite '5' para sair): ");
        switch (option) {
            case 1:
                if (TesteDoMomento >= 140 && TesteDoMomento < 160) {
                    console.log(`Sua primeira dosagem é: ${comp[0] + Rapida[0]}`)
                    console.log(`Sua dosagem total é:  ${Nph[0] + Rapida[0] + comp[0]}`);
                } 
                case 2: if (TesteDoMomento >= 160 && TesteDoMomento < 240) {
                    console.log(`Sua primeira dosagem é: ${comp[1] + Rapida[0]}`)
                    console.log(`Sua dosagem total é:  ${Nph[0] + Rapida[0] + comp[1]}`);
                } 
                case 3:
                     if (TesteDoMomento >= 240 && TesteDoMomento < 260) {
                    console.log(`Sua primeira dosagem é: ${comp[2] + Rapida[0]}`)
                    console.log(`Sua dosagem total é:  ${Nph[0] + Rapida[0] + comp[2]}`);
                } 
                case 4:
                     if (TesteDoMomento > 260 && TesteDoMomento < 300) {
                    console.log(`Sua primeira dosagem é: ${comp[3] + Rapida[0]}`)
                    console.log(`Sua dosagem total é:  ${Nph[0] + Rapida[0] + comp[3]}`);
                }
                case 5:
                     if (TesteDoMomento > 300 && TesteDoMomento < 400) {
                    console.log(`Sua primeira dosagem é: ${comp[5] + Rapida[0]}`)
                    console.log(`Sua dosagem total é:  ${Nph[0] + Rapida[0] + comp[5]}`);
                }
                case 6: 
                
                    if (TesteDoMomento <73) {
                        console.log(`Sua primeira dosagem é: ${  Rapida[0] - 1}`)
                        console.log(`Sua dosagem total é:  ${Nph[0] + Rapida[0] - 1}`);
                    } 
                case 7: 
                console.log("ate a proxima !")
                break;
            default:
                break;
        }
    }
}
menu(Nph, Rapida, comp)