import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ReactiveFormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  studentform = new FormGroup({
    id: new FormControl(''),
    fullname: new FormControl(''),
    average: new FormControl('')
  }
  );
  Cancle() {
    this.ca = 'list';
  }
  add() {
    this.ca = 'add';
  }
  ca = 'list';
  a:any;
  b:boolean=false;
  data: any[] = [];
  ok() {
    switch (this.ca) {
      case 'add':
        const student = {
          id: this.studentform.controls.id.value,
          fullname: this.studentform.controls.fullname.value,
          average: this.studentform.controls.average.value
        }
        this.data.push(student);
        break;
    }
    this.ca = 'list';
    this.studentform.reset();
  }
  edit(i:number){
    this.ca='add'
this.a=i;
this.b=!this.b;
  }
  update(){
this.b=!this.b;
this.ca='list'
this.data[this.a].id=this.studentform.controls.id.value;
this.data[this.a].fullname=this.studentform.controls.fullname.value;
this.data[this.a].average=this.studentform.controls.average.value;
this.studentform.reset();

  }
  remove(i:number){
this.data.splice(i,1)
  }
}
