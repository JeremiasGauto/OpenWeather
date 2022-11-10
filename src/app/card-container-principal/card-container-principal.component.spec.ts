import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardContainerPrincipalComponent } from './card-container-principal.component';

describe('CardContainerPrincipalComponent', () => {
  let component: CardContainerPrincipalComponent;
  let fixture: ComponentFixture<CardContainerPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardContainerPrincipalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardContainerPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
