import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    constructor(private fb: FormBuilder, private http: HttpClient) {
        this.loginForm = this.fb.group({
            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }
    users :any[] = [];
    ngOnInit(): void {
        this.http.get<any[]>('assets/users.json').subscribe((data: any) => {
            this.users = data;
            console.log('🔵 נתוני המשתמשים:', this.users);
        });

    }

    onSubmit() {
        if (this.loginForm.valid) {
            console.log('🟢 התחברת בהצלחה:', this.loginForm.value);
            // אפשר להמשיך עם שליחת הנתונים לשרת
        } else {
            console.log('🔴 הטופס לא תקין');
        }
    }
}
