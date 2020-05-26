export class CustomerDto {
	id: number;
	name: string;
}

export class PreferenceDto {
	id: number;
	name: string;
}

export class CustomerDetailDto {
	id: number;
	firstName: string;
	lastName: string;
	age: number;
	gender: string;
	preference: PreferenceDto[];
}
