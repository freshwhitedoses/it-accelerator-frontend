import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStartupComponent } from './new-startup.component';

describe('NewStartupComponent', () => {
  let component: NewStartupComponent;
  let fixture: ComponentFixture<NewStartupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewStartupComponent]
    });
    fixture = TestBed.createComponent(NewStartupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
