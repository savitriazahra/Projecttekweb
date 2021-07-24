import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerlengkapanComponent } from './perlengkapan.component';

describe('PerlengkapanComponent', () => {
  let component: PerlengkapanComponent;
  let fixture: ComponentFixture<PerlengkapanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerlengkapanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerlengkapanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
