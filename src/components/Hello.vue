<template>
  <div class="hello">
    <h1>{{ fullMessage }}</h1>
    <h2 v-show="toggle"> Aho </h2>
  </div>
</template>


<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component({})
export default class Hello extends Vue {
  message: string = 'Hello';
  // The @Prop decorator lets us create Props as properties in a class
  @Prop({ type: String, default: ' Vue'})
  msg: string;

  @Prop({ type: Boolean, default: false})
  toggle: boolean;

  @Prop({ type:Number, default: 100})
  myNum: number;

  get fullMessage() {
    return `${this.message}${this.msg} ${this.myNum}`;
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
