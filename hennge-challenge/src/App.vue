<template>
  <div id="app">
    <h2>emails</h2>
  </div>

    <div class="emails">
    <EmailData v-for="email in emails" :key="email.id" :email="email" />
  </div>
</template>

<script>
import EmailData from '@/components/EmailData.vue'
export default {
  name: 'Home',
  components: {
    EmailData
  },
  data() {
    return {
      emails: [
        { 
          id: 1,
          from: "aaa1@example.com",
          to: "zzzz.zzzz@example.com",
          subject: "[HR-8888] Noticed of official announcement",
          attachment: "",
          datetime: "2021-11-24T15:15:00+0200",
          body: "this is a fake body"
        },
        {
          id: 2,
          from: "bbb1@example.com",
          to: "zzzz.zzzz@example.com",
          subject: "[Github] Logout page",
          attachment: "",
          datetime: "2021-11-24T15:15:00+0200",
          body: "this is a fake body"
        },
        {
          id: 3,
          from: "ccc1@example.com",
          to: "zzzz.zzzz@example.com",
          subject: "[dev]Postfix 3.1.12 / 3.2.9 / 3.3.4 / 3.4.5",
          attachment: "",
          datetime: "2021-11-24T15:15:00+0200",
          body: "this is a fake body"
        }
        ,
        {
          id: 4,
          from: "ddd1@example.com",
          to: "mmmm.zzzz@example.com",
          subject: "[HR-8888] Noticed of official announcement",
          attachment: "",
          datetime: "2021-11-24T15:15:00+0200",
          body: "this is a fake body"
        }
        ,
        {
          id: 5,
          from: "eee1@example.com",
          to: "tttt.zzzz@example.com",
          subject: "[dev]Postfix 3.1.12 / 3.2.9 / 3.3.4 / 3.4.5",
          attachment: "",
          datetime: "2021-11-24T15:15:00+0200",
          body: "this is a fake body"
        }
        ,
        {
          id: 6,
          from: "fff1@example.com",
          to: "pppp.zzzz@example.com",
          subject: "[HR-8888] Noticed of official announcement",
          attachment: "",
          datetime: "2021-11-24T15:15:00+0200",
          body: "this is a fake body"
        }
        ,
        {
          id: 7,
          from: "ggg1@example.com",
          to: "ooo.zzzz@example.com",
          subject: "[dev]Postfix 3.1.12 / 3.2.9 / 3.3.4 / 3.4.5",
          attachment: "",
          datetime: "2021-11-24T15:15:00+0200",
          body: "this is a fake body"
        }
        ,
        {
          id: 8,
          from: "hhh1@example.com",
          to: "tttt.zzzz@example.com",
          subject: "[HR-8888] Noticed of official announcement",
          attachment: "",
          datetime: "2021-11-24T15:15:00+0200",
          body: "this is a fake body"
        }
        ,
        {
          id: 9,
          from: "iii1@example.com",
          to: "xxx.zzzz@example.com",
          subject: "[dev]Postfix 3.1.12 / 3.2.9 / 3.3.4 / 3.4.5",
          attachment: "",
          datetime: "2021-11-24T15:15:00+0200",
          body: "this is a fake body"
        }
        ,
        {
          id: 10,
          from: "jjj1@example.com",
          to: "zzzz.zzzz@example.com",
          subject: "[HR-8888] Noticed of official announcement",
          attachment: "",
          datetime: "2021-11-24T15:15:00+0200",
          body: "this is a fake body"
        }
      ]
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
