<template>
  <ul>
    <li v-for="user in users">{{ user.name }}</li>
    <br/>
    <li v-for="user in users2">{{ user.name}}</li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Inject } from 'vue-property-decorator'

@Component
export default class Users extends Vue {
  users = [];
  users2 = [];
  @Inject() myHttpModule

  @Inject('myHttpModule') http

  created() {
    this.myHttpModule.get('https://jsonplaceholder.typicode.com/users')
      .then(data => { this.users = data.data })

    this.http.get('https://jsonplaceholder.typicode.com/users')
      .then(data => { this.users2 = data.data })
  }
}
</script>

