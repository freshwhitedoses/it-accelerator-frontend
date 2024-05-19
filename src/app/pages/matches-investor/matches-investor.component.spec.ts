import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchesInvestorComponent } from './matches-investor.component';

describe('MatchesInvestorComponent', () => {
  let component: MatchesInvestorComponent;
  let fixture: ComponentFixture<MatchesInvestorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatchesInvestorComponent]
    });
    fixture = TestBed.createComponent(MatchesInvestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
