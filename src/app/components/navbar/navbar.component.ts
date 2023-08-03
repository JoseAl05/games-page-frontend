import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  currentRoute: boolean = false;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(){
    console.log(this.route.url);
  }
}
