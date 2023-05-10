# Install & Run
1. Make sure that you have installed the [Node](https://nodejs.org/) LTS on your machine
2. Install dependencies with the following command:
```shell
npm install

# OR

yarn add
```
3. Run the app with the following command
```shell
npm run dev

# OR

yarn dev
```

---

## Change Log
To see the application's log, you can go to [change-log.md](/change-log.md)

---

## Wish to use
I could use these technologies but I don't have that much time:
1. `next-redux-wrapper` to make redux `SSR` (**Server Side Rendering**)
2. `lint-stage` and `husky` to control git commit with pre-commit functionalities
3. `react-persist` to persist the data in the browser
4. `SSR` and `ISR` (**Incremental Static Regeneration**)

---

### Consideration
Because of the unfamiliarity with the scenario, I added some logic for **sentEvent** but please consider that
I'm not familiar with the concept and I didn't have a full documentation about it. 

Also, I was stuck with checking multiple elements in the viewport. As I read this API (**IntersectionObserver**), it
will support one element in viewport and because of the **Unidirectional** (Flux) in React, I couldn't send the ref
from child to parent and I didn't that much time to check it with Redux. But after this task, I will check it just to learn
how to deal with something like this.
