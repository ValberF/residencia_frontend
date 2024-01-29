import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aula7Component } from './aula7.component';

describe('Aula7Component', () => {
  let component: Aula7Component;
  let fixture: ComponentFixture<Aula7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Aula7Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Aula7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
