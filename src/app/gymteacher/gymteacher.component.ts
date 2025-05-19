import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { LessonDetailsComponent } from '../lesson-details/lesson-details.component';
import { MatDialog } from '@angular/material/dialog';


export interface Lesson {
  name: string;
  teacherName: string;
  numOfLessons: number;
  startDate: string;
  price: number;
  day: string;
  time: string;
}

@Component({
  selector: 'app-gymteacher',
  standalone: true,
  imports: [CommonModule, MatGridListModule, MatCardModule, LessonDetailsComponent],
  templateUrl: './gymteacher.component.html',
  styleUrl: './gymteacher.component.css'
})
export class GymteacherComponent {
  constructor(private dialog: MatDialog){}
  selectedLesson !: Lesson; // משתנה לאחסון השיעור הנבחר
  lessons: Lesson[] = [
    {
      name: "שיעור יוגה",
      teacherName: "דנה לוי",
      numOfLessons: 10,
      startDate: "2025-11-01",
      price: 150,
      day: "ראשון",
      time: "18:00"
    },
    {
      name: "שיעור פילאטיס",
      teacherName: "אורית כהן",
      numOfLessons: 8,
      startDate: "2025-06-02",
      price: 120,
      day: "שני",
      time: "19:00"
    },
    {
      name: "שיעור ריקוד",
      teacherName: "שרה מזרחי",
      numOfLessons: 10,
      startDate: "2025-05-03",
      price: 140,
      day: "שלישי",
      time: "20:00"
    },
    {
      name: "שיעור קיקבוקס",
      teacherName: "דנה לוי",
      numOfLessons: 10,
      startDate: "2025-07-04",
      price: 160,
      day: "רביעי",
      time: "17:00"
    }, {
      name: "שיעור ריצה",
      teacherName: "שרה מזרחי",
      numOfLessons: 10,
      startDate: "2023-11-09",
      price: 160,
      day: "שלישי",
      time: "12:00"
    },
    {
      name: "שיעור אירובי",
      teacherName: "אורית כהן",
      numOfLessons: 6,
      startDate: "2025-11-05",
      price: 130,
      day: "חמישי",
      time: "18:30"
    },
    {
      name: "שיעור כוח",
      teacherName: "שרה מזרחי",
      numOfLessons: 8,
      startDate: "2025-11-06",
      price: 140,
      day: "שישי",
      time: "19:30"
    },
    {
      name: "שיעור מתיחות",
      teacherName: "אורית כהן",
      numOfLessons: 10,
      startDate: "2026-01-07",
      price: 120,
      day: "ראשון",
      time: "10:00"
    },
    {
      name: "שיעור טניס",
      teacherName: "דנה לוי",
      numOfLessons: 10,
      startDate: "2025-02-08",
      price: 180,
      day: "שני",
      time: "11:00"
    },
    {
      name: "שיעור ניהול זמן",
      teacherName: "רונית כהן",
      numOfLessons: 10,
      startDate: "2023-11-10",
      price: 150,
      day: "רביעי",
      time: "13:00"
    }
  ];

  isStarted(startDate: string): boolean {
    const today = new Date();
    const start = new Date(startDate);
    return start <= today;
  }

  goToLessonDetails(lesson: any) {
    this.dialog.open(LessonDetailsComponent, {
      data: { lesson: lesson }
    });
  }
  closeDetails() {
    this.dialog.closeAll();
  }

 
}
