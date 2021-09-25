import { MetadataKeys } from "./MetadataKeys";

export function bodyValidator(...keys: string[]) {
  return function (target: any, key: string) {
    Reflect.defineMetadata(MetadataKeys.validator, keys, target, key);
  };
}
