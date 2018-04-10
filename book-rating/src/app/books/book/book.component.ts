import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { Book } from '../../shared/book';
import { BookHelper } from '../../shared/book-helper';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookComponent implements OnInit {

  @Input() book: Book;
  @Output() rate = new EventEmitter<Book>();

  constructor() { }

  ngOnInit() {
  }

  rateUp() {
    const ratedBook = BookHelper.rateUp(this.book);
    this.rate.emit(ratedBook);
  }

  rateDown() {
    const ratedBook = BookHelper.rateDown(this.book);
    this.rate.emit(ratedBook);
  }

  getStarsArray() {
    return new Array(this.book.rating);
  }

}
