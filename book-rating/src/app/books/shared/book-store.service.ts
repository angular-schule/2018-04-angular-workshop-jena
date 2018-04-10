import { Injectable } from '@angular/core';
import { Book } from '../../shared/book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BookStoreService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>('http://api.angular.schule/books');
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
