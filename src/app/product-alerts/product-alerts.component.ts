import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
// imports the interface, not the list
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
// export class ProductAlertsComponent implements OnInit {
//   // not sure how this is wired up?
//   @Input() product!: Product;
//   constructor() {}

//   ngOnInit() {}
// }
export class ProductAlertsComponent implements OnInit {
  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter();

  ngOnInit() {}
}
