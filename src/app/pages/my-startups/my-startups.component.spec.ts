import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyStartupsComponent } from './my-startups.component';

describe('MyStartupsComponent', () => {
  let component: MyStartupsComponent;
  let fixture: ComponentFixture<MyStartupsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyStartupsComponent]
    });
    fixture = TestBed.createComponent(MyStartupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
