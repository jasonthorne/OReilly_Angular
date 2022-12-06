import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PushSliceDemoComponent } from './push-slice-demo.component';

describe('PushSliceDemoComponent', () => {
  let component: PushSliceDemoComponent;
  let fixture: ComponentFixture<PushSliceDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PushSliceDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PushSliceDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
