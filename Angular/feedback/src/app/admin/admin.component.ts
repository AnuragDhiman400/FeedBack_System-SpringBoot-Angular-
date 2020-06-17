import { Component, OnInit } from '@angular/core';
import { AdminDataService } from '../service/data/admin-data.service';
import { Router } from '@angular/router';

export class User{


  constructor(
  public user_id: number,
  public username: string,
  public email: string,
  public password: string,
  public section: string,
  public category: string,
  ) {}
  
  }


// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] 
// = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

 displayedColumns: string[] = ['Username', 'Email','Password','Section','Category','Update','Delete'];
  
  dataSource : User[] 

  message: string
  extractedmessage:string

  //constructor
  constructor(
    private userService:AdminDataService,
    private route:Router
  ) { }

  ngOnInit(): void {
  this.refreshList();
  }

  
  

  refreshList()
  {

    this.userService.retrieveAllList().subscribe(

      response => {this.dataSource = response;}
     

    )
    

  }

  deleteUser(user_id)
  {

    this.userService.deleteUser(user_id).subscribe(

      response => {

        console.log(response)
        this.message = `Delete of User ${user_id} successfull`
        this.getAllUsers();

      }

    )


  }

  addUser()
  { 
    this.route.navigate(['user',-1]);
   }

   updateUser(user_id)
   {
     console.log(`${user_id}`);
     this.route.navigate(['user',user_id])
   }


}
