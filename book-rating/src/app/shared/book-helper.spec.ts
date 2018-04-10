import { BookHelper } from './book-helper';
import { Book } from './book';

describe('BookHelper', () => {
  let book: Book;

  beforeEach(() => {
    book = {
      isbn: '',
      title: 'abc',
      description: '',
      rating: 3
    };
  });

  it('should create an instance', () => {
    expect(new BookHelper()).toBeTruthy();
  });

  it('should rate up a book for rateUp()', () => {
    const ratedBook = BookHelper.rateUp(book);

    expect(ratedBook.rating).toBe(4);
    expect(book.rating).toBe(3);
    expect(ratedBook.title).toBe(book.title);
  });

  it('should rate down a book for rateDown()', () => {
    const ratedBook = BookHelper.rateDown(book);

    expect(ratedBook.rating).toBe(2);
    expect(book.rating).toBe(3);
    expect(ratedBook.title).toBe(book.title);
  });

  it('should not allow a rating greater than 5', () => {
    book.rating = 5;
    const ratedBook = BookHelper.rateUp(book);
    expect(ratedBook.rating).toBe(5);
  });

  it('should not allow a rating smaller than 1', () => {
    book.rating = 1;
    const ratedBook = BookHelper.rateDown(book);
    expect(ratedBook.rating).toBe(1);
  });
});
