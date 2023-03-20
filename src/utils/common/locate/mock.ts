import type { Locate } from './domain'

const areas = [...shipAreas]
export function mockLocate(): Locate {
  const area = choice(areas)
  return {
    code: area.code,
    alias: fk.random.word(),
    latitude: parseInt(fk.address.latitude()),
    longitude: parseInt(fk.address.longitude()),
    detailLocate: fk.address.streetAddress(true),
    firstName: fk.name.firstName(),
    lastName: fk.name.lastName(),
    phone: fk.phone.number(),
    postalCode: fk.address.zipCode(),
    country: fk.address.country(),
    city: area.city,
    county: area.county,
    town: area.town,
    locateType: fk.helpers.arrayElement([LocateType.ETC, LocateType.SHOP, LocateType.STORAGE])
  }
}
