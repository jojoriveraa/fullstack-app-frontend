import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  message = '';
  name = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
    this.message = `Welcome ${this.name}.`;
  }
}
