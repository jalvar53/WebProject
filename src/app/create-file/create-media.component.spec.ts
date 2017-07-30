import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFileComponent } from './create-media.component';

describe('CreateFileComponent', () => {
  let component: CreateFileComponent;
  let fixture: ComponentFixture<CreateFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
