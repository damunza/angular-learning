import { Directive,ElementRef,Input ,HostListener } from '@angular/core';//for the one that strikes thru all we import ElementRef | for the individual strike thru we import Input and HostListener

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {

  constructor(private elem:ElementRef) {
    // this.elem.nativeElement.style.textDecoration='line-through';-strikes thru all
  }

  @HostListener("click") onClicks(){
    this.textDeco("line-through")
  }//targets the style.textDecoration and strikes through

  @HostListener("dblclick") onDoubleClicks(){
    this.textDeco("None")
  }//targests the style.textDecoration and removes the strike thru

  private textDeco(action:string){//textDeco targets an element takes a css attribute as an argument
    this.elem.nativeElement.style.textDecoration=action;

  }

}
