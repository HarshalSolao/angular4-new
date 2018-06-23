import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCmpFormModelComponent } from './new-cmp-form-model.component';

describe('NewCmpFormModelComponent', () => {
  let component: NewCmpFormModelComponent;
  let fixture: ComponentFixture<NewCmpFormModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCmpFormModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCmpFormModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
