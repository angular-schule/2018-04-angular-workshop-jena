import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  isbn: string;
  isbn$: Observable<string>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.isbn = this.route.snapshot.params.isbn;
    this.isbn$ = this.route.params.pipe(
      map(params => params.isbn)
    );
  }

}
