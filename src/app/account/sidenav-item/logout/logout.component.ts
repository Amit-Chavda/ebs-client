import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomepageComponent } from '../../../homepage/homepage.component'; 

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
})
export class LogoutComponent implements OnInit {
  constructor(private router: Router, private route:ActivatedRoute){}
  
  ngOnInit(): void {
    this.router.navigate(['', '/'])
  }
}
