  <template>
    <div id="app">

  <div id="sort-bar">
    </div>

     <input type="date" v-model="startDate">
     <input type="date" v-model="endDate">
     <ul>
       <li v-for="emails in filteredData" :key="emails">
       {{emails.datetime}}
       {{subject}}
     </li>
     </ul>
  
    <!-- Where the array of emails get rendered as cards -->
   <div id="sort-bar">
      <input type="text" v-model="searchValue" placeholder="Search Email" id="search-input">
      <i class="fa fa-search"></i>
    </div>
      
    <!-- Where the array of recipes get rendered as cards -->
    <div id="recipe-container">
      <div class="card" v-for="email in emails" :key="email.id">
        <div class="content">
<!--           <ul>
     <li v-for="email in emails" :key="email.id">{{email.datetime}}</li>
   </ul> -->
          <!-- <h1 class="email-title">
            To:
            {{ email.to }}
          </h1>
          <p>
            Body:
            {{ email.body }}
          </p>
                    <p>
                      From:
            {{ email.from }}
          </p>
                    <p>
                      Date:
            {{ email.datetime }}
          </p>
                    <p>
                      Subject:
            {{ email.subject }}
          </p> -->
        </div>

      </div>
    </div>
  </div>
  </template>

  <script>
  // import EmailData from '@/components/EmailData.vue'
  import _ from 'lodash';

  export default {
    el: '#app',
    data() {
      return {
        startDate: null,
        endDate: null,
        ascending: true,
        sortBy: 'alphabetically',
        searchValue: '',
        emails: [
          { 
            id: 1,
            from: "aaa1@example.com",
            to: "zzzz.zzzz@example.com",
            subject: "[HR-8888] Noticed of official announcement",
            attachment: "",
            datetime: "2021-02-23",
            body: "this is a fake body"
          },
          {
            id: 2,
            from: "bbb1@example.com",
            to: "zzzz.zzzz@example.com",
            subject: "[Github] Logout page",
            attachment: "",
            datetime: "2021-07-29",
            body: "this is a fake body"
          },
          {
            id: 3,
            from: "ccc1@example.com",
            to: "zzzz.zzzz@example.com",
            subject: "[dev]Postfix 3.1.12 / 3.2.9 / 3.3.4 / 3.4.5",
            attachment: "",
            datetime: "2021-08-17",
            body: "this is a fake body"
          }
          ,
          {
            id: 4,
            from: "ddd1@example.com",
            to: "mmmm.zzzz@example.com",
            subject: "[HR-8888] Noticed of official announcement",
            attachment: "",
            datetime: "2021-03-23",
            body: "this is a fake body"
          }
          ,
          {
            id: 5,
            from: "eee1@example.com",
            to: "tttt.zzzz@example.com",
            subject: "[dev]Postfix 3.1.12 / 3.2.9 / 3.3.4 / 3.4.5",
            attachment: "",
            datetime: "2021-09-02",
            body: "this is a fake body"
          }
          ,
          {
            id: 6,
            from: "fff1@example.com",
            to: "pppp.zzzz@example.com",
            subject: "[HR-8888] Noticed of official announcement",
            attachment: "",
            datetime: "2021-10-03",
            body: "this is a fake body"
          }
          ,
          {
            id: 7,
            from: "ggg1@example.com",
            to: "ooo.zzzz@example.com",
            subject: "[dev]Postfix 3.1.12 / 3.2.9 / 3.3.4 / 3.4.5",
            attachment: "",
            datetime: "2021-11-23",
            body: "this is a fake body"
          }
          ,
          {
            id: 8,
            from: "hhh1@example.com",
            to: "tttt.zzzz@example.com",
            subject: "[HR-8888] Noticed of official announcement",
            attachment: "",
            datetime: "2021-11-26",
            body: "this is a fake body"
          }
          ,
          {
            id: 9,
            from: "iii1@example.com",
            to: "xxx.zzzz@example.com",
            subject: "[dev]Postfix 3.1.12 / 3.2.9 / 3.3.4 / 3.4.5",
            attachment: "",
            datetime: "2021-12-25",
            body: "this is a fake body"
          }
          ,
          {
            id: 10,
            from: "jjj1@example.com",
            to: "zzzz.zzzz@example.com",
            subject: "[HR-8888] Noticed of official announcement",
            attachment: "",
            datetime: "2021-12-24",
            body: "this is a fake body"
          }
      ]
    ,
    computed: {
      filteredData(){
      var vm = this
      var startDate = vm.startDate;
      var endDate = vm.endDate;
      return _.filter(vm.emails, (function (emails) {
        if ((_.isNull(startDate) && _.isNull(endDate))) {
          return true
        } else {
          var date = emails.datetime;
          return (date >= startDate && date <= endDate);
          }
        }))
      }
    },
    filteredEmails() {
      let tempEmails = this.emails
      
      // Process search input
      if (this.searchValue != '' && this.searchValue) {
          tempEmails = tempEmails.filter((item) => {
            return item.subject
              .toUpperCase()
              .includes(this.searchValue.toUpperCase())
          })
        }
             
      // Sort by alphabetical order
          tempEmails = tempEmails.sort((a, b) => {
              if (this.sortBy == 'alphabetically') {
                  let fa = a.subject.toLowerCase(), fb = b.subject.toLowerCase()
            
                if (fa < fb) {
                  return -1
                }
                if (fa > fb) {
                  return 1 
                }
                return 0
          }
          })
          
          // Show sorted array in descending or ascending order
          if (!this.ascending) {
            tempEmails.reverse()
          }
          
          return tempEmails

        }
      }
    }
  };
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
