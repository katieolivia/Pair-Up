import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-names',
  templateUrl: './add-names.component.html',
  styleUrls: ['./add-names.component.css']
})
export class AddNamesComponent implements OnInit {
  students = [];
  constructor() { }

  ngOnInit() {
  }
  onAddStudentToList(student) {
    this.students.push(student);
    console.log(this.students);
  }

}
