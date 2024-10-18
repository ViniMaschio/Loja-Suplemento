import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDescricaoComponent } from './card-descricao.component';

describe('CardDescricaoComponent', () => {
  let component: CardDescricaoComponent;
  let fixture: ComponentFixture<CardDescricaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardDescricaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDescricaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
