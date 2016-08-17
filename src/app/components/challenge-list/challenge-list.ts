/**
 * Created by ravi.hamsa on 8/13/16.
 */
import {Component} from '@angular/core';
import Challenge from '../../models/challenge';
import {Observable} from "rxjs/Rx";
import {ChallengeListService} from "../../stores/challenge-list";
import {DashboardService} from "../../stores/dashboard.service";



@Component({
  moduleId: module.id,
  selector: 'challenge-list',
  templateUrl: 'template.html',
  styleUrls: ['styles.css'],
  providers: [ChallengeListService]
})
export default class ChallengeList {
  challenges:Observable<Challenge[]>


  constructor(private challengeService:ChallengeListService, private dashboardService:DashboardService) {

  }

  ngOnInit() {
    this.challenges = this.challengeService.getChallenges();
  }

  challengeClick(challenge:Challenge) {
    this.dashboardService.selectChallenge(challenge);
  }
}
