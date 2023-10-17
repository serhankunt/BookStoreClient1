import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  count:number = 0 ;

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en'); // Set the default language
  }

  switchLanguage(event:any) {
    //console.log(event.target.value);
    this.translate.use(event.target.value);
  }
}
