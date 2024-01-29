import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aula6Component } from './aula6.component';

describe('Aula6Component', () => {
  let component: Aula6Component;
  let fixture: ComponentFixture<Aula6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Aula6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Aula6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
