import { Component, ViewChild , OnInit, AfterViewChecked, AfterViewInit} from '@angular/core';
import { NgForm } from '@angular/forms';

import { Observable } from 'rxjs';
import { UserService } from '../_services';
import { UserDetailComponent } from './user-detail.component';



@Component({
  templateUrl: 'users.component.html'
})
export class UsersComponent {

private  users:Array<any>;
private data;
test1;

 public selectedUser: Observable<Object>;


     constructor(private userService: UserService) { }

     ngOnInit() {
       this.userService.getUsers()
           .subscribe(users => {
             this.users = users;
       });
       console.log(this.users);
       }

       saveUser1(frm: NgForm){
       console.log(frm.value);
       }

 onClick(item:any){
  this.selectedUser = item;
 // UserModal.show()
}

}
