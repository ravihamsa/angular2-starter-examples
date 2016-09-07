/**
 * Created by ravi.hamsa on 9/6/16.
 */
import {
  Directive, Input, ChangeDetectorRef, Component, ComponentResolver, ComponentMetadata,
  ComponentFactory, ComponentFactoryResolver, DynamicComponentLoader, ChangeDetectionStrategy, OnInit
} from '@angular/core';
import {TemplateRef, ViewContainerRef} from '@angular/core';
import {Observable} from "rxjs";


@Component({
  moduleId: module.id,
  selector: 'loader',
  template: '<h1>loading</h1>'
})
export class Loader{

}


@Component({
  moduleId: module.id,
  selector: 'test-comp',
  template: '<h1>Test Component</h1>'
})
export class TestComponent implements OnInit{

  constructor(){
    debugger;
  }

  ngOnInit(){
    debugger;
  }
}






@Directive({
  selector: '[myLoader]'
})
export class LoaderDirective {

  private prevObject: any = null;

  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef, private cmpResolver: ComponentResolver, private ref: ChangeDetectorRef) {
  }




  @Input()
  set myLoader(obj:any) {
    if (obj) {
      this.prevObject = obj;
      this.viewContainer.clear();
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.cmpResolver.resolveComponent(Loader)
        .then((factory:ComponentFactory<Loader>)=>{
          this.viewContainer.createComponent(factory);
        })
    }
  }
}
