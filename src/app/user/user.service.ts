import { Injectable } from '@angular/core';
import { User } from '../types/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User | undefined;
  USER_KEY = '[user]'


  get isLogged(): boolean {
    return !!this.user;
  }

  constructor() {
    try {
      const localStorageUser = localStorage.getItem(this.USER_KEY) || "";
      this.user = JSON.parse(localStorageUser)
    } catch (error) {

    }
  }

  login(): void {
    this.user = {
      username: "pcpcpc",
      email: 'pcpc@sdsd.com',
    }

    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user))
  }

  logout(): void {
    this.user = undefined;
    localStorage.removeItem(this.USER_KEY)
  }
}