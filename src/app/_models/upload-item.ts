import { UploadItem }    from 'angular2-http-file-upload';

export class MyUploadItem extends UploadItem {
    constructor(file: any) {
        super();
        this.url = 'http://localhost:10080/companies/5919ac4a366c491ae420f63c/offers/591c5102680e0b27e1b77127/image';
        this.headers = { username: 'admin', password: 'admin' };
        this.file = file;
    }
}
