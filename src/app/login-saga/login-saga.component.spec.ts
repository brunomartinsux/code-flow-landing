import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSagaComponent } from './login-saga.component';

describe('LoginSagaComponent', () => {
  let component: LoginSagaComponent;
  let fixture: ComponentFixture<LoginSagaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginSagaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
