# Examples of Vue.js Component Unit Testing

<a href="https://leanpub.com/testingvuejscomponentswithjest" alt="Test Vue.js components with Jest"><img align="right" width="180" src="https://alexjoverm.github.io/images/vuejest.jpg"></a>

This repository contains code examples written for the series of articles “[Unit Testing Vue.js Components with the Official Vue Testing Tools and Jest](https://leanpub.com/testingvuejscomponentswithjest)” by [Alex Jover](https://alexjoverm.github.io/about/).

## Getting started

We assume you're already familiar with [Vue.js](https://vuejs.org/) framework and a concept of [unit testing](https://en.wikipedia.org/wiki/Unit_testing).

You might also want to have a look at the testing tools that we're going to use in this series: [vue-test-utils](https://github.com/vuejs/vue-test-utils) (an official test library for Vue.js) and [Jest](https://facebook.github.io/jest/) (testing framework developed by Facebook).

### Preparing and running tests

To run the code from this repository and build the application use the following commands in your terminal:

```bash
# clone the repository
git clone git@github.com:alexjoverm/vue-testing-series.git

# change the folder
cd vue-testing-series

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# run tests once
npm t

# run tests in watch mode to monitor what breaks as you change the code
npm t -- --watch
```

### Build Setup

```bash
# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For the detailed explanation of how things work, check out the [Vue.js Templates guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Lessons

The structure of this repository follows the structure of the book, where each lesson is represented in a separate branch.

Here is the **full list of lessons**:

1. Write the first Vue.js Component Unit Test in Jest<br>
   [`GitHub branch`](https://github.com/alexjoverm/vue-testing-series/tree/lesson-1)

2. Test Deeply Rendered Vue.js Components in Jest<br>
   [`GitHub branch`](https://github.com/alexjoverm/vue-testing-series/tree/Test-fully-rendered-Vue-js-Components-in-Jest)

3. Test Styles and Structure of Vue.js Components in Jest<br>
   [`GitHub branch`](https://github.com/alexjoverm/vue-testing-series/tree/Test-Styles-and-Structure-in-Vue-js-and-Jest)

4. Test Properties and Custom Events in Vue.js Components with Jest<br>
   [`GitHub branch`](https://github.com/alexjoverm/vue-testing-series/tree/Test-Properties-and-Custom-Events-in-Vue-js-Components-with-Jest)

5. Test Computed Properties and Watchers in Vue.js Components with Jest<br>
   [`GitHub branch`](https://github.com/alexjoverm/vue-testing-series/tree/Test-State-Computed-Properties-and-Methods-in-Vue-js-Components-with-Jest)

6. Test Methods and Mock Dependencies in Vue.js with Jest<br>
   [`GitHub branch`](https://github.com/alexjoverm/vue-testing-series/tree/Test-State-Computed-Properties-and-Methods-in-Vue-js-Components-with-Jest)

7. Test Vue.js Slots in Jest<br>
   [`GitHub branch`](https://github.com/alexjoverm/vue-testing-series/tree/test-slots)

8. Enhance Jest configuration with Module Aliases<br>
   [`GitHub branch`](https://github.com/alexjoverm/vue-testing-series/tree/Enhance-Jest-configuration-with-Module-Aliases)

9. Snapshot Testing<br>
   [`GitHub branch`](https://github.com/alexjoverm/vue-testing-series/tree/chapter-9)

## Next steps

Do you have any questions regarding these lessons? Feel free to write a comment under each of them. If you like the course, please share it on social media or with your colleagues.

You can also follow Alex Jover videos [on Egghead](https://egghead.io/instructors/alex-jover-morales) or on twitter as [@alexjoverm](https://twitter.com/alexjoverm).
