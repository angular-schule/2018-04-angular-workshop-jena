import { Injectable } from '@angular/core';
import { Book } from '../../shared/book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Injectable()
export class BookStoreService {

  private api = 'http://api.angular.schule';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.api}/books`);
  }

  getSingle(isbn: string): Observable<Book> {
    return this.http.get<Book>(`${this.api}/book/${isbn}`);
  }

  create(book: Book): Observable<any> {
    return this.http.post(`${this.api}/book`, book, { responseType: 'text' });
  }

  search(term: string): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.api}/books/search/${term}`).pipe(
      catchError(err => of([ // oder _throw()
        { isbn: '', title: 'Fehlerbuch!', description: '', rating: 1 }
      ]))
    );
  }

  getAllStatic(): Book[] {
    return [
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

}
