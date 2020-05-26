import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomerDto, PreferenceDto, CustomerDetailDto } from '../models/customer.dto';
import { Observable, interval } from 'rxjs';
import { map, timeInterval, delay } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class CustomerService {
	private baseUrl = "assets\\api\\";
	private endpoint = "customer";
	private preferenceUrl = "preference";

	constructor(
		protected httpClient: HttpClient
	) { }

	public getList(): Observable<CustomerDto[]> {
		const url = `${this.baseUrl}${this.endpoint}\\get.json`;
		return this.httpClient.get(url)
			.pipe(map(list => list as CustomerDto[]));
	}

	public getDetail(id: number): Observable<CustomerDetailDto> {
		const url = `${this.baseUrl}${this.endpoint}\\${id}\\get.json`;
		return this.httpClient.get(url)
			.pipe(map(list => list as CustomerDetailDto));
	}

	public getPreference(id: number): Observable<PreferenceDto[]> {
		const url = `${this.baseUrl}${this.endpoint}\\${id}\\${this.preferenceUrl}.json`;
		return this.httpClient.get(url)
			.pipe(map(list => list as PreferenceDto[]))
	}
}
