import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }


  ngOnInit(): void {
  }

  registerForm = this.formBuilder.group({
    name: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', Validators.required]
  });


  register(data: any) {
    return this.authService.register(data.name, data.password, data.email)
      .subscribe(() => {
        this.router.navigate(['/']);
        console.log('register successful');
      }
      , (error) => {
        console.log(error, 'register failed');
      }
      );
    }

}
