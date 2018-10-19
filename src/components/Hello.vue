<template>
  <div class="hello">
    <h1>{{ message }}</h1>
    <h3>{{ fullMessage }}</h3>
    <!-- child click -->
    <button @click="clicked">Click</button>
    <!-- parent click -->
    <button @click="parentClicked">Parent click</button>
  </div>
</template>

<script lang="ts">
import Parent from './Parent'
import Component from 'vue-class-component'

@Component({})
export default class Hello extends Parent {
  //class properties are merged in the same fashion as methods
  //see explanation below
  message: string = 'Hello Vue'

  //Note: Lifecycle hooks are treated differently from methods
  //They are called in the order of parent to child
  created() {
    console.log('child created')
  }

  get fullMessage() {
    return `${this.message} TypeScript`
  }
  //Note: vue-class-component uses the default vue merging strategy
  //parent clicked method is not triggered even though the parent has
  // the same named clicked method
  //WE CANNOT USE THE SUPER KEYWORD
  //BECAUSE: the vue-class-component is transforming these classes into objects
  //and the methods are merged from child to parent, so the parent methods are
  //overwritten by the child's
  clicked() {
    console.log('clicked')
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
