import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Book } from '../../shared/book';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {

  @Output() create = new EventEmitter<Book>();

  bookForm: FormGroup;

  constructor() { }

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

    this.bookForm.valueChanges.subscribe(e => console.log(e));
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
