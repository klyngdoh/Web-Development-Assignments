import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {User} from '../../../models/user.model.client';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: string;
  password: string;
  verified: string;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  toProfile() {
    this.router.navigate(['/user/000']);
  }

  toLogin() {
    this.router.navigate(['']);
  }
}
