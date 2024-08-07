import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'carousel',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  currentImage = 1;
  imagelist = [
    { id: 1, url: 'https://picsum.photos/200/200?random=1' },
    { id: 2, url: 'https://picsum.photos/200/200?random=2' },
    { id: 3, url: 'https://picsum.photos/200/200?random=3' },
    { id: 4, url: 'https://picsum.photos/200/200?random=4' },
    { id: 5, url: 'https://picsum.photos/200/200?random=5' },
    { id: 6, url: 'https://picsum.photos/200/200?random=6' },
    { id: 7, url: 'https://picsum.photos/200/200?random=7' },
    { id: 8, url: 'https://picsum.photos/200/200?random=8' },
    { id: 9, url: 'https://picsum.photos/200/200?random=9' },
    { id: 10, url: 'https://picsum.photos/200/200?random=10' },
  ];

  showNext() {
    const hideSlide = document.getElementById(this.currentImage.toString());
    if (hideSlide) {
      hideSlide.style.display = 'none';
      this.currentImage++;
    }
  }

  showPrev() {
    this.currentImage--;
    const showSlide = document.getElementById(this.currentImage.toString());
    if (showSlide) {
      showSlide.style.display = 'flex';
    }
  }
}
