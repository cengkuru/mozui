import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenDataComponent } from './open-data.component';

describe('OpenDataComponent', () => {
  let component: OpenDataComponent;
  let fixture: ComponentFixture<OpenDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpenDataComponent]
    });
    fixture = TestBed.createComponent(OpenDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
