# Use TypeScript to Develop Vue.js Web Applications

Here you can find all lessons from [Use TypeScript to Develop Vue.js Web Applications]() course. They're located in different branches:

Notes on provide / inject:

According to the docs: https://vuejs.org/v2/api/#provide-inject

This pair of options are used together to allow an ancestor component to serve as a dependency injector for ALL its descendants, regardless of how deep the component hierachy is, as long as they are in the same parent chain. Similar to React's context feature

The 'provide' option should be an object or a function that returns an object. This object contains the properties that are available for injection into its descentdants.

ES6 version
```ts
const ProviderAncestorComponent = {
  provide:{
    http: axios,
  }
}

const InjectedChildComponent = {
  inject: ['http'],
  created() {
    this.http.get ...
  }
}
```

TS version
```ts
export default class ProviderAncestorComponent extends Vue {
  @Provide()
  http = axios
}

export default class Users extends Vue {
  @Inject() http
  created() {
    this.http.get ...
  }
}
```

Note: the provide and inject bindings are NOT reactive. This is intentional. However, if you pass down an observed object, properties on that object do remain reactive.

To provide an injection under a different key string, provide a string value in the provide decorater, see the example in App.vue and Users.vue