console.log("************** DELIVERABLE 04 *********************");
console.log("************** READ BOOKS *********************");

interface Book{
    title: string,
    isRead:boolean
};

type Library= Book[];
const titleHarryPotter = "Harry Potter y la piedra filosofal";
const titleDevastacion = "Devastación";
const titleCancionHieloYFuego ="Canción de hielo y fuego";
const titleMarryPotter = "Marry Potter y la piedra filosofal";

const books: Library = [
    { title: titleHarryPotter, isRead: true },
    { title: titleCancionHieloYFuego, isRead: false },
    { title: titleDevastacion, isRead: true },
]

function isBookRead(books: Library, titleToSearch: string): boolean {
    const book = books.find(x => x.title === titleToSearch);
    return book ? book.isRead : false;    
}

console.log(`${titleDevastacion} is book read:`, isBookRead(books,titleDevastacion));
console.log(`${titleCancionHieloYFuego} is book read:`, isBookRead(books,titleCancionHieloYFuego));
console.log(`${titleHarryPotter} is book read:`, isBookRead(books,titleHarryPotter));
console.log(`${titleMarryPotter} is book read:`, isBookRead(books,titleMarryPotter));