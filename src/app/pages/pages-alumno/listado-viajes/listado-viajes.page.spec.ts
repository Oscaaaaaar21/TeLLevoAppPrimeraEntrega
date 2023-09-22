import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListadoViajesPage } from './listado-viajes.page';

describe('ListadoViajesPage', () => {
  let component: ListadoViajesPage;
  let fixture: ComponentFixture<ListadoViajesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListadoViajesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
