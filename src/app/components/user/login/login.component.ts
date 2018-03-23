import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
  }

  login() {

    const user: User = this.userService.findUserByUsername(this.username);
    if (!user) {
      alert('Invalid Username/Password combination!');
    }
    else if (this.password === user.password) {
      this.router.navigate(['/user/', user._id]);
    } else {
      alert('Invalid Username/Password combination!');
    }
  }

  register() {
    this.router.navigate(['register']);
  }

}
