import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../service/data/teacher.service';
import { ActivatedRoute, Router } from '@angular/router';
import{Chart} from 'node_modules/chart.js';

export class Review1
{
  constructor(
    public username: string,
    public question1: number,
    public question2: number,
    public question3: number,
    public question4: number,
    public question5: number,
  ){
    
  }
}


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


@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})


export class TeacherComponent implements OnInit {
  displayedColumns: string[] = ['Username', 'Email','Section','Category'];
  section: string
  category: string
  datasource : User[]
  sectionSelected : string
  username: string
  user:string


  reviewDataSource: Review1[]
  Ratings: any
  data: any
   
   dataQues1:number





  constructor(
    private teacherService : TeacherService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  

  ngOnInit(): void {


    

    this.section = this.route.snapshot.params['section'];
    this.category = this.route.snapshot.params['category'];
    this.user = this.route.snapshot.params['username'];

    
    this.sectionSelected = this.section

    if(this.category === 'teacher')
    {
      this.category = 'student';
    }


    console.log('This is coming from teacher component');
    console.log(this.section, this.category, this.user);

    console.log('This is from datasource');
    console.log(this.datasource);
    this.getStudentList();
    console.log('This is section selected'+this.sectionSelected);




    
this.getChart(this.user,this.sectionSelected);



  }


 getChart(user,sectionSelected)
 {
 
  // This code is for chart generation

this.teacherService.getRating(user,sectionSelected).subscribe(
  data =>{this.reviewDataSource = data;
   
   
    var que1 = 0; var que2 = 0; var que3 = 0; var que4 = 0;var que5 = 0;
       
   for(var i = 0; i < this.reviewDataSource.length; i++){
   
       que1  += this.reviewDataSource [i].question1;
        que2  += this.reviewDataSource [i].question2;
        que3  += this.reviewDataSource [i].question3;
        que4  += this.reviewDataSource [i].question4;
        que5  += this.reviewDataSource [i].question5;
     }
    
  var ctx = 'myChart';
  var myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
          labels: ['1 Star',  '2 Star','3 Star', '4 Star','5 Star'],
          datasets: [{
              data: [que1,que2,que3,que4,que5],
              backgroundColor: [
                  'rgb(240, 76, 92)',//1 Star
                  'rgb(255, 204, 0)',//2 Star
                  'rgb(246, 143, 40)',//3 Star
                  'rgb(102, 102, 255)',//4 Star
                  'rgb(0, 204, 0)'//5 Star
                  
                 
              ],
              borderColor: [
                  'rgb(255, 51, 51)',
                  'rgb(255, 255, 0)',
                  'rgb(246, 143, 40)',
                  'rgb(0, 102, 255)',
                  'rgb(0, 153, 0)'
                  
                  
              ],
              hoverBackgroundColor:[
                  'rgb(255, 51, 51)',
                  'rgb(255, 255, 0)',
                  'rgb(255, 102, 0)',
                  'rgb(0, 102, 255)',
                  'rgb(0, 153, 0)'],
              borderWidth: 1
          }]
      }
  });
   }
)
  // This code is for chart generation
}
  


  getStudentList()
  {
    this.teacherService.getStudentList(this.section,this.category).subscribe(
      response => {this.datasource = response;
      }
    )
  
  }

  getDifferentSections(sectionSelected)
  {
    this.teacherService.getStudentList(sectionSelected,this.category).subscribe(
      response => {this.datasource = response;
      }
    )
    this.getChart(this.user,this.sectionSelected);  
  }
}
