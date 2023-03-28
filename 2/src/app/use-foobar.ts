Promise.all([
  import('./foobar-async'),
  Promise.resolve(),
]).then(([a, _mock]) => {
  a.getFoobarAsync().then(foobar => {
    console.log(foobar)
  })
})

export const f = ''