# svgr-async-bug

* `git clone git@github.com:rwieruch/svgr-async-bug.git`
* `cd svgr-async-bug`
* `npm install`
* `npm run test`

## Stack Tracre

```
TypeError: Cannot read property 'async' of undefined

   6 | describe('App', () => {
   7 |   test('renders', () => {
>  8 |     const component = renderer.create(
     |                                ^
   9 |       <App />
  10 |     );
  11 |     let tree = component.toJSON();

  at svgrLoader (node_modules/@svgr/webpack/lib/index.js:17:25)
  at mountIndeterminateComponent (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:5463:13)
  at beginWork (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:5903:14)
  at performUnitOfWork (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:7949:12)
  at workLoop (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:7980:24)
  at renderRoot (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:8020:7)
  at performWorkOnRoot (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:8592:22)
  at performWork (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:8527:7)
  at performSyncWork (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:8499:3)
  at requestWork (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:8399:5)
  at scheduleWork (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:8274:11)
  at scheduleRootUpdate (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:8739:3)
  at updateContainerAtExpirationTime (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:8766:10)
  at updateContainer (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:8777:10)
  at Object.create (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:9260:5)
  at Object.<anonymous> (src/App.snapshot.js:8:32)

console.error node_modules/react-test-renderer/cjs/react-test-renderer.development.js:6309
The above error occurred in the <svgrLoader> component:
    in svgrLoader (created by App)
    in App
```
