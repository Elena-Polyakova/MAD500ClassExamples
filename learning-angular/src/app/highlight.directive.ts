import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  @Input() color?: string;

  constructor(private elm: ElementRef) {
  }

  ngOnInit(): void {
  }
  @HostListener('click') onClick() {
    this.higlightText(this.color);
  }

  higlightText(color?: string): void {
    this.elm.nativeElement.style.backgroundColor = color || "yellow";
  }

}
