import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
import {User} from '../models/user.model.client';

@Injectable()

export class UserService {

  constructor() {}

  users: User[] = [
    new User('123', 'alice', 'alice', 'Alice', 'Wonder'),
    new User('234', 'bob', 'bob', 'Bob', 'Marley'),
    new User('345', 'charly', 'charly', 'Charly', 'Garcia')
  ];

  api = {
    'createUser': this.createUser,
    'findUserById': this.findUserById,
    'findUserByUsername': this.findUserByUsername,
    'updateUser': this.updateUser,
    'deleteUser': this.deleteUser
  };

  createUser(user: any) {
    user._id = '0';
    this.users.push(user);
    return user;
  }

  findUserById(userId: string) {
    return this.users.find(function (user) {
      return user._id === userId;
    });
  }

  findUserByUsername(username: string) {
    return this.users.find(function (user) {
      return user.username === username;
    });
  }

  updateUser(userId: string, user: any) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x]._id === userId) {
        this.users[x] = user;
        return this.users[x];
      }
    }
  }

  deleteUser(userId: string) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x]._id === userId) {
        this.users.splice(x, 1);
      }
    }
  }

}
