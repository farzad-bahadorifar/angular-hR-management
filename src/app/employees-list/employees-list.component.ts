import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-employees-list',
  standalone: true,
  imports: [],
  templateUrl: './employees-list.component.html',
  styleUrl: './employees-list.component.css',
})
export class EmployeesListComponent {
  employees: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getEmployees().subscribe((data) => {
      this.employees = data;
    });
  }
}
