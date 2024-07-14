// src/app/speech-button/speech-button.component.spec.ts

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpeechButtonComponent } from './speech-button.component';

describe('SpeechButtonComponent', () => {
  let component: SpeechButtonComponent;
  let fixture: ComponentFixture<SpeechButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeechButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeechButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start listening', () => {
    spyOn(component['micService'], 'startListening');
    component.toggleListening();
    expect(component['micService'].startListening).toHaveBeenCalled();
  });

  it('should stop listening', () => {
    spyOn(component['micService'], 'stopListening');
    component.toggleListening();
    component.toggleListening();
    expect(component['micService'].stopListening).toHaveBeenCalled();
  });
});
