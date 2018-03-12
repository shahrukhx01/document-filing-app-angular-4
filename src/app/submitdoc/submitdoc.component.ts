import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { SubmitDocService } from '../_services';
import { Uploader } from 'angular2-http-file-upload';

@Component({
      templateUrl: 'submitdoc.component.html'
})

export class SubmitDocComponent implements OnInit {
    isChecked = true;
    user: any = {};
    document: any = {};
    bussinessInformation: any = {};
    additionalInformation: any = {};
    representativeInformation: any = {};
    otherBussinessMailingInformation: any = {};
    taxIdRecipientInformation: any = {};
    personalInformation: any = {};
    entityStartMonth = '01';
    entityStartYear = '2018';
    entityClosingMonth = '1';
    errorMessage = '';
    successMessage = '';
    page = '';
    jointVenture = false;
    agreement = false;
    llcInformation: any = {};
    trustInformation: any= {};

    pageHeadings: any = {
      SOLE_PROPRIETOR: {
        heading1: 'Sole Proprietor / Individual',
        heading2: 'PERSONAL INFORMATION',
        dateFounded: 'Date Business Started or Acquired',
        title: 'Title',
        bussinessInfo: 'BUSINESS INFORMATION (NO PO BOXES)'
      },
      LIMITED_LIABILITY_COMPANY: {
        heading1: 'LIMITED LIABILITY COMPANY',
        heading2: 'MANAGING MEMBER INFORMATION',
        dateFounded: 'Date Business Started or Acquired',
        title: 'Title',
        bussinessInfo: 'Business INFORMATION'
      },
      TRUST: {
        heading1: 'TRUST',
        heading2: 'RESPONSIBLE PARTY INFORMATION',
        dateFounded: 'Date Business Started or Acquired',
        title: 'Title',
        bussinessInfo: 'TRUSTEE ADDRESS (NO PO BOXES)',
        executorInfo: 'TRUSTEE INFORMATION'
      },
      ESTATE_DECEASED_INDIVIDUAL: {
        heading1: 'ESTATE OF DECEASED INDIVIDUAL',
        heading2: 'INFORMATION ON THE DECEASED INDIVIDUAL',
        dateFounded: 'Date of Death',
        title: 'Title',
        bussinessInfo: 'EXECUTOR/PERSONAL REPRESENTATIVE ADDRESS (NO PO BOXES)',
        executorInfo: 'EXECUTOR/PERSONAL REPRESENTATIVE'
      },
      NON_PROFIT_ORGANIZATION: {
        heading1: 'NON-PROFIT ORGANIZATION',
        heading2: 'PERSONAL INFORMATION',
        dateFounded: 'Date Non-Profit Funded',
        title: 'Title',
        businessName: 'Business Name',
        bussinessInfo: 'Business INFORMATION'
      },
      CORPORATION: {
        heading1: 'CORPORATION',
        heading2: 'MANAGING MEMBER INFORMATION',
        dateFounded: 'Date Corporation Funded',
        title: 'Title with Corporation',
        businessName: 'Corporation Name',
        bussinessInfo: 'CORPORATION INFORMATION'
      },
      S_CORPORATION: {
        heading1: 'Business',
        heading2: 'MANAGING MEMBER INFORMATION',
        dateFounded: 'Date Business Funded',
        title: 'Title with Corporation',
        businessName: 'Corporation Name',
        bussinessInfo: 'S-CORPORATION INFORMATION'
      },
      PERSONAL_SERVICE_CORPORATION: {
        heading1: 'PERSONAL SERVICE CORPORATION',
        heading2: 'MANAGING MEMBER INFORMATION',
        dateFounded: 'Date Personal Service Corporation Funded',
        title: 'Title',
        bussinessInfo: 'PERSONAL SERVICE CORPORATION INFORMATION',
        businessName: 'Personal Service Corporation Name'
      },
      CHURCH_CONTROLLED_ORGANIZATION: {
        heading1: 'CHURCH CONTROLLED ORGANIZATION',
        heading2: 'RESPONSIBLE PARTY INFORMATION',
        dateFounded: 'Date Business Started or Acquired',
        title: 'Title with Non-Profit',
        bussinessInfo: 'BUSINESS INFORMATION (NO PO BOXES)',
        businessName: 'Business Name'
      },
      PARTNERSHIP: {
        heading1: 'PARTNERSHIP',
        heading2: 'GENERAL PARTNER INFORMATION',
        dateFounded: 'Date Business Started or Acquired',
        title: 'Title',
        bussinessInfo: 'Business INFORMATION'
      }
    };

    constructor(
        public uploaderService: Uploader,
        private activatedRoute: ActivatedRoute,
        private submitDocService: SubmitDocService) { }
    ngOnInit() {
      this.activatedRoute.queryParams.subscribe((params: Params) => {
        this.additionalInformation.highwayMotorVehicle = false;
        this.additionalInformation.gambling = false;
        this.additionalInformation.form720 = false;
        this.additionalInformation.manufactureAlcohol = false;
        this.additionalInformation.receiveFormsW2 = false;
        this.additionalInformation.expectEmploymentTaxLiability = false;
        this.additionalInformation.receiveApplyForEIN = false;
        let page = params['page'];
        this.page = page;
        console.log(this.page);
       });
    }


    saveDocument() {


      if(!this.agreement){
        alert("You must agree to the terms of service.");
        return false;
      }
      if(this.personalInformation.socialSecurity != this.personalInformation.verifySocialSecurity){
        alert("Social Security and Verify Social Security values should be same");
        return false;
      }
      if(this.taxIdRecipientInformation.receipientEmailEIN != this.taxIdRecipientInformation.confirmReceipientEmailEIN){
        alert("Receipient Email EIN and Confirm Receipient Email EIN values should be same");
        return false;
      }
      this.document.personalInformation = this.personalInformation;
      this.document.bussinessInformation = this.bussinessInformation;
      this.document.otherBussinessMailingInformation = this.otherBussinessMailingInformation;
      this.document.entityStartDate = this.entityStartYear+"-"+this.entityStartMonth+"-01";
      this.document.entityAccountingClosingMonth = this.entityClosingMonth;
      this.document.filingDocumentType = this.page;
      this.document.additionalInformation = this.additionalInformation;
      this.document.taxIdRecipientInformation = this.taxIdRecipientInformation;
      this.document.llcInformation = this.llcInformation;
      this.document.jointVenture = this.jointVenture;
      this.document.trustInformation = this.trustInformation;
      this.document.representativeInformation = this.representativeInformation;
      console.log(this.document);
      this.submitDocService.saveDocument(this.document)
              .subscribe(
                      result => {
                          this.successMessage = 'Information Saved Sucessfully!';
                      },
              error => this.errorMessage = error,
              )
    }

}
