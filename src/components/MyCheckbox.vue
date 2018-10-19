<template>
  <div class="hello">
    <!-- value attribute in a textbox is what gets sent via POST when submitted, under the name attribute-->
    <!-- eg ["<name>"]: <value> if checked === true. if the value attribute was omitted the default value for the checkbox is 'on'-->
    <!-- see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox -->
    <input type="checkbox" :name="name" :value="value" :checked="checked" @change="changed"> {{title}}
  </div>
</template>


<script lang="ts">
import Vue from 'vue'
import { Component, Prop, Model } from 'vue-property-decorator'

@Component
export default class MyCheckbox extends Vue {
  @Prop()
  title: string;
  @Prop()
  name: string;
  @Prop()
  value: string;

  // checked is both a prop passed from the parent element and model
  // @Model is the equivalent of:
  //model: {
  //  prop: 'checked',
  //  event: 'change'
  //},
  //props: {
  //  checked: {
  //    type: Boolean
  //  },
  //},
  // <MyCheckbox :title="checkbox.title" :value="checkbox.value" v-model="checkbox.checked"/>
  // We need to mark checked as a model because it's passed down in the enclosing element
  // but it is also a property
  // As explained in @Model('change')
  @Prop()
  @Model('change')
  checked: boolean;

  changed(ev) {
    this.$emit('change', ev.target.checked)
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
