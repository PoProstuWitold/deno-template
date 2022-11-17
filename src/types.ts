export interface Pet {
	name: string
	kind: PetKind
	breed: string
	status: PetStatus
	age: number
}

export enum PetKind {
	Dog = 'Dog',
	Cat = 'Cat'
}

export enum PetStatus {
	Alive = 'Alive',
	Deceased = 'Deceased'
}