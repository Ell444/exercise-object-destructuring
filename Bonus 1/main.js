//### BONUS 1: Analisi di JSON Complesso e Distrutturazione Avanzata

//Hai ricevuto una risposta JSON da un database contenente informazioni su libri e loro autori. Analizza il JSON
//e usa la distrutturazione degli oggetti per estrarre e registrare le seguenti informazioni per ogni libro: titolo, nome e cognome dell'autore,
//e il numero di pagine se il libro ne ha più di 300.

const response = `
[
    {
        "title": "Il Grande Gatsby",
        "author": {
            "firstName": "F. Scott",
            "lastName": "Fitzgerald"
        },
        "details": {
            "pages": 180,
            "language": "Inglese"
        }
    },
    {
        "title": "Guerra e Pace",
        "author": {
            "firstName": "Lev",
            "lastName": "Tolstoj"
        },
        "details": {
            "pages": 1225,
            "language": "Russo"
        }
    },
    {
        "title": "1984",
        "author": {
            "firstName": "George",
            "lastName": "Orwell"
        },
        "details": {
            "pages": 328,
            "language": "Inglese"
        }
    }
]`


const books = JSON.parse(response);


const [
{title: title1, author: {
    firstName: firstName1,
    lastName: lastName1,
   }, details: {pages: pages1}},
{title: title2, author: {
    firstName: firstName2,
    lastName: lastName2,
}, details: {pages: pages2}},
{title: title3, author: {
    firstName: firstName3,
    lastName: lastName3
}, details: {pages: pages3}}
] = books;
