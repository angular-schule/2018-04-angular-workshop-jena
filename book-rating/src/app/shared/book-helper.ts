import { Book } from './book';

export class BookHelper {
  static readonly minRating = 1;
  static readonly maxRating = 5;

  static rateUp(book: Book): Book {
    /*return {
      isbn: book.isbn,
      title: book.title,
      description: book.description,
      rating: book.rating + 1
    };*/

    // return Object.assign({}, book, { rating: book.rating + 1 });

    return { ...book, rating: Math.min(BookHelper.maxRating, book.rating + 1) };

    /*
    // Alternativer Ansatz
    let rating: number;

    if (book.rating >= Bookhelper.maxRating) {
      rating = Bookhelper.maxRating;
    } else {
      rating = book.rating + 1;
    }

    return {
      ...book,
      rating
    };
    */
  }


  static rateDown(book: Book): Book {
    return { ...book, rating: Math.max(BookHelper.minRating, book.rating - 1) };
  }
}
