import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymteacherComponent } from './gymteacher.component';

describe('GymteacherComponent', () => {
  let component: GymteacherComponent;
  let fixture: ComponentFixture<GymteacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GymteacherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GymteacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
