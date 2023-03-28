# How to run

```text
$ rm -rf dist && npx parcel build ./src/index.html

🚨 Build failed.

@parcel/core: src/bar.ts does not export 'Foo'

  /Users/dalsh/Desktop/typetest/src/index.ts:1:10
  > 1 | import { Foo } from "./bar";
  >   |          ^^^
    2 | 
    3 | console.log(Foo.Bar)
```
