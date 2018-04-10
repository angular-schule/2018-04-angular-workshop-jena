import { Component, OnInit } from '@angular/core';
import { Book } from '../../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  url = 'https://angular.schule';
  d = new Date();

  books: Book[] = [];

  constructor(private bs: BookStoreService) { }

  ngOnInit() {
    this.bs.getAll().subscribe(books => {
      this.books = books;
    });
  }

  updateList(book: Book) {
    const cleanedList = this.books.filter(b => b.isbn !== book.isbn);
    this.books = [...cleanedList, book]
      .sort((a, b) => b.rating - a.rating);
  }

  trackBook(index: number, item: Book) {
    return item.isbn;
  }

}

/*
ISBN
Title
Beschreibung
Rating

Autor(en)
Jahr
Auflage
Verlag
Preis
Untertitel
*/

