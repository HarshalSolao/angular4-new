import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCmpFormComponent } from './new-cmp-form.component';

describe('NewCmpFormComponent', () => {
  let component: NewCmpFormComponent;
  let fixture: ComponentFixture<NewCmpFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCmpFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCmpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
