import { Component, OnInit } from '@angular/core';
import { Form} from './form';
import { FormService } from './form.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  students = [];
  model = new Form();
  constructor(private formService: FormService) {}
  ngOnInit() {
    this.getAllStudents();
  }
  getAllStudents() {
    this.formService.getAllStudentService().subscribe((x: any[]) => {
      this.students = x;
    });
  }
  editStudent(id) {
    this.formService
      .getStudentService(id)
      .subscribe((data: any) => (this.model = data));
  }
  removeStudent(id: any) {
    this.formService.deleteStudentService(id).subscribe((data) => {
      this.getAllStudents();
    });
  }
  addStudent() {
    if (!this.model.id) {
      this.formService.createStudentService(this.model).subscribe((data) => {
        this.getAllStudents();
        this.model = new Form();
      });
    } else {
      this.formService
        .updateStudentService(this.model.id, this.model)
        .subscribe((data) => {
          this.getAllStudents();
          this.model = new Form();
        });
    }
  }
}