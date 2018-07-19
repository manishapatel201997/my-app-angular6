import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchloopComponent } from './switchloop.component';

describe('SwitchloopComponent', () => {
  let component: SwitchloopComponent;
  let fixture: ComponentFixture<SwitchloopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchloopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchloopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
