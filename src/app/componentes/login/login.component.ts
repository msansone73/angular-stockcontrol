import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService,
    private router: Router) { }

  ngOnInit(): void {
  }

  user:User = {email:'msansone@email.com', password:'123456'}


  logar(){
    this.userService.getLogin(this.user)
    .subscribe(
      u => {
        this.user=u
        this.userService.setUser(u)
        this.router.navigate([''])
      }
    )
  }

  registrar(){
    this.router.navigate(['register'])
  }


}
