import { Book } from "./book.js";

export class EBook extends Book {
    constructor (title, author, year, fileFormat) {
    super (title, author, year);
    this.fileFormat = fileFormat;
}

get fileFormat() {
    return this._fileFormat;
  }

  set fileFormat(value) {
    const allowedFormats = ["PDF", "EPUB", "MOBI"];
    if (!allowedFormats.includes(value)) {
      throw new Error(`Формат файлу повинен бути одним з: ${allowedFormats.join(", ")}`);
    }
    this._fileFormat = value;
  }

printInfo() {
    console.log(
      `"${this.title}" - автор: ${this.author}, рік видання: ${this.year}, формат файлу: ${this.fileFormat}`
    );
  }
  
   static fromBook(bookInstance, fileFormat) {
    if (!(bookInstance instanceof Book)) {
      throw new Error("Аргумент має бути екземпляром класу Book.");
    }
    return new EBook(bookInstance.title, bookInstance.author, bookInstance.year, fileFormat);
  }
}


const ebook1 = new EBook("JavaScript для початківців", "Марія Іваненко", 2023, "PDF");
ebook1.printInfo();

