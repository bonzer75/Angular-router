import { Component } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  constructor(
    private auth: AuthService
  ) {}

  user: User | null = null;

  ngOnInit():void {
    this.auth.getProfile().subscribe(data => {
      this.user = data
      console.log(this.user);
    })
  }
}
