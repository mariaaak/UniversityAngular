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
  selector: 'app-delete-university',
  templateUrl: './delete-university.component.html',
  styleUrls: ['./delete-university.component.css']
})
export class DeleteUniversityComponent implements OnInit {

  university: University[] | any;
  
  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
  }

  searchUniversity(data: any){
    console.log(data)
    this.httpClient.post('http://dev.cs.smu.ca:8136/getUniversity',data)
    .subscribe((result)=>{
        console.log(result);
        this.university = result
    })
    
  }

  deleteUniversity(data: any){
    console.log(data)
    this.httpClient.post('http://dev.cs.smu.ca:8136/deleteUniversity',data)
    .subscribe((result)=>{
      console.log(result);
      alert("Delete successful !")
    })
    
  }

}
