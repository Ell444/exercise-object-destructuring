//### BONUS 2: Gestione dei Dati Mancanti con la Distrutturazione

//Dato il JSON degli utenti, scrivi una funzione che distruttura ogni oggetto utente
//per estrarre il nome, l'email e l'indirizzo dell'utente. Se l'indirizzo non è fornito,
//la funzione dovrebbe assegnare un valore predefinito di "Indirizzo non fornito".
//Registra le informazioni estratte per ogni utente.

const users = [
    {
        "name": "Alice",
        "email": "alice@example.com",
        "address": "123 Via Acero, Meraviglia"
    },
    {
        "name": "Bob",
        "email": "bob@example.com"
    },
    {
        "name": "Charlie",
        "email": "charlie@example.com",
        "address": "456 Via Olmo, Sognilandia"
    }
]
const defaultAddress = 'Indirizzo non fornito';
let userInformation = '';
for (i=0; i<users.length; i++){
    const {name, email, address: address = defaultAddress} = users[i];
    userInformation += `Name: ${name}, Email: ${email}, Address: ${address}`
}
console.log (userInformation)
