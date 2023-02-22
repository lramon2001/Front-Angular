import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DominioEmailsComponent } from './dominio-emails.component';

describe('DominioEmailsComponent', () => {
  let component: DominioEmailsComponent;
  let fixture: ComponentFixture<DominioEmailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DominioEmailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DominioEmailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
