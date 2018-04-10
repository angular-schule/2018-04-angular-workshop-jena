import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { BookComponent } from '../book/book.component';
import { BookStoreService } from '../shared/book-store.service';
import { mock, when, instance } from 'ts-mockito/lib/ts-mockito';


describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  let bsMock: BookStoreService;

  beforeEach(() => {
    bsMock = mock(BookStoreService);
    when(bsMock.getAllStatic()).thenReturn([
      { isbn: '', title: 'Testbuch', description: '', rating: 2 }
    ]);
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: BookStoreService, useFactory: () => instance(bsMock) }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });
});
