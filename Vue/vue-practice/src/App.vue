<template>
 <div id="root">
 <!-- {{ kittifyName }} -->
 <br>
  <input v-model="newCat" @keyup.enter="addKitty" >
  <button @click="addKitty">+ add</button>
   <ul>
     <li v-for="cat in cats">{{ cat.name  }}</li>
  </ul>
  <cat-list :cats="cats"/>
 </div>
</template>

<script>


export default {

Vue.component('cat-list', {
props: ['cats'],
template:
<ul>
  <li v-for="cat in cats">{{ cat.name }}</li>
 </ul>

app = new Vue({
  el: '#root',
  component: [
  'cat-list'
  ],
   data: {
    cats: [
    { name: 'cat1'},
    { name: 'cat2'},
    { name: 'cat3'},
    { name: 'cat4'}
    ],
    newCat: ''
   },
   methods: {
    addKitty: function() {
      this.cats.push({name: this.newCat})
      this.newCat = ''
}
   },
   computed: {
    kittifyName: function() {
    if (this.newCat.length > 1) {
      return this.newCat + 'y'
      }
    }
   }
})



</script>

<style>
#root {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
