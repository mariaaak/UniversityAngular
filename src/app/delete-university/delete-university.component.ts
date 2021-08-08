import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';


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
  universityForm?: FormGroup;
  
  constructor(
    private httpClient: HttpClient,
    private fb: FormBuilder

  ) {
    this.createForm();
   }

   createForm(){
    this.universityForm = this.fb.group({
      'name': new FormControl('', [Validators.required]),
    });
  }

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
