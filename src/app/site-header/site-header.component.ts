import { Component } from '@angular/core';
import { IUser } from '../user/user.model';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'bot-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css'],
})
export class SiteHeaderComponent {
  user: IUser | null = null;
  showSignOut: boolean = false;
  constructor(private userService: UserService, private router: Router) {

  }

  ngOnInit() {
    this.userService.getUser().subscribe({
      next: (user) => { this.user = user }
    })
  }


  signOut() {
    this.userService.signOut();
    this.showSignOut = false;
    if (this.user == null) {
      this.router.navigate(['/signIn']);
    }
  }


}
