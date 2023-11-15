//### BONUS 2: Gestione dei Dati Mancanti con la Distrutturazione

//Dato il JSON degli utenti, scrivi una funzione che distruttura ogni oggetto utente
//per estrarre il nome, l'email e l'indirizzo dell'utente. Se l'indirizzo non è fornito,
//la funzione dovrebbe assegnare un valore predefinito di "Indirizzo non fornito".
//Registra le informazioni estratte per ogni utente.

const response = 
`[
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
]`;

const users = JSON.parse(response);

const defaultAddress = 'Indirizzo non fornito';

const deconstructObj = ({name, email, address = defaultAddress}) => {
    console.log (`Nome utente: ${name}, con email ${email} e vive ${address}`)
}

for (let i = 0; i < users.length; i++) {
    deconstructObj(users[i]);
    
}
