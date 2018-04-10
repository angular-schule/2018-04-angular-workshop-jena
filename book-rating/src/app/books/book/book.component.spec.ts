import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { spy, verify } from 'ts-mockito';

import { BookComponent } from './book.component';
import { By } from '@angular/platform-browser';
import { ChangeDetectionStrategy } from '@angular/core';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookComponent ]
    })
    .overrideComponent(BookComponent, {
      set: { // Change Detection manuell auf Default setzen, sonst funktioniert CD nicht
        changeDetection: ChangeDetectionStrategy.Default
      }
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

  it('should call rateUp() when button is clicked with mockito', () => {
    const spiedComp = spy(component);

    const rateUpBtn = fixture.debugElement.query(By.css('button.testing-rate-up-btn'));
    rateUpBtn.nativeElement.click();

    verify(spiedComp.rateUp()).once();
  });

  it('should display the correct rating', () => {
    const ratingBox = fixture.debugElement.query(By.css('.testing-rating-box'));
    expect(ratingBox.nativeElement.textContent).toBe('3');

    component.book = { ...component.book, rating: 5 };
    fixture.detectChanges();
    expect(ratingBox.nativeElement.textContent).toBe('5');
  });
});
