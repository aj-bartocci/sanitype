import {
  ISaniString,
  IOptionalSaniString,
  ISaniNumber,
  ISaniBool
} from "./interfaces";

export function string(val: any): ISaniString;
export function optionalString(val: any): IOptionalSaniString;
export function number(val: any): ISaniNumber;
export function bool(val: any): ISaniBool;
