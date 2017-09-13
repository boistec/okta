import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplicitCallbackComponent } from './implicit-callback.component';

describe('ImplicitCallbackComponent', () => {
  let component: ImplicitCallbackComponent;
  let fixture: ComponentFixture<ImplicitCallbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImplicitCallbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImplicitCallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
