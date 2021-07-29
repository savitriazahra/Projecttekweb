import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HubungikamiComponent } from './hubungikami.component';

describe('HubungikamiComponent', () => {
  let component: HubungikamiComponent;
  let fixture: ComponentFixture<HubungikamiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HubungikamiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HubungikamiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
