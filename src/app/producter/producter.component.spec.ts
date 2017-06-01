import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducterComponent } from './producter.component';

describe('ProducterComponent', () => {
  let component: ProducterComponent;
  let fixture: ComponentFixture<ProducterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProducterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
