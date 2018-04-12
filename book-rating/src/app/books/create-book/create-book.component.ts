import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Book } from '../../shared/book';
import { map, filter, distinctUntilChanged, debounceTime, mergeMap, switchMap, take, takeUntil } from 'rxjs/operators';
import { BookStoreService } from '../shared/book-store.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import { interval } from 'rxjs/observable/interval';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit, OnDestroy {

  @Output() create = new EventEmitter<Book>();

  bookForm: FormGroup;

  interval$ = interval(1000);
  destroy$ = new Subject();

  timers = [];

  results$: Observable<Book[]>;
  sub: Subscription;

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

    this.results$ = this.bookForm.valueChanges.pipe(
      takeUntil(this.destroy$),
      map(value => value.title),
      filter(title => title.length >= 3),
      distinctUntilChanged(),
      debounceTime(1000),
      switchMap(term => this.bs.search(term))
    );

    this.results$.subscribe(
      e => console.log(e),
      err => console.log('ERROR', err),
      () => console.log('COMPLETED')
    );
  }

  addTimer() {
    this.timers.push('');
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


  ngOnDestroy() {
    this.destroy$.next();
  }

}
