import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingHeaderComponent } from './landing-header.component';

describe('HeaderComponent', () => {
  let component: LandingHeaderComponent;
  let fixture: ComponentFixture<LandingHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
