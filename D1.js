/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* In JavaScript abbiamo diversi datatype,ovvero,degli attributi che noi possiamo usare per poter capire o indicare il tipo di dato applicatoa un certo valorte. Ci aiutano a capire il tipo di dato che viene applicato a un valore.
Come se avessimo delle scatole(variabili)a cui diamo un nome(dato,contenuto).
I principali sono: 
Numeber -> il tipo di dato assegnato è un numero:5; 6.5; -3.14; etc etc. Nella scatola abbiamo dei nuemri.
String -> il tipo di dato assegnato è una stringa,una frase,o meglio,delle parole e si scrive utilizzando ""oppure ''.Nella scatola abbiamo delle parole.
Boolean -> il tipo di dato assegnato è un Boolean,cioè valori logici che rispondono a due "domande":TRUE e FALSE.
Null-> il tipo di dato assegnato è nullo o sconosciuto. Permette di svuotare la variabile. La scatola è vuota.
Undefined-> il tipo di dato assegnato è indefinito,non ancora assegnato.La scatola della variabile esiste ma non è stata ancora riempita con qualcosa di definito.
*/

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let myName = " Cristian" 

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let a = 12
let b = 20
let c = a + b 

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12 

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

 myName = "Caso" 

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let y = 4
let z = y - x 

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john"
let name2 = "John"
console.log("john" !== "John")

//extra//
console.log(name1.toLowerCase()===name2.toLowerCase())




