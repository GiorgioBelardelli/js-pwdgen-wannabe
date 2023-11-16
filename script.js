const userName = (prompt("Inserisci il nome"));
console.log(userName);

const userSurname = (prompt("Inserisci il cognome"));
console.log(userSurname);

const userColor = (prompt("Scrivi il tuo colore preferito"));
console.log(userColor);

document.getElementById("psw-sicura").innerHTML = "Ecco la tua password sicurissima: " + userName + userSurname + userColor + '23';
