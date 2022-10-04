import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-graphlayout',
  templateUrl: './graphlayout.component.html',
  styleUrls: ['./graphlayout.component.css']
})
export class GraphlayoutComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.route.navigate(['principal']);
    }, 500);
      
  }

}
