import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListadoViajesConductorPage } from './listado-viajes-conductor.page';

describe('ListadoViajesConductorPage', () => {
  let component: ListadoViajesConductorPage;
  let fixture: ComponentFixture<ListadoViajesConductorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListadoViajesConductorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
