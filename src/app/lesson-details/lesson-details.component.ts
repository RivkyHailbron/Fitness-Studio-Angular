import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { Lesson } from '../gymteacher/gymteacher.component';
import { NgIf } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-lesson-details',
  standalone: true,
  imports: [NgIf],
  templateUrl: './lesson-details.component.html',
  styleUrl: './lesson-details.component.css'
})
export class LessonDetailsComponent {
  constructor(
    public dialogRef: MatDialogRef<LessonDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  close(): void {
    this.dialogRef.close();
  }
}

