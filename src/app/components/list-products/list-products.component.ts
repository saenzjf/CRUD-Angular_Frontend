import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent {

  listProducts: Product[] = [
    // {id: 1, name: 'Coca Cola', description: 'Bebida azucarada', price: 4, stock: 200},
    // {id: 2, name: 'Corona', description: 'Bebida Alcoholica', price: 5, stock: 300}
  ];
  loading: boolean = false;

  constructor(private _productService: ProductService, private toastr: ToastrService){

  }

  ngOnInit(): void{
    this.getListProducts();
  }

  getListProducts(){
    this.loading = true;

    this._productService.getListProducts().subscribe((data: Product[])=>{
      console.log(data);
      this.listProducts = data;
      this.loading = false;
    })
  }

  deleteProduct(id:number){
    console.log(id);
    this.loading = true;
    
    this._productService.deleteProduct(id).subscribe(()=>{
      console.log("Producto Eliminado");
      //this.loading = false;
      this.getListProducts();
      this.toastr.warning('El producto fue eliminado con exito', 'Producto eliminado');
    })
  }

}
