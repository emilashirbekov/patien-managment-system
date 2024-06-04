export interface LoginSchema extends ProfileData {
	username: string
	first_name: string
	last_name: string
	email: string
	password: string
	password2: string
}

export interface ProfileData {
	age: string
	address: string
	mobile: string
}
