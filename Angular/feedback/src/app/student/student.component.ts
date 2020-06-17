import { Component, OnInit } from '@angular/core';
import { StudentDataService } from '../service/data/student-data.service';


export class Teacher{


  constructor(
  public user_id: number,
  public username: string,
  public email: string,
  public password: string,
  public section: string,
  public category: string,
  ) {}
  
  }

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  panelOpenState = false;
  

  
  message: string="Welcome "
  teacherList : Teacher



  constructor(
    private studentData:StudentDataService
  ) { }

  ngOnInit(): void {
    this.getList();
  }

  getList()
  {

    this.studentData.getTeacherList().subscribe(
      data=> 
      {
        console.log(data)
        this.teacherList = data
     }
    )
   



  }

}
