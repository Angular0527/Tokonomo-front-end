import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenFrameComponent } from './token-frame.component';

describe('TokenFrameComponent', () => {
  let component: TokenFrameComponent;
  let fixture: ComponentFixture<TokenFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TokenFrameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TokenFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
