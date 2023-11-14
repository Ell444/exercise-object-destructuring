//Dato il seguente oggetto in JavaScript, convertilo in una stringa JSON.

const utente = {
    nome: "Alice",
    eta: 25,
    hobby: ["leggere", "giocare ai videogiochi", "fare escursioni"],
    indirizzo: {
        via: "123 Via degli Aceri",
        citta: "Paese delle Meraviglie"
    }
};

JSON.stringify(utente);
console.log (JSON.stringify(utente))