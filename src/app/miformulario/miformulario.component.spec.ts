import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiformularioComponent } from './miformulario.component';

describe('MiformularioComponent', () => {
  let component: MiformularioComponent;
  let fixture: ComponentFixture<MiformularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiformularioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiformularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
