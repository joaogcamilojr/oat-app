import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.page.html',
  styleUrls: ['./new-item.page.scss'],
})
export class NewItemPage implements OnInit {

  constructor (
    private toastCtrl: ToastController,
    private route: Router,
    private apiService: ApiService
  ) { }

	formData = {
		name: '',
    description: '',
		image_url: ''
	}

  async presentToast() {
    let toast = await this.toastCtrl.create({
      message: `${this.formData.name} foi adicionada a lista de músicas!`,
      duration: 2000,
      position: 'middle'
    });

    this.route.navigate(['/'])

    toast.present();
  }

  async formSubmit(){
    await this.apiService.sendItemRequest(this.formData).subscribe((data)=>{
      console.log(this.formData.name);
    }, error => {
      console.log(error);
    });
    await this.presentToast()
  }
  
  ngOnInit() {
  }
}
