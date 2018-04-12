import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { BooksRoutingModule } from './books-routing.module';
import { BookComponent } from './book/book.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookStoreService } from './shared/book-store.service';
import { CreateBookComponent } from './create-book/create-book.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    BooksRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    DashboardComponent,
    BookComponent,
    CreateBookComponent
  ],
  exports: [
    DashboardComponent
  ],
  providers: [BookStoreService]
})
export class BooksModule { }
