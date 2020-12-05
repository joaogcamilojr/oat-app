import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-inventorys',
  templateUrl: './inventorys.page.html',
  styleUrls: ['./inventorys.page.scss'],
})
export class InventorysPage implements OnInit {
  public inventorys = [];

  constructor (
    private toastCtrl: ToastController,
    private route: Router,
    private apiService: ApiService
  ) {
    this.apiService.getItems().subscribe((data:any) => {
      this.inventorys = data;
    })
  }

  async presentToast() {
    let toast = await this.toastCtrl.create({
      message: `Item deletado com sucesso!`,
      duration: 2000,
      position: 'middle'
    });

    this.route.navigate(['/'])

    toast.present();
  }

  async handleDelete(id: string){
    await this.apiService.sendItemDeleteRequest(id).subscribe((data)=>{
      console.log(id);
    }, error => {
      console.log(error);
    });
    await this.presentToast()
  }

  ngOnInit() {
  }
}
