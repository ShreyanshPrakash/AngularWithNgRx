import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultControlComponent } from './default-control.component';

describe('DefaultControlComponent', () => {
  let component: DefaultControlComponent;
  let fixture: ComponentFixture<DefaultControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
