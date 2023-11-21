import { inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";


export function getRouteParams(key: string) {
  return inject(ActivatedRoute).snapshot.params[key]
}
