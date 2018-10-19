<template>
  <div class="hello">
    <h1>{{ fullMessage }}</h1>
    <!-- @ is shorthand for v-on: so  @click === v-on:click -->
    <button @click="clicked">Click</button>
    <!-- : is shorthand for v-bind: -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

//@ here is used to denote a decorator in typescript land
@Component({})
export default class Hello extends Vue {
  //Data properties in ts-vue are just properties in a class
  message: string = 'Hello Vue'

  //Computed properties in ts-vue are just getters
  //the below code is equivalent to
  //computed:{
  //  fullMessage(){
  //    return  `${this.message} from TypeScript`;
  //  }
  //}
  get fullMessage() {
    return `${this.message} from TypeScript`
  }
  //Lifecycle hooks are written as methods
  // beforeCreate, created, beforeMount, mounted, beforeUpdate, updated, beforeDestroy, destroyed
  created() {
    console.log('created!')
  }

  //methods are also written as methods
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
