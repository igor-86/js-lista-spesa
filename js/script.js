/* Consegna:
Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while. */

const bookList = ["Il signore degli anelli - J.R.R. Tolkien", "Furore - John Steinbeck", "La dodicesima notte - William Shakespeare", "Casa di bambola - Henrik Ibsen", "Uno, nessuno e centomila - Luigi Pirandello"];

const listPage = document.querySelector(".lista");

console.log(bookList);

let i = 0;
while(i < bookList.length) {
    let list = bookList[i];
    console.log(list);
    
    const itemList = `<li>${list}</li>`;
    
    listPage.innerHTML += itemList;

    i++;
    
}
