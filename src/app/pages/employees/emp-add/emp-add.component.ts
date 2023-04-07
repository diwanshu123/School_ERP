import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxFileDropEntry } from 'ngx-file-drop';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-emp-add',
  templateUrl: './emp-add.component.html',
  styleUrls: ['./emp-add.component.scss']
})
export class EmpAddComponent {
  
  public files: NgxFileDropEntry[] = [];
  isLoading: boolean;

  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {

          // Here you can access the real file
          console.log(droppedFile.relativePath, file);

          /**
          // You could upload it like this:
          const formData = new FormData()
          formData.append('logo', file, relativePath)

          // Headers
          const headers = new HttpHeaders({
            'security-token': 'mytoken'
          })

          this.http.post('https://mybackend.com/api/upload/sanitize-and-save-logo', formData, { headers: headers, responseType: 'blob' })
          .subscribe(data => {
            // Sanitized logo returned from backend
          })
          **/

        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }

  public fileOver(event: any){
    console.log(event);
  }

  public fileLeave(event: any){
    console.log(event);
  }



  employe_role = [
		{ id: '1 ', value: 'Admin' },
		{ id: '2', value: 'Teacher' },
		{ id: '3', value: 'Accountant' },
		{ id: '4', value: 'Librarian' },
		{ id: '5', value: 'Receptionist' },
	
	];
  addEmployee: FormGroup
  
  constructor(private api: ApiService, private toastr: ToastrService)
  {
    this.addEmployee = new FormGroup({
      role: new FormControl(null, [Validators.required]),
      joiningDate: new FormControl(null, [Validators.required]),
      designation: new FormControl(null, [Validators.required]),
      // name: new FormControl(null, [Validators.required]),
      // name: new FormControl(null, [Validators.required]),
    
    });

   
  }

  ngOnInit(): void {
 
  }




addEmployees()
{ 
  this.isLoading = true;
  this.api.addEmpployee(this.addEmployee.value).subscribe(resp => {
    this.isLoading = false;
    this.toastr.success(resp.message, "Add Employee  success");
   
  },
  (err) => {
    this.isLoading = false;
    this.toastr.error(err, " add failed");
  })
}

}