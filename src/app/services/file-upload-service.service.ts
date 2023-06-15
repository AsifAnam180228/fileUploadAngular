import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FileUploadServiceService {

  uploadApi = '';

  constructor(private httpClient: HttpClient) {

  }

  upload(file: any): Observable<any> {
    const formData = new FormData();
    formData.append("file", file, file?.name);
    return this.httpClient.post(this.uploadApi, formData)
  }
}
