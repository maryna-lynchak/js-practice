export class Book {
    constructor (title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }

    get title() {
    return this._title;
  }
  set title(value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new Error("Назва книги не повинна бути порожнім рядком.");
    }
    this._title = value;
  }

  get author() {
    return this._author;
  }
  set author(value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new Error("Автор книги не повинен бути порожнім рядком.");
    }
    this._author = value;
  }

  
  get year() {
    return this._year;
  }

  set year(value) {
    if (typeof value !== "number" || value < 0) {
      throw new Error("Рік видання числом.");
    }
    this._year = value;
  }

printInfo() {
  console.log(`"${this.title}" - автор: ${this.author}, рік видання: ${this.year}`);
 }

static findOldestBook(books) {
    if (!Array.isArray(books) || books.length === 0) {
      throw new Error("Необхідно передати масив книг.");
    }
    return books.reduce((oldest, current) =>
      current.year < oldest.year ? current : oldest
    );
  }
}
const book1 = new Book("Мистецтво програмування", "Дональд Кнут", 1968);
const book2 = new Book("1984", "Джордж Орвелл", 1949);
const book3 = new Book("Пригоди Шерлока Холмса", "Артур Конан Дойл", 1892);

book1.printInfo(); 
book2.printInfo(); 
book3.printInfo();



