//### Esercizio 2: Analisi di JSON
//Converti la seguente stringa JSON in un oggetto JavaScript e registra l'`email` e l'`id` nella console.

'{"id": 1, "nome": "John Doe", "email": "john.doe@example.com"}'

const json = '{"id": 1, "nome": "John Doe", "email": "john.doe@example.com"}';
const obj = JSON.parse(json);
const email = obj.email;
const id = obj.id;
console.log(email, id)