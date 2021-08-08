import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-insert-university',
  templateUrl: './insert-university.component.html',
  styleUrls: ['./insert-university.component.css']
})
export class InsertUniversityComponent implements OnInit {

  name: String | any;
  address: String | any;
  phone: String | any;
  
  universityForm?: FormGroup;




constructor(
  private httpClient: HttpClient,
  private fb: FormBuilder

) {
  this.createForm();
}

ngOnInit(): void {
  
}

createForm(){
  this.universityForm = this.fb.group({
    'name': new FormControl('', [Validators.required,Validators.minLength(5)]),
    'phone': new FormControl('', Validators.required),
    'address': new FormControl('', Validators.required)
  });
}

saveUniversity(data: any){
  console.log(data)
  this.httpClient.post('http://dev.cs.smu.ca:8136/', data)
    .subscribe((result) => {
      if (result != null) {
        alert("University Saved !")
      }
      else {
        alert("University didnt save. Please try again !")
      }
    })

}

updateUniversity(data: any){
  console.log(data)
  this.httpClient.post('http://dev.cs.smu.ca:8136/updateUniversity', data)
    .subscribe((result) => {
      if (result != null) {
        alert("University Updated !")
      }
      else {
        alert("University didnt update. Please try again !")
      }
    })

}
 

}
