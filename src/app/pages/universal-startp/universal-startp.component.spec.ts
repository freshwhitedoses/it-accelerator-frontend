import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversalStartpComponent } from './universal-startp.component';

describe('UniversalStartpComponent', () => {
  let component: UniversalStartpComponent;
  let fixture: ComponentFixture<UniversalStartpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UniversalStartpComponent]
    });
    fixture = TestBed.createComponent(UniversalStartpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
