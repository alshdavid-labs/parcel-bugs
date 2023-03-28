import type { Foobar } from './foobar'

let resolve: (value: Foobar) => any

const promise = new Promise<Foobar>(internalResolve => {
  resolve = internalResolve
})

export function getFoobarAsync(): Promise<Foobar> {
  return promise
}

export function resolveFoobar(value: Foobar): void {
  resolve(value)
}
