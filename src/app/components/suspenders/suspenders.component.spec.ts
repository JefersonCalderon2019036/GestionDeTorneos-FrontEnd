import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspendersComponent } from './suspenders.component';

describe('SuspendersComponent', () => {
  let component: SuspendersComponent;
  let fixture: ComponentFixture<SuspendersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuspendersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuspendersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
