<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  Post: {
  constructor(title, link, author, img) {
    this.title = title;
    this.link = link;
    this.author = author;
    this.img = img;
  }
},

  app = new Vue ({
  el: '#app',
  data: {
    search: '',
    postList : [
      new Post(
        'Vue.js', 
        'https://vuejs.org/', 
        'Chris', 
        'https://vuejs.org//images/logo.png'
      ),
      new Post(
        'React.js', 
        'https://facebook.github.io/react/', 
        'Tim',
        'https://daynin.github.io/clojurescript-presentation/img/react-logo.png'
      ),
      new Post(
        'Angular.js', 
        'https://angularjs.org/', 
        'Sam', 
        'https://angularjs.org/img/ng-logo.png'
      ),
      new Post(
        'Ember.js', 
        'http://emberjs.com/', 
        'Rachel',
        'http://www.gravatar.com/avatar/0cf15665a9146ba852bf042b0652780a?s=200'
      ),
      new Post(
        'Meteor.js', 
        'https://www.meteor.com/', 
        'Chris', 
        'http://hacktivist.in/introduction-to-nodejs-mongodb-meteor/img/meteor.png'
      ),
      new Post(
        'Aurelia', 
        'http://aurelia.io/', 
        'Tim',
        'https://cdn.auth0.com/blog/aurelia-logo.png'
      ),
      new Post(
        'Node.js', 
        'https://nodejs.org/en/', 
        'A. A. Ron',
        'https://code-maven.com/img/node.png'
      ),
      new Post(
        'Pusher', 
        'https://pusher.com/', 
        'Alex', 
        'https://avatars1.githubusercontent.com/u/739550?v=3&s=400'
      ),
      new Post(
        'Feathers.js', 
        'http://feathersjs.com/', 
        'Chuck',
        'https://cdn.worldvectorlogo.com/logos/feathersjs.svg'
      ),
]
  },
  computed: {
    filteredList() {
      return this.postList.filter(post => {
        return post.title.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
})
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
