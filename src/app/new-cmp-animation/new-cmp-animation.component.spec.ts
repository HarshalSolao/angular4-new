import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCmpAnimationComponent } from './new-cmp-animation.component';

describe('NewCmpAnimationComponent', () => {
  let component: NewCmpAnimationComponent;
  let fixture: ComponentFixture<NewCmpAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCmpAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCmpAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
