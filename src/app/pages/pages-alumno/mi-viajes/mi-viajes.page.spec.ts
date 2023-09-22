import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MiViajesPage } from './mi-viajes.page';

describe('MiViajesPage', () => {
  let component: MiViajesPage;
  let fixture: ComponentFixture<MiViajesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MiViajesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
