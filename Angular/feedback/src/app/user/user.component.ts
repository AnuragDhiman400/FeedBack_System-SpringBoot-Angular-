import { Component, OnInit } from '@angular/core';
import { User } from '../admin/admin.component';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminDataService } from '../service/data/admin-data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  hide = true;
  user_id: number
  //username: string=''
  //password: string=''
  //email: string=''
  //section: string=''
  //category: string=''

  user: User

  constructor(

    private adminData: AdminDataService,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit(): void {

    this.user_id = this.route.snapshot.params['user_id']
    this.user = new User(this.user_id, "", "", "", "", "");

    if (this.user_id != -1) {
      this.adminData.getUser(this.user_id).subscribe(

        data => { this.user = data }

      )

    }
  }


  updateUser() {

    //create a new user
    if (this.user_id == -1) {

      this.adminData.addNewUser(this.user).subscribe(

        data => {
          console.log(data)
          this.router.navigate(['admin'])
        }

      )

    }

    //updated a new user
    else {
      this.adminData.updateUser(this.user_id, this.user).subscribe(

        data => {
          console.log(data)
          this.router.navigate(['admin']);
        }

      )
    }

  }
}
