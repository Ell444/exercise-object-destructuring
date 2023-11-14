//### Esercizio 5: Valori Predefiniti nella Distrutturazione

//Utilizza la distrutturazione degli oggetti per estrarre il `nome` e l'`eta` dall'oggetto `persona`. Se l'`eta` non è fornita, dovrebbe avere un valore predefinito di `30`.


const persona = {
    nome: "Bob"
};
const etaDefault = 30;
const {nome, eta: eta = etaDefault} = persona;
console.log (persona, eta)
