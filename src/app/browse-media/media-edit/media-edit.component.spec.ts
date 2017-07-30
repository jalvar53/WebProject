import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMediaComponent } from './media-edit.component';

describe('EditMediaComponent', () => {
  let component: EditMediaComponent;
  let fixture: ComponentFixture<EditMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
