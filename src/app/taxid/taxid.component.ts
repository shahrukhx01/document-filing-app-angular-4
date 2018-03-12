import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../_services/index';

@Component({
      templateUrl: 'taxid.component.html'
})

export class TaxIdComponent implements OnInit {
    user: any = {};
    loading = false;
    errorMessage = '';

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
        ) { }

    ngOnInit() {
    }
}
