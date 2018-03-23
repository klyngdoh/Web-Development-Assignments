import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userId: string;
  user: User;
  username: string;
  email: string;
  firstName: string;
  lastName: string;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.route.params.subscribe(
      (params: any) => {
        this.userId = params['userId'];
      }
    );
    this.user = this.userService.findUserById(this.userId);
    this.username = this.user['username'];
    this.firstName = this.user['firstName'];
    this.lastName = this.user['lastName'];
    this.email = this.firstName.toLowerCase() + '.'  + this.lastName.toLowerCase() + '@gmail.com';
  }

  toLogin() {
    this.router.navigate(['']);
  }

  toWebsites() {
    this.router.navigate(['/user/', this.userId, 'website']);
  }

  toProfile() {
    this.router.navigate(['/user/', this.userId]);
  }

}
