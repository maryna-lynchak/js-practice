import { EBook } from './EBook.js';
import { Book } from './book.js';

// const book1 = new Book("1984", "Джордж Орвелл", 1949);
// const book2 = new Book("Мистецтво програмування", "Дональд Кнут", 1968);
// const ebook1 = new EBook("JavaScript для початківців", "Марія Іваненко", 2023, "PDF");
// const ebook2 = new EBook("Пригоди Шерлока Холмса", "Артур Конан Дойл", 1892, "EPUB");

// const library = [book1, book2, ebook1, ebook2];

// const oldestBook = Book.findOldestBook(library);

// console.log("Найдавніша книга:");
// oldestBook.printInfo();


const book1 = new Book("Мистецтво програмування", "Дональд Кнут", 1968);

const ebook1 = EBook.fromBook(book1, "PDF");

ebook1.printInfo();