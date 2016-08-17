/**
 * Created by ravi.hamsa on 8/13/16.
 */
import {Component, Input} from '@angular/core';
import Challenge from '../../models/challenge';
import {Observable} from "rxjs/Rx";
import {DashboardService} from "../../stores/dashboard.service";



@Component({
  moduleId: module.id,
  selector: 'challenge-details',
  templateUrl: 'template.html',
  styleUrls: ['styles.css']
})
export default class SelectedChallenge {

  @Input()
  selectedChallenge:Challenge

}
