import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { spy, verify } from 'ts-mockito';

import { BookComponent } from './book.component';
import { By } from '@angular/platform-browser';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    component.book = { isbn: '', title: '', description: '', rating: 3 };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call rateUp() when button is clicked', () => {
    const rateUpBtn = fixture.debugElement.query(By.css('button.testing-rate-up-btn'));

    let ratingWasCalled = false;

    component.rateUp = () => {
      ratingWasCalled = true;
    };

    rateUpBtn.nativeElement.click();
    expect(ratingWasCalled).toBe(true);
  });

  fit('should call rateUp() when button is clicked with mockito', () => {
    const spiedComp = spy(component);

    const rateUpBtn = fixture.debugElement.query(By.css('button.testing-rate-up-btn'));
    rateUpBtn.nativeElement.click();

    verify(spiedComp.rateUp()).once();
  });
});
