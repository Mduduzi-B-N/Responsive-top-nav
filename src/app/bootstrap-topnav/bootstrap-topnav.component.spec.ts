import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapTopnavComponent } from './bootstrap-topnav.component';

describe('BootstrapTopnavComponent', () => {
  let component: BootstrapTopnavComponent;
  let fixture: ComponentFixture<BootstrapTopnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootstrapTopnavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapTopnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
