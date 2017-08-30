import { async, fakeAsync, tick, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComponent } from './modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalComponent ],
      imports: [ BrowserAnimationsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should trigger the close event when the modal is closed', () => {
    spyOn(component.closeModal, 'emit');
    component.onCloseModal();
    expect(component.closeModal.emit).toHaveBeenCalledWith(true);
  });

  it('should close the modal after 2.5 seconds', fakeAsync(() => {
    spyOn(component.closeModal, 'emit');
    component.isModalShown = true;
    component.modalContent = 'clemson';
    component.ngOnChanges();
    tick(2500)
    fixture.detectChanges()

    fixture.whenStable().then(() => {
      expect(component.closeModal.emit).toHaveBeenCalledWith(true);
    });
  }));

});
