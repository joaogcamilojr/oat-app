import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewItemPage } from './new-item.page';

describe('NewItemPage', () => {
  let component: NewItemPage;
  let fixture: ComponentFixture<NewItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewItemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
