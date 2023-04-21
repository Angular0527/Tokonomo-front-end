import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchIdoComponent } from './launch-ido.component';

describe('LaunchIdoComponent', () => {
  let component: LaunchIdoComponent;
  let fixture: ComponentFixture<LaunchIdoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchIdoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaunchIdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
