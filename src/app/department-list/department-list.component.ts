import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-department-list',
  standalone: true,
  imports: [],
  templateUrl: './department-list.component.html',
  styleUrl: './department-list.component.css',
})
export class DepartmentListComponent {
  departments: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getDepartments().subscribe((data) => {
      this.departments = data;
    });
  }
}
