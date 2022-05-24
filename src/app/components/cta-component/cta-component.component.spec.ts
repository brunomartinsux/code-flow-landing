import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaComponentComponent } from './cta-component.component';

describe('CtaComponentComponent', () => {
  let component: CtaComponentComponent;
  let fixture: ComponentFixture<CtaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtaComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CtaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
