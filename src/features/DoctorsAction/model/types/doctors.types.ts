export interface Doctors extends ProfileData {
	username: string
	first_name: string
	last_name: string
	password: string
	password2: string
}

interface ProfileData {
	department: string
	address: string
	mobile: string
}
