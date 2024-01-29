import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aula8Component } from './aula8.component';

describe('Aula8Component', () => {
  let component: Aula8Component;
  let fixture: ComponentFixture<Aula8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Aula8Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Aula8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
