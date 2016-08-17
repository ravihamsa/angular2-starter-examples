import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {Http, Response} from "@angular/http";
import Challenge from "../models/challenge";




let serviceUrl:string = '/api/challenges.json';


@Injectable()
export class ChallengeListService {

  constructor(private http:Http) {}

  getChallenges():Observable<Challenge[]> {
    return this.http.get(serviceUrl)
      .map(this.extractData)
      .catch(this.handleError);
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


