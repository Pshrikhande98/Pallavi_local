import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesInAngulerComponent } from './directives-in-anguler.component';

describe('DirectivesInAngulerComponent', () => {
  let component: DirectivesInAngulerComponent;
  let fixture: ComponentFixture<DirectivesInAngulerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectivesInAngulerComponent]
    });
    fixture = TestBed.createComponent(DirectivesInAngulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
