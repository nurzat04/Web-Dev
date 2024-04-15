import { Component, OnInit  } from '@angular/core';
import { CompanyService } from '../company.service';
import { VacancyService } from '../vacancy.service';

export interface Company{
  id: number;
  name: string;
  description: string;
  city: string;
  address: string;
}

export interface Vacancy{
  id: number;
  name: string;
  description: string;
  salary: number;
  company: string;
}
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
  providers: [CompanyService, VacancyService]
})
export class CompanyComponent implements OnInit {
  companys: Company[] = [];
  selectedCompany: Company | null = null;
  vacancys: Vacancy[] = [];

  constructor(private companyService: CompanyService, private vacancyService: VacancyService) { }

  ngOnInit(): void {
    this.getCompanies();
  }

  selectCompany(company: Company): void {
    this.selectedCompany = company;
    this.getVacanciesByCompany(company.id);
  }

  getCompanies(): void {
    this.companyService.getCompanies()
      .subscribe(
        (data) => {
          this.companys = data;
        },
        (error) => {
          alert("Error fetching companies.");
        }
      );
  }

  getVacanciesByCompany(companyId: number): void {
    this.vacancyService.getVacanciesByCompany(companyId)
      .subscribe(
        (data) => {
          this.vacancys = data;
        },
        (error) => {
          alert("Error fetching vacancies.");
        }
      );
  }
}
