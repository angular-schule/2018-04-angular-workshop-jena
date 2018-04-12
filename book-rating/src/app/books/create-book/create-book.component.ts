import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Book } from '../../shared/book';
import { map, filter, distinctUntilChanged, debounceTime, mergeMap, switchMap } from 'rxjs/operators';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {

  @Output() create = new EventEmitter<Book>();

  bookForm: FormGroup;

  constructor(private bs: BookStoreService) { } // Achtung: Presentational sollte keine Services injecten!

  ngOnInit() {
    this.bookForm = new FormGroup({
      isbn: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(13)
      ]),
      title: new FormControl('', Validators.required),
      description: new FormControl(''),
    });

    this.bookForm.valueChanges.pipe(
      map(value => value.title),
      filter(title => title.length >= 3),
      distinctUntilChanged(),
      debounceTime(1000),
      switchMap(term => this.bs.search(term))
    )
    .subscribe(results => {
      console.log(results);
    });
  }


  submitForm() {
    if (this.bookForm.invalid) {
      return;
    }

    const value = this.bookForm.value;

    const book: Book = {
      isbn: value.isbn,
      title: value.title,
      description: value.description,
      rating: 1
    };

    this.create.emit(book);

    this.bookForm.reset({
      isbn: '', title: '', description: ''
    });
  }

}
