import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilConductorPage } from './perfil-conductor.page';

describe('PerfilConductorPage', () => {
  let component: PerfilConductorPage;
  let fixture: ComponentFixture<PerfilConductorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PerfilConductorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
