import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationSecretaryComponent } from './registration-secretary.component';

describe('RegistrationSecretaryComponent', () => {
  let component: RegistrationSecretaryComponent;
  let fixture: ComponentFixture<RegistrationSecretaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationSecretaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationSecretaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
