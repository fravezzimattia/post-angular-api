import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomerDto, PreferenceDto, CustomerDetailDto } from '../models/customer.dto';
import { Observable, interval } from 'rxjs';
import { map, timeInterval, delay } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class PreferenceService {
	private baseUrl = "assets\\api\\";
	private endpoint = "preference";

	constructor(
		protected httpClient: HttpClient
	) { }

	public getByGender(gender: string): Observable<PreferenceDto[]> {
		const url = `${this.baseUrl}${this.endpoint}\\${gender}.json`;
		return this.httpClient.get(url)
			.pipe(map(list => list as PreferenceDto[]));
	}
}
