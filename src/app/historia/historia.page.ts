import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.page.html',
  styleUrls: ['./historia.page.scss'],
})
export class HistoriaPage implements OnInit {
  constructor(private router: Router) {}

  segmentChanged(event:CustomEvent) {
    const selectedPage = event.detail.value;  // Get the selected page's value
    this.router.navigate([selectedPage]);  // Use the router to navigate to the selected page
  }
  ngOnInit() {
  }
  activeSegment: string = 'tab1';

  segmentChanged1(ev: CustomEvent) {
    this.activeSegment = ev.detail.value;
  }

}
