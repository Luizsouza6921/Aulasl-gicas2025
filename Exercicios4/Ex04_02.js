const prompt = require('prompt-sync') ();

let NmrMega = Math.floor(Math.random() * 60) + 1;
for (let i = 1; i < 6 + 1; i++) {
    let NmrMega2 = Math.floor(Math.random() * 60) + 1;
    if (NmrMega2 == NmrMega) {
        i--;
        } else {
            console.log(`Número ${i}: ${NmrMega2}`);
            }
            }