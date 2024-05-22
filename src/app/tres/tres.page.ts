import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import Swiper from 'swiper';

@Component({
  selector: 'app-tres',
  templateUrl: './tres.page.html',
  styleUrls: ['./tres.page.scss'],
})
export class TresPage implements OnInit {
  constructor(private router: Router) {}
  @ViewChild("swiper")
  swiperRef:ElementRef   | undefined;
  swiper?:Swiper;
  
  segmentChanged(event:CustomEvent) {
    const selectedPage = event.detail.value;  // Get the selected page's value
    this.router.navigate([selectedPage]);  // Use the router to navigate to the selected page
  }
  swiperReady(){

    this.swiper=this.swiperRef?.nativeElement.swiper;
  
  }
  ngOnInit() {
  }

}
