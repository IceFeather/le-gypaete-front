import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MosaiqueComponent } from './mosaique.component';

describe('MosaiqueComponent', () => {
  let component: MosaiqueComponent;
  let fixture: ComponentFixture<MosaiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MosaiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MosaiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
