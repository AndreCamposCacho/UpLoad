import { Component } from '@angular/core';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-up-load-logo',
  templateUrl: './up-load-logo.component.html',
  styleUrls: ['./up-load-logo.component.scss']
})
export class UpLoadLogoComponent {

  //Icons
  hamburgerIcon = faBars;
  closeIcon = faXmark;

  //Selectors
  upLoadLogo: any = document.querySelector("#hamburger")

  //States
  openHamburger: boolean = false;
  mobile: boolean = true;


  //Functions
  toggleHamburger(): void {
    this.openHamburger = !this.openHamburger;

    console.log("openHamburger is " + this.openHamburger);
  }

  mobileCheck(): void {
    console.log("Is a mobile? " + this.mobile);
  }

}
