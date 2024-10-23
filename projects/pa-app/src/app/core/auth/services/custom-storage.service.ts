import { Injectable } from '@angular/core';
import { AbstractSecurityStorage } from 'angular-auth-oidc-client';

@Injectable({
  providedIn: 'root',
})
export class CustomStorageService implements AbstractSecurityStorage {
  read(key: string): any {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  write(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  remove(key: string): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }
}
