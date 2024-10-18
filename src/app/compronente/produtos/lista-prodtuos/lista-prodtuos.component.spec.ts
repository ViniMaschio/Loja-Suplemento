import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProdtuosComponent } from './lista-prodtuos.component';

describe('ListaProdtuosComponent', () => {
  let component: ListaProdtuosComponent;
  let fixture: ComponentFixture<ListaProdtuosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaProdtuosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaProdtuosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
