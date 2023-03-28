import { resolveFoobar } from './foobar-async'
import { Foobar } from './foobar'

export function initFoobar() {
  if (!(window as any).foo) {
    const f = new Foobar()
    ;(window as any).foo = f
    resolveFoobar(f)
  }
  return true
}

export function getFoobarSync(): Foobar | undefined {
  return (window as any).foo
}