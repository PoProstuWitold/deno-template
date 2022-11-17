import * as asserts from 'testing/asserts.ts'

import { getPetByKind, myPets } from '/src/main.ts'
import { PetKind } from '/src/types.ts'


Deno.test('Pets functions', async (t) => {
	await t.step('When providing', async (t) => {
		await t.step('dog kind', async (t) => {
			await t.step('should return array of length 2', async () => {
				asserts.assertEquals(getPetByKind(PetKind.Dog, myPets).length, 2)
			})
		}),
		await t.step('cat kind', async (t) => {
			await t.step('should return array of length 1', async () => {
				asserts.assertEquals(getPetByKind(PetKind.Cat, myPets).length, 1)
			})
		})
	})
})