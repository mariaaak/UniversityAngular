import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-insert-university',
  templateUrl: './insert-university.component.html',
  styleUrls: ['./insert-university.component.css']
})
export class InsertUniversityComponent implements OnInit {

  name:String | any;
  address:String | any;
  phone: String | any;

  constructor(
    private httpClient: HttpClient
    
    ) { 
  }

  ngOnInit(): void {
   //this.getUniversitities();
  }

  saveUniversity(data: any){
    console.log(data)
    this.httpClient.post('http://dev.cs.smu.ca:8136/',data)
    .subscribe((result)=>{
      if(result!=null){
        alert("University Saved !")
      }
      else{
        alert("University didnt save. Please try again !")
      }
    })
    
  }

  updateUniversity(data: any){
    console.log(data)
    this.httpClient.post('http://dev.cs.smu.ca:8136/',data)
    .subscribe((result)=>{
      if(result!=null){
        alert("University Saved !")
      }
      else{
        alert("University didnt save. Please try again !")
      }
    })
    
  }
 

}
