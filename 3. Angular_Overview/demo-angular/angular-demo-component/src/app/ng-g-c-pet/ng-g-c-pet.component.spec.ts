import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgGCPetComponent } from './ng-g-c-pet.component';

describe('NgGCPetComponent', () => {
  let component: NgGCPetComponent;
  let fixture: ComponentFixture<NgGCPetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgGCPetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgGCPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
