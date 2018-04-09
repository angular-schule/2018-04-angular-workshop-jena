import { Component, OnInit } from '@angular/core';
import { Book } from '../../shared/book';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  url = 'https://angular.schule';

  books: Book[];

  constructor() { }

  ngOnInit() {
    this.books = [
      {
        isbn: '000',
        title: 'Angular',
        description: 'Grundlagen, fortgeschrittene Techniken, …',
        rating: 5
      },
      {
        isbn: '111',
        title: 'React',
        description: 'Ein anderes Framework',
        rating: 3
      }
    ];
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

