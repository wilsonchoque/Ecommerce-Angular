import { Component, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  
  slides = [
    {img: "https://i.ibb.co/qkz9Jm1/slideshow1-1.jpg"},
    {img: "https://i.ibb.co/3CDH97F/slideshow1-2.jpg"},
    {img: "https://i.ibb.co/fFCkHPt/slideshow1-3.jpg"}
  ];
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1 , "infinity":true ,"fade":true ,"autoplay":true, "autoplaySpeed": 3000, "dots":true ,'nextArrow':false, "prevArrow":false };
 
  @ViewChild('slickModal') slickModal!:SlickCarouselComponent;
 
}
