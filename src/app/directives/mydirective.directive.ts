import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appMydirective]',
  exportAs: "myDirective" // https://medium.com/@matteoluigitommasi/angular-linking-a-template-variable-to-a-directive-18990c3ad0e5
})
export class MydirectiveDirective implements OnInit {

  name: string = 'Hello Directive';

  constructor(private el: ElementRef) { } // https://www.tektutorialshub.com/angular/elementref-in-angular/

  ngOnInit(): void {
    console.log(this.el.nativeElement);
  }


}
