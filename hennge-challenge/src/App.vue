<template>
  <div id="app">

<div id="sort-bar">

<!-- 
    <input type="text" v-model="searchValue" placeholder="Search email" id="search-input">
    <i class="fa fa-search"></i>
  </div> -->

   <input type="date" v-model="startDate">
   <input type="date" v-model="endDate">
   <ul>
     <li v-for="emails in filteredData" :key="emails.datetime">{{emails.datetime}}</li>
   </ul>
</div>

  <!-- Where the array of emails get rendered as cards -->
  <div id="email-container">
    <div class="card" v-for="email in filteredEmails" :key="email.subject">
      <img :src="email.img" class="email-image">
      <div class="content">
        <h1 class="email-subject">
          {{ email.subject }}
        </h1>
        <p>
          {{ email.description }}
        </p>
        <span class="body-span">

          <h3 class="body-subject">
            body:
          </h3>
          <h3>
           <p>Recever:</p> 
            {{ email.to }}
          </h3>
          <h3>
           <p>Sender:</p> 
            {{ email.from }}
          </h3>
            <h3>
           <p>Date:</p> 
            {{ email.datetime }}
          </h3>
       <!--    <ol class="body-list">
            <li v-for="body in email.bodys">- {{ body }}</li>
          </ol> -->
        </span>
      </div>

    </div>
  </div>
  </div>













    <h2>emails</h2>
    <input type="text" v-model="searchValue" placeholder="Search Email" id="search-input">


    <div class="emails">
    <EmailData v-for="email in emails" :key="email.id" :email="email" />
  </div>
</template>

<script>
import EmailData from '@/components/EmailData.vue'
import _ from 'lodash';

export default {
  name: 'Home',
  components: {
    EmailData
  },
  data() {
    return {
      startDate: null,
      endDate: null,
      ascending: true,
      sortBy: 'alphabetically',
      searchValue: '',
      data: {
        all:[
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
          datetime: "2021-11-25T15:15:00+0200",
          body: "this is a fake body"
        },
        {
          id: 3,
          from: "ccc1@example.com",
          to: "zzzz.zzzz@example.com",
          subject: "[dev]Postfix 3.1.12 / 3.2.9 / 3.3.4 / 3.4.5",
          attachment: "",
          datetime: "2021-11-26T15:15:00+0200",
          body: "this is a fake body"
        }
        ,
        {
          id: 4,
          from: "ddd1@example.com",
          to: "mmmm.zzzz@example.com",
          subject: "[HR-8888] Noticed of official announcement",
          attachment: "",
          datetime: "2021-10-16T15:15:00+0200",
          body: "this is a fake body"
        }
        ,
        {
          id: 5,
          from: "eee1@example.com",
          to: "tttt.zzzz@example.com",
          subject: "[dev]Postfix 3.1.12 / 3.2.9 / 3.3.4 / 3.4.5",
          attachment: "",
          datetime: "2021-10-10T15:15:00+0200",
          body: "this is a fake body"
        }
        ,
        {
          id: 6,
          from: "fff1@example.com",
          to: "pppp.zzzz@example.com",
          subject: "[HR-8888] Noticed of official announcement",
          attachment: "",
          datetime: "2021-11-30T15:15:00+0200",
          body: "this is a fake body"
        }
        ,
        {
          id: 7,
          from: "ggg1@example.com",
          to: "ooo.zzzz@example.com",
          subject: "[dev]Postfix 3.1.12 / 3.2.9 / 3.3.4 / 3.4.5",
          attachment: "",
          datetime: "2020-11-24T15:15:00+0200",
          body: "this is a fake body"
        }
        ,
        {
          id: 8,
          from: "hhh1@example.com",
          to: "tttt.zzzz@example.com",
          subject: "[HR-8888] Noticed of official announcement",
          attachment: "",
          datetime: "2021-03-21T15:15:00+0200",
          body: "this is a fake body"
        }
        ,
        {
          id: 9,
          from: "iii1@example.com",
          to: "xxx.zzzz@example.com",
          subject: "[dev]Postfix 3.1.12 / 3.2.9 / 3.3.4 / 3.4.5",
          attachment: "",
          datetime: "2021-06-17T15:15:00+0200",
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
  },
  computed: {
    filteredData(){
      var vm = this
      var startDate = vm.startDate;
      var endDate = vm.endDate;
      return _.filter(vm.data.emails, (function (data) {
        if ((_.isNull(startDate) && _.isNull(endDate))) {
          return true
        } else {
          var date = data.emails;
          return (date >= startDate && date <= endDate);
        }
      }))
    }
  }
    // filteredEmails() {
  //   let tempEmails = this.emails
    
  //   // Process search input
  //   if (this.searchValue != '' && this.searchValue) {
  //       tempEmails = tempEmails.filter((item) => {
  //         return item.datetime
  //           .toUpperCase()
  //           .includes(this.searchValue.toUpperCase())
  //       })
  //     }
           
  //   // Sort by alphabetical order
  //       tempEmails = tempEmails.sort((a, b) => {
  //           if (this.sortBy == 'alphabetically') {
  //               let fa = a.datetime.toLowerCase(), fb = b.datetime.toLowerCase()
          
  //             if (fa < fb) {
  //               return -1
  //             }
  //             if (fa > fb) {
  //               return 1 
  //             }
  //             return 0
  //       }
  //       })
        
  //       // Show sorted array in descending or ascending order
  //       if (!this.ascending) {
  //         tempEmails.reverse()
  //       }
        
  //       return tempEmails
  // }
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




export default {
  
};