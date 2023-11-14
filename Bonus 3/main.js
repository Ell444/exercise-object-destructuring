//### BONUS 3: Distrutturazione ed Elaborazione dei Dati JSON

//Hai ricevuto una stringa JSON contenente un array di prodotti con i loro prezzi e quantità.
//Scrivi una funzione che analizza il JSON e calcola il valore totale di ogni prodotto
//(prezzo moltiplicato per la quantità).
//Utilizza la distrutturazione degli oggetti per estrarre le proprietà necessarie.
//Quindi, registra il nome del prodotto e il suo valore totale.
const products = [
    {
        "product": "Laptop",
        "price": 1200,
        "quantity": 5
    },
    {
        "product": "Telefono",
        "price": 500,
        "quantity": 10
    },
    {
        "product": "Tablet",
        "price": 750,
        "quantity": 3
    }
]

let Allproducts = '';
for(i=0; i<products.length; i++) {
    const {product, price, quantity} = products[i];
    const multiply = price*quantity;
    Allproducts += `Name: ${product} Total Value: ${multiply}`;
}
console.log (Allproducts);