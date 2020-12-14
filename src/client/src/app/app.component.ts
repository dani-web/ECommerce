import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IProduct } from './shared/models/product';
import { IPagination } from './shared/models/pagination';
import { AccountRoutingModule } from './account/account-routing.module';
import { AccountService } from './account/account.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
    title = 'SkiNet';

    constructor(private basketService,
      private http: HttpClient,
                private accountService: AccountService
      ) {}

    ngOnInit(): void {
      this.loadBasket();
      this.loadCurrentUser();
    }

    loadCurrentUser() {
      const token = localStorage.getItem('token');
      if (token) {
        this.accountService.loadCurrentUser(token).subscribe(() => {
          console.log('loaded user');
        }, error => {
              console.log(error);
        });
      }
    }

    loadBasket() {
      const basketId = localStorage.getItem('basket_id');
      if (basketId) {
        this.basketService.getBasket(basketId)
          .subscribe(() => {
            console.log('initialised basket');
          }, error => {
            console.log(error);
          });


      }
    }
    }


