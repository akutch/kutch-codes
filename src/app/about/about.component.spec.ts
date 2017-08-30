import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AboutComponent } from './about.component';
import { ModalComponent } from '../modal/modal.component'; 
import { fadeInAnimation } from '../animations/fade-in-animation'

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        AboutComponent, 
        ModalComponent 
      ],
      imports: [
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    component.modalContent = '';
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should show the sc content area', fakeAsync(() => {
    expect(component.isContentAreaShown).toBeFalsy();
    component.showContentArea('sc');
    tick(500)
    fixture.detectChanges()
  
    fixture.whenStable().then(() => {
      expect(component.isContentAreaShown).toBeTruthy();
      expect(component.facts).toBe(component.scFacts);
    });
  }));

  it('should show the ma content area', fakeAsync(() => {
    expect(component.isContentAreaShown).toBeFalsy();
    component.showContentArea('ma');
    tick(500)
    fixture.detectChanges()
 
    fixture.whenStable().then(() => {
      expect(component.isContentAreaShown).toBeTruthy();
      expect(component.facts).toBe(component.maFacts);
    });
  }));

  it('should be able to hide the content area', fakeAsync(() => {
    component.isContentAreaShown = true; 
    expect(component.isContentAreaShown).toBeTruthy();
    component.hideContentArea();
    tick(500)
    fixture.detectChanges()
    
    fixture.whenStable().then(() => {
      expect(component.isContentAreaShown).toBeFalsy();
    });
    
  }));

  it('should be able to close the clemson animation', () => {
    component.isClemsonAnimationShown = true;
    expect(component.isClemsonAnimationShown).toBeTruthy();
    component.closeModal();
    expect(component.isClemsonAnimationShown).toBeFalsy();
  });

  it('should be able to show the clemson animation', () => {
    expect(component.isClemsonAnimationShown).toBeFalsy();
    component.goTigers();
    expect(component.isClemsonAnimationShown).toBeTruthy();
  });


});
