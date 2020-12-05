import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  constructor (
    private toastCtrl: ToastController,
    private route: Router,
    private apiService: ApiService
  ) { }

	formData = {
		name: '',
    email: '',
		message: ''
	}

  async presentToast() {
    let toast = await this.toastCtrl.create({
      message: `${this.formData.message}!`,
      duration: 2000,
      position: 'middle'
    });

    this.route.navigate(['/'])

    toast.present();
  }

  async formSubmit(){
    await this.apiService.sendContactRequest(this.formData).subscribe((data)=>{
      console.log(this.formData.message);
    }, error => {
      console.log(error);
    });
    await this.presentToast()
  }
  
  ngOnInit() {  
  }
}