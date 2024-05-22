import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HistoriaPage } from './historia.page';

describe('HistoriaPage', () => {
  let component: HistoriaPage;
  let fixture: ComponentFixture<HistoriaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HistoriaPage]
      // Añade aquí otros módulos necesarios, como IonicModule.forRoot(), etc.
    }).compileComponents();

    fixture = TestBed.createComponent(HistoriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
