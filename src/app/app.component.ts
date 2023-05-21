import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { BaseUser } from './interfaces/base-user';
import { User } from './interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'sample-app';

  constructor(private userService: UserService){

  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe( (res: User[]) => {
      console.log(res);
    }
    );
  }
}
