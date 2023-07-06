import { Component, Inject, InjectionToken, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from '../Core/core.service';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss']
})
export class EmpAddEditComponent implements OnInit {

  empForm: FormGroup

  education: string[] = [
    'Matric',
    'Diploma',
    'Intermediate',
    'Gradute',
    'PostGraduate'

  ]

  constructor(
    private _fb: FormBuilder,
    private _empService: EmployeeService,
    private _dialogRef: MatDialogRef<EmpAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService : CoreService
  ) {
    this.empForm = _fb.group({
      firstName: '',
      lastName: '',
      email: '',
      dob: '',
      gender: '',
      education: '',
      experience: '',
      company: '',
      package: ''
    })
  }

  ngOnInit(): void {
    this.empForm.patchValue(this.data)
  }

  onFormSubmit() {
    if (this.empForm.valid) {
      if (this.data) {
        this._empService.updateEmployee(this.data.id,this.empForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Employee detail updated')
            this._dialogRef.close(true)
          },
          error: (err: any) => {
            console.error(err)
          }
        })
      } else {
        this._empService.addEmployee(this.empForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('employee added successfully')
            this._dialogRef.close(true)
          },
          error: (err: any) => {
            console.error(err)
          }
        })
      }
    }
  }
}
function INJECT(MAT_DIALOG_DATA: InjectionToken<any>): (target: typeof EmpAddEditComponent, propertyKey: undefined, parameterIndex: 3) => void {
  throw new Error('Function not implemented.');
}

