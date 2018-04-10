import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { BooksRoutingModule } from './books-routing.module';
import { BookComponent } from './book/book.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookStoreService } from './shared/book-store.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    BooksRoutingModule
  ],
  declarations: [
    DashboardComponent,
    BookComponent
  ],
  exports: [
    DashboardComponent
  ],
  providers: [BookStoreService]
})
export class BooksModule { }
