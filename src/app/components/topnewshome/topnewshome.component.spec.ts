import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopnewshomeComponent } from './topnewshome.component';

describe('TopnewshomeComponent', () => {
  let component: TopnewshomeComponent;
  let fixture: ComponentFixture<TopnewshomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopnewshomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopnewshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
