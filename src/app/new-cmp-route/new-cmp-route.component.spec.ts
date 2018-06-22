import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCmpRouteComponent } from './new-cmp-route.component';

describe('NewCmpRouteComponent', () => {
  let component: NewCmpRouteComponent;
  let fixture: ComponentFixture<NewCmpRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCmpRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCmpRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
