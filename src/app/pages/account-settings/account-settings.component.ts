import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {
  linkElement = document.querySelector('#theme') as HTMLLinkElement;
  constructor(private render: Renderer2, private elRef: ElementRef) { }

  ngOnInit(): void {
  }

  changeTheme(theme: string): void {
    this.render.setAttribute(this.linkElement, 'href', `./assets/css/colors/${theme}.css`)
    this.addRemoveCheckColor(theme)
  }

  addRemoveCheckColor(theme: string): void {
    const elemComponent = this.elRef.nativeElement as HTMLElement;
    const selectors = elemComponent.querySelectorAll('.selector');

    selectors.forEach((selector) => {
      const elementSelector = selector as HTMLElement;
      const dataTheme = elementSelector.getAttribute('data-theme');
      if (dataTheme !== theme) {
        this.render.removeClass(elementSelector, 'working');
        return selector
      }
      this.render.addClass(elementSelector, 'working');
      return selector
    })
  }

}
