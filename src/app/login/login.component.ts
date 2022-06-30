import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private service: AuthService, private router: Router ) { }

  loginForm = new FormGroup({
    //validators are used to validate the inputs
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  ngOnInit(): void {
  }

  onClickSubmit(data: any) {
    //if the login is successful, navigate to the product component 
    if (this.service.login(data.email, data.password)) {
      //navigate to the product component
      this.service.login(data.email, data.password).subscribe(() => {
        this.router.navigate(['/product']);
        console.log('login successful');
      }
      , (error) => {  
        console.log(error , 'login failed');
      }
      );

    }


  }
}
// Language: typescript
