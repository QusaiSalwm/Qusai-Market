import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ProductsServiceService } from 'src/app/services/products/products-service.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {

  public details :any
  constructor(
    private productDetService: ProductsServiceService,
    private route: ActivatedRoute,
    public router: Router,
    private title :Title
  ) {}

  ngOnInit(): void {
    this.productDet()
  }

  public productDet(): void {
    this.route.params.subscribe((params) => {
      this.productDetService.getProductDetails(params['id']).subscribe((det) => {
        this.details = det;
        this.title.setTitle(det.title);
        console.log(this.details, 'product Details')
      });
    });
  }
}
