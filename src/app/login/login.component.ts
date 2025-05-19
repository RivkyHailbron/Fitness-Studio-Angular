import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User, UserService } from '../user.service';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    constructor(private fb: FormBuilder, private userService: UserService) {
        this.loginForm = this.fb.group({
            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }
    users: User[] = [];
    ngOnInit() {
        this.users = this.userService.getUsers();
    }
    

    onSubmit() {
        if (this.loginForm.valid) {
            const { username, password } = this.loginForm.value;
            const user = this.users.find(user => user.name === username && user.password === password);
            if (user) {
                if (user.role === 'מזכירת רישום') {
                   window.location.href ='/registration'; 
                } else if (user.role === 'מורה להתעמלות') {
                    window.location.href = '/teacher';
                }
            } else {
                alert('Invalid username or password');
            }

        }
    }
}
