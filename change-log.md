## <u>Brokers</u>

---

| Version            |
|:-------------------|
| [`0.3.0`](#v0.3.0) |
| [`0.2.0`](#v0.2.0) |
| [`0.1.0`](#v0.1.0) |


### <a id="v0.3.0"/>`0.3.0`

- Added `config` folder and `API.ts` to configure my requests
- Added `services` to handle my services and dependency injection
- Added `utils` folder to use helper functions
- Change `next.config.js` to support the image URL
- Added `exteraReducers` to make a `Async` request
- Added `RequestSource.tsx` component to change the source of the application
  - `Local` to use directly from the `data/brokers.ts`
  - `Api` to use the APIs that provided in `pages/api`
- Added `useSearch` hook to handle and organized the search logic
- Added `useBrokers` and `useTopBrokers` hooks to handle their logic's in one place
- Added `debounce` helper function to optimized function call
- Added `sendEvent` logic to the app (the basic logic)
- Added responsive styles to the app
- Added `react-intersection-observer` to check the element in the viewport
- Added `useImpression` hook to check the observed element

### <a id="v0.2.0"/>`0.2.0`

- Added `change-log.md` and new `README.md` to the app
- Changed a few names across the app
- Added `hooks` folder and Redux hooks to use TypeScript with the store
- Added `types` folder to organized _interface_, _type_, and _enum_
- Added `layout` and `components` folders to make a good structure for the app
- Added `Header` and `Footer` to make the app scalable
- Changed `_app.tsx` and `index.tsx` in the `pages` folder
- Added `react-icons` to use in the app
- Added `Volta` for checking `Node` version to the `package.json`

### <a id="v0.1.0"/>`0.1.0`

- Push the given code base to the private `Github` repository (broker-chooser__nextjs)
