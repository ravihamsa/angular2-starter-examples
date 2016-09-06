/**
 * Created by ravi.hamsa on 8/13/16.
 */
import {Component} from '@angular/core';
import {ProjectListService} from "../../stores/project-list";
import Project from '../../models/project';
import {Observable} from "rxjs/Rx";
import {FetchJsonPipe} from '../../pipes/FetchJsonPipe'
import {LoaderDirective, Loader, TestComponent} from "../../directives/LoaderDirective";


@Component({
  moduleId: module.id,
  selector: 'project-list',
  templateUrl: 'template.html',
  styleUrls: ['styles.css'],
  providers: [ProjectListService],
  pipes: [FetchJsonPipe],
  directives:[LoaderDirective, TestComponent]
})
export default class ProjectList {
  projects:Observable<Project[]>

  projectList:Project[];

  constructor(private projectService:ProjectListService) {

  }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
    this.projects.subscribe(list => this.projectList=list)
  }
}
