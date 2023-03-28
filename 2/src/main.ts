setTimeout(async () => {
  console.log('getting foobar')
  await import('./app/use-foobar')
}, 0)

setTimeout(async () => {
  const { initFoobar } = await import('./app/init-foobar')
  initFoobar()
  console.log('Foobar has init')
}, 1000)
