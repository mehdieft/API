import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslatePickerComponent } from './translate-picker.component';

describe('TranslatePickerComponent', () => {
  let component: TranslatePickerComponent;
  let fixture: ComponentFixture<TranslatePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranslatePickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
