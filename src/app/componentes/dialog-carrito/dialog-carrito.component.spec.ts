import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCarritoComponent } from './dialog-carrito.component';

describe('DialogCarritoComponent', () => {
  let component: DialogCarritoComponent;
  let fixture: ComponentFixture<DialogCarritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCarritoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
