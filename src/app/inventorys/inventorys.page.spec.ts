import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InventorysPage } from './inventorys.page';

describe('InventorysPage', () => {
  let component: InventorysPage;
  let fixture: ComponentFixture<InventorysPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventorysPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InventorysPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
