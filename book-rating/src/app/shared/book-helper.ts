import { Book } from './book';

export class BookHelper {
  static rateUp(book: Book): Book {
    /*return {
      isbn: book.isbn,
      title: book.title,
      description: book.description,
      rating: book.rating + 1
    };*/

    // return Object.assign({}, book, { rating: book.rating + 1 });

    return { ...book, rating: book.rating + 1 };
  }


  static rateDown(book: Book): Book {
    return { ...book, rating: book.rating - 1 };
  }
}
