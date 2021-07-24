import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BantuanComponent } from './bantuan.component';

describe('BantuanComponent', () => {
  let component: BantuanComponent;
  let fixture: ComponentFixture<BantuanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BantuanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BantuanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
