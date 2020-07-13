import { Component, OnInit, Input } from '@angular/core';
import { StudentDataService } from '../service/data/student-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

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

 export class Review
{
  constructor(
    public username: string,
    public question1: number,
    public question2: number,
    public question3: number,
    public question4: number,
    public question5: number,
    public review:string
  ){
     username=''
     question1= 1
     question2= 1
     question3= 1
     question4= 1
     question5= 1
     review= ''
  }
}

  // export class Rating
  // {
  //   constructor(
  //     public username: string,
  //     public question1: number,
  //     public question2: number,
  //     public question3: number,
  //     public question4: number,
  //     public question5: number,
  //   ){}
  // }

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  @Input() star:string;
  panelOpenState = false;
  sectionSelected:string;
  currentRate = 5;
  question1 = 1;
  question2 = 1;
  question3=1;
  question4=1;
  question5=1;

  user_id: number;
  username: string;
  rating: Review

  
  message: string="Welcome "
  teacherList : Teacher

  category:string
  section:string
  dropSelected = false;
  
  constructor(
    private router: Router,
    private studentData:StudentDataService,
    private route: ActivatedRoute,
    config: NgbRatingConfig
  ) {config.max = 5; }

  ngOnInit(): void {

    this.rating =  new Review('',1,1,1,1,1,'');



    console.log('This is star',this.star);
    this.section = this.route.snapshot.params['section'];
    this.category = this.route.snapshot.params['category'];

    if(this.category === 'student')
    {
      this.category = 'teacher';
    }

 
    this.getTeacherList();
    //console.log('This is current rating for 1',this.currentRate);
    
  //  this.getrating();

  
  
  }


  getrating()
   { 
      console.log('This is current rating for 1',this.question1);
       console.log('This is current rating for 2',this.question2);
      console.log('This is current rating for 3',this.question3);
      console.log('This is current rating for 4',this.question4);
      console.log('This is current rating for 5',this.question5);
     }


  getTeacherList()
  {

   // this.dropSelected = true;
    this.studentData.getTeacherList(this.section,this.category).subscribe(
      data=> 
      {
        console.log(data)
        this.teacherList = data
     
     }
    )
   

   


  }

  select(event ){
    if(event)
    {
    
    this.dropSelected = true;
    }
    else
    {
    
      this.dropSelected = false;
    }
  }


  submitReview() {

    //create a new user
    console.log(this.rating);

      this.studentData.submitReview(this.rating).subscribe(

        data => { 
          console.log(data)
         // this.router.navigate(['student'])
        }

      )

    }

}
