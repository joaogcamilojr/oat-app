import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
	public image = [];

  constructor() { }

  ngOnInit() {
		this.image = [{
			'img': 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRHWeon8rqu8w-5myvOF4BCM35ZJwjWKHYkEw&usqp=CAU',
		}]
  }

}
