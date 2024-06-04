export interface PatientsTypes extends ProfileData {
	id: string
	username: string
	first_name: string
	last_name: string
	password: string
	password2: string
}

interface ProfileData {
	age: string
	address: string
	mobile: string
}
