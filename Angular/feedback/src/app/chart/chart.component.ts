// import { Component, OnInit } from '@angular/core';
// import{Chart} from 'node_modules/chart.js';
// import { TeacherService } from '../service/data/teacher.service';
// import { ActivatedRoute } from '@angular/router';

// export class Review1
// {
//   constructor(
//     public username: string,
//     public question1: number,
//     public question2: number,
//     public question3: number,
//     public question4: number,
//     public question5: number,
//   ){
    
//   }
// }


// @Component({
//   selector: 'app-chart',
//   templateUrl: './chart.component.html',
//   styleUrls: ['./chart.component.css']
// })
// export class ChartComponent implements OnInit {

//     reviewDataSource: Review1[]
//     Ratings: any
//     data: any
//      que1 = 0;  que2 = 0;  que3 = 0;  que4 = 0; que5 = 0;
//      dataQues1:number
//      username: string
     

//   constructor(
//     private teacherService : TeacherService,
//     private route: ActivatedRoute
//   ) { }

//   ngOnInit(): void {
    

//     this.username = this.route.snapshot.params['username'];

//     //
//     console.log('Coming from chart',this.username);

   

//    this.getTeacherRatings();
//   console.log(this.dataQues1);
//   // console.log(this.que1);console.log(this.que2);console.log(this.que3);console.log(this.que4);console.log(this.que5);
   
//   this.teacherService.getRating('anurag3').subscribe(
//     data =>{this.reviewDataSource = data;
     
     
   
         
//      for(var i = 0; i < this.reviewDataSource.length; i++){
     
//          this.que1  += this.reviewDataSource [i].question1;
//           this.que2  += this.reviewDataSource [i].question2;
//           this.que3  += this.reviewDataSource [i].question3;
//           this.que4  += this.reviewDataSource [i].question4;
//           this.que5  += this.reviewDataSource [i].question5;
//        }
      
//       // console.log(this.que1);console.log(this.que2);console.log(this.que3);console.log(this.que4);console.log(this.que5);
//     //This code is for chart
//     var ctx = 'myChart';
//     var myChart = new Chart(ctx, {
//         type: 'doughnut',
//         data: {
//             labels: ['1 Star',  '2 Star','3 Star', '4 Star','5 Star'],
//             datasets: [{
//                 data: [this.que1,this.que2,this.que3,this.que4,this.que5],
//                 backgroundColor: [
//                     'rgb(240, 76, 92)',//Poor
//                     'rgb(255, 204, 0)',//2 Star
//                     'rgb(246, 143, 40)',//Good
//                     'rgb(102, 102, 255)',//Average
//                     'rgb(0, 204, 0)'//Excellent
                    
                   
//                 ],
//                 borderColor: [
//                     'rgb(255, 51, 51)',
//                     'rgb(255, 255, 0)',//2 Star
                    
//                     'rgb(246, 143, 40)',
//                     'rgb(0, 102, 255)',
//                     'rgb(0, 153, 0)'
                    
                    
//                 ],
//                 hoverBackgroundColor:[
//                     'rgb(255, 51, 51)',
//                     'rgb(255, 255, 0)',//2 Star
                    
//                     'rgb(255, 102, 0)',
//                     'rgb(0, 102, 255)',
//                     'rgb(0, 153, 0)'],
//                 borderWidth: 1
//             }]
//         }
//     });
 
 
 
//      }
//   )
 

//   }

//   getTeacherRatings()
//   {
  
//   }



// }
