import { config } from 'config'
import { green } from 'fmt/colors.ts'

import { Pet, PetKind, PetStatus } from './types.ts'


const configData = await config()

console.log(green(`My favorite dog is ${configData['dog']}`));

export const myPets: Pet[] = [
	{
		name: 'Harry',
		kind: PetKind.Dog,
		breed: 'English Cocker Spaniel',
		status: PetStatus.Deceased,
		age: 12
	},
	{
		name: 'Sara',
		kind: PetKind.Dog,
		breed: 'Half-Pekingese',
		status: PetStatus.Alive,
		age: 2
	},
	{
		name: 'Yuki',
		kind: PetKind.Cat,
		breed: 'European Shorthair',
		status: PetStatus.Alive,
		age: 2
	}
]

export const getPetByKind = (petKind: PetKind, pets: Pet[]): Pet[] => {
	const matchingPets: Pet[] = pets.filter((pet) => pet.kind === petKind)

	console.log()

	return matchingPets
}