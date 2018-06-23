import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCmpHttpComponent } from './new-cmp-http.component';

describe('NewCmpHttpComponent', () => {
  let component: NewCmpHttpComponent;
  let fixture: ComponentFixture<NewCmpHttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCmpHttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCmpHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
