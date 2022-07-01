import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  currentUser: any;
  constructor(
    private authService: AuthService,
    private route: Router
  ) {}

  ngOnInit(): void {

  }

  logout() {
    this.authService.logout();
    this.route.navigate(['/']);
    alert('Logout successful');
  }

}
