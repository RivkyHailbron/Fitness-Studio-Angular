import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface User {
  id: number;
  name: string;
  password: string;
  role: "מזכירת רישום" | "מורה להתעמלות";
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [
    {
      "id": 1,
      "name": "רונית כהן",
      "password": "123456",
      "role": "מזכירת רישום"
    },
    {
      "id": 2,
      "name": "דנה לוי",
      "password": "gym2024",
      "role": "מורה להתעמלות"
    },
    {
      "id": 3,
      "name": "שרה מזרחי",
      "password": "admin1",
      "role": "מזכירת רישום"
    },
    {
      "id": 4,
      "name": "אורית כהן",
      "password": "fit789",
      "role": "מורה להתעמלות"
    }];
  constructor() { }

  getUsers(): User[] {
    return this.users;
  }


}
