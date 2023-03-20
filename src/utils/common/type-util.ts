export function enumToArr<T>(e: T): T[keyof T][] {
  const enumItems: T[keyof T][] = []
  for (const item in e) {
    // console.log(item, e[item], ORDER_TYPE.STANDARD == e[item])
    if (isNaN(Number(item))) {
      enumItems.push(e[item])
    }
  }

  return enumItems
}
