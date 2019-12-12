import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  items: Array<any>;

  constructor(
    private router: Router,
    public itemService: ItemService
  ) { }

  ngOnInit() {
    this.items = this.itemService.getItems();
  }

}
