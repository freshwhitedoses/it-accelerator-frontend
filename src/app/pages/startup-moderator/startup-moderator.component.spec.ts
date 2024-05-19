import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupModeratorComponent } from './startup-moderator.component';

describe('StartupModeratorComponent', () => {
  let component: StartupModeratorComponent;
  let fixture: ComponentFixture<StartupModeratorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StartupModeratorComponent]
    });
    fixture = TestBed.createComponent(StartupModeratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
