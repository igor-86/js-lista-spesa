/* Consegna:
Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while. */

const bookList = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];
const textList = ["Il signore degli anelli - J.R.R. Tolkien", "Furore - John Steinbeck", "La dodicesima notte - William Shakespeare", "Casa di bambola - Henrik Ibsen", "Uno, nessuno e centomila - Luigi Pirandello"];

const listPage = document.querySelector(".row");
const texListPage = document.querySelector(".sec");
console.log(bookList);

let i = 0;
while(i < bookList.length) {
    let list = bookList[i];
    console.log(list);
    let tex = textList[i];
    console.log(tex);
    
    const itemList = `
            <div class="col">
                <div class="books">
                    <div class="image-books">
                        <img src="${list}" alt="">
                    </div>
                    <div class="sec">
                        <h3>${tex}</h3>                                            
                    </div>
                </div>
            </div>
    
    `
    
    
    /* const texstListPage = `<h2>${tex}</h2>`; */
    
    listPage.innerHTML += itemList;
    /* texListPage.innerHTML += texstListPage; */

    i++;
    
}
