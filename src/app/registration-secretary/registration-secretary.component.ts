import { Component } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular'; // Angular Data Grid Component
import { ColDef } from 'ag-grid-community'; // Column Definition Interface
import { ModuleRegistry } from 'ag-grid-community';
import { ClientSideRowModelModule } from 'ag-grid-community';

ModuleRegistry.registerModules([ClientSideRowModelModule]);
export interface CourseRegistration {
    firstName: string;
    lastName: string;
    phone: string;
    id: string;
    lessonName: string;
    price: number;
    isPaid: boolean;
};

@Component({
    selector: 'app-registration-secretary',
    standalone: true,
    imports: [AgGridModule],
    templateUrl: './registration-secretary.component.html',
    styleUrls: ['./registration-secretary.component.css']
})
export class RegistrationSecretaryComponent {
    gridOptions = {
        enableRtl: true,
   

    }
    paginationAutoPageSize = true;

    defaultColDef = {
        sortable: true,
        filter: true,
        resizable: true,
    };

    colDefs: ColDef[] = [
        { field: "firstName", headerName: "שם פרטי" },
        { field: "lastName", headerName: "שם משפחה" },
        { field: "phone", headerName: "טלפון" },
        { field: "id", headerName: "תעודת זהות" },
        { field: "lessonName", headerName: "שם השיעור" },
        { field: "price", headerName: "מחיר" },
        {
            field: "isPaid", headerName: "שולם",
            cellRenderer: (params: any) => {
                return params.data.isPaid ? 'כן' : 'לא';
            }
        },
        {
            field: "details", headerName: "פרטים",
            cellRenderer: (params: any) => {
                const button = document.createElement('button');
                button.innerText = 'Details';
                button.addEventListener('click', () => {
                    alert(`פרטי ההרשמה: \nשם פרטי: ${params.data.firstName} \nשם משפחה: ${params.data.lastName} \nטלפון: ${params.data.phone} \nתעודת זהות: ${params.data.id} \nשם השיעור: ${params.data.lessonName} \nמחיר: ${params.data.price} \nשולם: ${params.data.isPaid ? 'כן' : 'לא'}`);
                });
                return button;
            }
        }
    ];
    rowData: CourseRegistration[] = [
        {
            firstName: "מאיה",
            lastName: "כהן",
            phone: "050-1234567",
            id: "1",
            lessonName: "שיעור יוגה",
            price: 150,
            isPaid: true
        },
        {
            firstName: "יוסי",
            lastName: "לוי",
            phone: "050-7654321",
            id: "2",
            lessonName: "שיעור פילאטיס",
            price: 120,
            isPaid: false
        },
        {
            firstName: "רוני",
            lastName: "מזרחי",
            phone: "050-1112233",
            id: "3",
            lessonName: "שיעור ריקוד",
            price: 140,
            isPaid: true
        },
        {
            firstName: "אורן",
            lastName: "שמש",
            phone: "050-4445566",
            id: "4",
            lessonName: "שיעור קיקבוקס",
            price: 160,
            isPaid: false
        },
        {
            firstName: "תמר",
            lastName: "רבין",
            phone: "050-7778899",
            id: "5",
            lessonName: "שיעור ריצה",
            price: 160,
            isPaid: true
        },
        {
            firstName: "דנה",
            lastName: "אברהם",
            phone: "050-2223344",
            id: "6",
            lessonName: "שיעור אירובי",
            price: 130,
            isPaid: false
        },
        {
            firstName: "עומר",
            lastName: "ברק",
            phone: "050-3334455",
            id: "7",
            lessonName: "שיעור כוח",
            price: 140,
            isPaid: true
        },
        {
            firstName: "נועה",
            lastName: "גולן",
            phone: "050-8889900",
            id: "8",
            lessonName: "שיעור מתיחות",
            price: 120,
            isPaid: false
        },
        {
            firstName: "אלון",
            lastName: "דוידוב",
            phone: "050-6667788",
            id: "9",
            lessonName: "שיעור טניס",
            price: 180,
            isPaid: true
        },
        {
            firstName: "מיה",
            lastName: "נחמני",
            phone: "050-5556677",
            id: "10",
            lessonName: "שיעור ניהול זמן",
            price: 150,
            isPaid: false
        }
    ]

}
