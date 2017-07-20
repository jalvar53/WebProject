import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAudioComponent } from './create-audio.component';

describe('CreateAudioComponent', () => {
  let component: CreateAudioComponent;
  let fixture: ComponentFixture<CreateAudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
