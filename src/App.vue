<template>
  <div id="app">
    <button @click="sumUpSimple"> Simple Count {{simpleCount}}</button>
    <button @click="sumUp">Count {{count.acum}}</button>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Watch } from 'vue-property-decorator'

@Component
export default class App extends Vue {
  count: any = {
    acum: 0
  }

  simpleCount: number = 0;
  //With objects we need deep watching to know when the property has changed
  @Watch('count', {deep:true})
  watchCount(newVal, oldVal) {
    console.log('newVal: ', newVal, ', oldVal: ', oldVal)
  }

  //With simple properties we don't need {deep:true}
  @Watch('simpleCount')
  watchSimpleCount(newVal, oldVal) {
    console.log('newVal: ', newVal, ', oldVal: ', oldVal);
  }

  // if we don't use deep:true , we need to assign the property itself for objects eg
  // this.count = {acum: this.count.acum+=2,};
  sumUp() {
    this.count.acum += 2;
  }

  sumUpSimple(){
    this.simpleCount+=1;
  }
}
</script>






<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button {
  font-size: 2em;
}
</style>
