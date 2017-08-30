import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavComponent } from './nav.component';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavComponent ],
      imports: [ BrowserAnimationsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to toggle the mobile menu', () => {
    expect(component.mobileMenuShown).toBeFalsy();
    component.toggleMobileMenu();
    expect(component.mobileMenuShown).toBeTruthy();
  });

  it('should be able to handle escape key event', () => {
    component.mobileMenuShown = true;
    const event = new KeyboardEvent("keydown",{
      "code": "Escape",
    });
    component.handleKeyboardEvent(event)
    expect(component.mobileMenuShown).toBeFalsy();
  });
});
