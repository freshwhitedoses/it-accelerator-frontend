import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupsInvestorComponent } from './startups-investor.component';

describe('StartupsInvestorComponent', () => {
  let component: StartupsInvestorComponent;
  let fixture: ComponentFixture<StartupsInvestorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StartupsInvestorComponent]
    });
    fixture = TestBed.createComponent(StartupsInvestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
