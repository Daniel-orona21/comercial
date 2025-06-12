import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterModule, CommonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  isNavCollapsed = false;
  showUserMenu = false;
  notificationCount = 3;

  constructor(private router: Router, private eRef: ElementRef) {}

  toggleNav() {
    this.isNavCollapsed = !this.isNavCollapsed;
  }

  toggleUserMenu() {
    this.showUserMenu = !this.showUserMenu;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (
      this.showUserMenu &&
      !this.eRef.nativeElement.querySelector('.user-menu')?.contains(target) &&
      !this.eRef.nativeElement.querySelector('.arrow-user-menu')?.contains(target)
    ) {
      this.showUserMenu = false;
    }
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
