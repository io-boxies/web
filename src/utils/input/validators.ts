export const isEmail = (str: string) =>
  str ? /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(str) : false;

export const isPassword = (str: string) =>
  str ? /(?=.*\d)(?=.*[A-Za-z]).{6,}/.test(str) : false;
export const isUuid = (str: string) =>
  str
    ? /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi.test(
        str
      )
    : false;
export const okNullPassword = (str: string) => {
  if (!str) return true;
  return isPassword(str);
};

export const length = (str: string | Array<string | number>, len = 1) =>
  str ? str.length >= len : false;
export const lengthEqual = (str: string | Array<string | number>, len = 1) =>
  str ? str.length === len : false;

export const checkInRange = (x: number, min: number, max: number) =>
  x !== null && x >= min && x <= max;

export const checkNotNull = (x: any) => x !== null && x !== undefined;

export const isObject = (x: any) => typeof x === "object" && !Array.isArray(x);

export const isDigitStr = (val: any) => /^\d+$/.test(val);
