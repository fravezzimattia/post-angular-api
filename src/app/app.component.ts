import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest, forkJoin, empty } from 'rxjs';
import { take, switchMap } from 'rxjs/operators';

import { CustomerService } from './services/customer.service';

import { PreferenceService } from './services/preference.service';
import { CustomerDto, CustomerDetailDto, PreferenceDto } from './models/customer.dto';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'clientApi';

	public genderPreference: Observable<PreferenceDto[]>;
	public customers: Observable<CustomerDto[]>;

	public customerDetail: CustomerDetailDto;

	constructor(
		protected customerService: CustomerService,
		protected preferenceService: PreferenceService
	) { }

	ngOnInit(): void {
		this.customers = this.customerService.getList();
	}

	public showCustomerInformations(id: number) {
		forkJoin(
			this.customerService.getDetail(id),
			this.customerService.getPreference(id)
		)
			.subscribe(([userDetail, userPreference]) => {
				this.customerDetail = userDetail;
				this.customerDetail.preference = userPreference;
			})
	}

	public showGenderPreferenceByCustomerId(id: number) {
		this.genderPreference = this.customerService.getDetail(id)
			.pipe(switchMap(customer => this.getGenderPreference(customer)));

	}

	private getGenderPreference(customer: CustomerDetailDto): Observable<PreferenceDto[]> {
		if (!customer || !customer.gender) {
			return empty();
		}
		return this.preferenceService.getByGender(customer.gender);
	}

	public showGenderPreferenceByCustomerIdFail(id: number) {
		this.customerService.getDetail(id)
			.subscribe(customer => this.getGenderPreference(customer)
				.subscribe(
					preference => console.log(preference)
				)
			)
	}

}
