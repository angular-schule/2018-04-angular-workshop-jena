import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../shared/book';
import { BookHelper } from '../../shared/book-helper';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @Input() book: Book;

  constructor() { }

  ngOnInit() {
  }

  rateUp() {
    const ratedBook = BookHelper.rateUp(this.book);
    console.log(ratedBook);
    this.book = ratedBook;
  }

  rateDown() {
    const ratedBook = BookHelper.rateDown(this.book);
    console.log(ratedBook);
  }

  getStarsArray() {
    return new Array(this.book.rating);
  }

}
