import { BookComponent } from './book.component';
import { Book } from '../../shared/book';

describe('BookComponent (simple)', () => {
  let component: BookComponent;

  beforeEach(() => {
    component = new BookComponent();
    component.book = {
      rating: 3
    } as Book;
  });

  it('should throw rate event for rateUp()', () => {
    let emittedBook: Book;

    component.rate.subscribe(b => {
      emittedBook = b;
    });

    component.rateUp();

    expect(emittedBook).toBeTruthy();
    expect(emittedBook.rating).toBe(4);
  });
});
