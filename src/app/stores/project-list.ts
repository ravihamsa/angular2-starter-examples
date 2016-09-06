import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {Http, Response} from "@angular/http";
import Project from '../models/project';




let serviceUrl:string = '/api/projects.json';


@Injectable()
export class ProjectListService {

  constructor(private http:Http) {}

  getProjects():Observable<Project[]> {
    return this.http.get(serviceUrl)
      .map(this.extractData)
      .catch(this.handleError).cache(1);
  }

  private extractData(res:Response) {
    let body = res.json();
    return body;
  }

  private handleError(error:any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return Observable.throw(errMsg);
  }
}


