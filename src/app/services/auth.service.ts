import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentRole = new BehaviorSubject<string>('');
  currentRole$ = this.currentRole.asObservable();

  constructor() {
    // Check if there's a stored role in sessionStorage
    const storedRole = sessionStorage.getItem('userRole');
    if (storedRole) {
      this.currentRole.next(storedRole);
    }
  }

  login(email: string, password: string): boolean {
    // For simulation, we'll use the email as the role
    // and password must be '123456'
    if (password === '123456') {
      const role = email.toLowerCase();
      if (role === 'admin' || role === 'director') {
        sessionStorage.setItem('userRole', role);
        this.currentRole.next(role);
        return true;
      }
    }
    return false;
  }

  logout() {
    sessionStorage.removeItem('userRole');
    this.currentRole.next('');
  }

  getCurrentRole(): string {
    return this.currentRole.value;
  }

  isAuthenticated(): boolean {
    return !!this.currentRole.value;
  }
} 