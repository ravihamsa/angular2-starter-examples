import { Component } from '@angular/core';
import '../../public/css/styles.css';

import Header from './components/header/header.component';
import ProjectList from './components/project-list/project-list';
import ChallengeList from "./components/challenge-list/challenge-list";
import SelectedChallenge from "./components/challenge-details/challenge-details";
import {DashboardService} from "./stores/dashboard.service";
import Challenge from "./models/challenge";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  directives:[Header, ProjectList, ChallengeList, SelectedChallenge],
  providers:[DashboardService]
})
export class AppComponent {

  selectedChallenge:Challenge

  constructor(private dashboardService:DashboardService) {

  }

  ngOnInit() {
    let self = this;
    this.dashboardService.selectionService.subscribe(function(challenge){
      self.selectedChallenge = challenge;
    })
  }
}
