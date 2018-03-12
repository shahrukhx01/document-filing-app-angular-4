import { Component, ViewChild , OnInit, AfterViewChecked, AfterViewInit} from '@angular/core';
import { NgForm } from '@angular/forms';

import { Observable } from 'rxjs';
import { UserService } from '../_services';
import { UserDetailComponent } from './user-detail.component';

@Component({
  templateUrl: 'account.component.html',

})
export class AccountComponent implements OnInit {
 private  users:Array<any>;
 private selecteditem;


  public selectedUser: Observable<Object>;


      constructor(private userService: UserService) { }

      ngOnInit() {
        this.userService.getUsers()
            .subscribe(users => {
              this.users = users;
        });
       if(this.users)  this.selecteditem = this.users[1];
        }


  saveUser(frm: NgForm){
  console.log(frm.value);
  }

  onSubmit(frm: NgForm) {
      console.log(frm.value);
  }

  onClick(item:any){
   this.selectedUser = item;
  // UserModal.show()
 }


}
