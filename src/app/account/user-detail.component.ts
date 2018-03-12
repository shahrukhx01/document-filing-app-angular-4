import { Component, ViewChild , Input, OnInit, ViewContainerRef} from '@angular/core';
import { NgForm } from '@angular/forms';

import { ModalDirective } from 'ng2-bootstrap/modal';



@Component({
  selector: 'user-detail',
  templateUrl: 'user-detail.component.html',
  exportAs: 'child'

})
export class UserDetailComponent implements OnInit {
  @Input('user') selectedUser: any;
  selecteditem : any;

  @ViewChild('UserModal') public UserModal: ModalDirective;
  @ViewChild('dangerModal') public dangerModal: ModalDirective;

    ngOnInit() { }

    public show( variant ):void {
           this.selecteditem = variant;
           this.UserModal.show();
       }


       public showd( variant ):void {
              console.log( variant );
              this.dangerModal.show();
          }

      //    saveUser(frm: NgForm){
        //  console.log(frm.value);
        //  }

}
