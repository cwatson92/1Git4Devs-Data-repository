import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthService) {
   }

  ngOnInit() {
  }

   openSlideMenu(){
    console.log("clicked")
   document.getElementById('side-menu').style.width = '250px';
  //  document.getElementById('main').style.marginLeft = '250px';
  }
   closeSlideMenu(){
    document.getElementById('side-menu').style.width = '0';
    // document.getElementById('main').style.marginLeft = '0';
  }

  onLogout(){
    this.authService.logout();
  }

}
