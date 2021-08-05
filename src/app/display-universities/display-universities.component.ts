import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class University {
  constructor(
    public id:string,
    public universityName:string,
    public phone:string,
    public address:string
  ){}
}

@Component({
  selector: 'app-display-universities',
  templateUrl: './display-universities.component.html',
  styleUrls: ['./display-universities.component.css']
})
export class DisplayUniversitiesComponent implements OnInit {

  university: University[] | any;

  constructor( private httpClient: HttpClient) {

   }

  ngOnInit(): void {
   
  }

  getUniversities(){
    this.httpClient.get<any>('http://dev.cs.smu.ca:8136/getUniversities').subscribe(
      response => {
        console.log(response);
        this.university = response
      }
    )
  }

}
