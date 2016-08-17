/**
 * Created by ravi.hamsa on 8/17/16.
 */


import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Rx";
import Challenge from "../models/challenge";



@Injectable()
export class DashboardService {

  private selectedChallenge:Challenge;

  private selectionServiceSource = new Subject<Challenge>()

  selectionService = this.selectionServiceSource.asObservable();

  selectChallenge(challenge:Challenge){
    this.selectedChallenge = challenge;
    this.selectionServiceSource.next(this.selectedChallenge);
  }

}


