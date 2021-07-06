import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToregisterComponent } from './toregister.component';

describe('ToregisterComponent', () => {
  let component: ToregisterComponent;
  let fixture: ComponentFixture<ToregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToregisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
