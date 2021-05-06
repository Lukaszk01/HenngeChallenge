<template>
<div class="row">
  <div id="date" class="input-group mb-3 mr-3 ml-3">
  <div class="input-group-prepend">
  </div>

  <input type="date" class="form-control" aria-label="Username" aria-describedby="basic-addon1" v-model="startDate">
  <span class="input-group-text" id="basic-addon1">   <img class="search" src="@/assets/icon_search.svg" alt="calendar"></span>
</div>

<div id="date" class="input-group mb-3">
  <input type="date" class="form-control" aria-label="Username" aria-describedby="basic-addon1" v-model="endDate">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1"> <img class="search" src="@/assets/icon_search.svg" alt="calendar"></span>
  </div>
</div>
</div>
<div v-if="startDate === null " class="results ml-3">
  Results: 0 mail(s)

</div>
<div v-else>
  <h4>Results: {{ filteredData.length }}mail(s)</h4>
</div>
    <div class="position-relative d-flex flex-row-reverse flex-lg-row flex-wrap flex-lg-nowrap flex-justify-center flex-lg-justify-between pt-6 pb-2 mt-6 f6 text-gray border-top border-gray-light mt-3 mb-3"></div>

  <div class="container col-12 md-8 sm-3">
    <div class="mail-list">
    </div>
  </div>
<div v-if="startDate === null">
  <img id="logo" class ="rounded mx-auto d-block mt-4" src="@/assets/logo.png" alt="">
</div>
<div v-else>
<table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">From</th>
      <th scope="col">To</th>
      <th scope="col">Subject</th>
      <th scope="col">Date</th>
    </tr>
  </thead>

  <tbody class="filtredData" id="filtredData" v-for="all in filteredData" :key="all">
    <tr>
      <th scope="row">{{all.from}}</th>
      <td>{{all.to}}</td>
      <td>{{all.subject}}</td>
      <td>{{all.date}}</td>
    </tr>
  </tbody>
</table>
</div>

</template>

<script>
  import _ from 'lodash';

  export default {
  data(){
    return{
      startDate: null,
      endDate: null,
      data:{
        all:[
          { 
            id: 1,
            from: "aaa1@example.com",
            to: "zzzz.zzzz@example.com",
            subject: "[HR-8888] Noticed of official announcement",
            attachment: "",
            date: "2021-02-23",
            body: "this is a fake body"
          },
          {
            id: 2,
            from: "bbb1@example.com",
            to: "zzzz.zzzz@example.com",
            subject: "[Github] Logout page",
            attachment: "",
            date: "2021-07-29",
            body: "this is a fake body"
          },
          {
            id: 3,
            from: "ccc1@example.com",
            to: "zzzz.zzzz@example.com",
            subject: "[dev]Postfix 3.1.12 / 3.2.9 / 3.3.4 / 3.4.5",
            attachment: "",
            date: "2021-08-17",
            body: "this is a fake body"
          }
          ,
          {
            id: 4,
            from: "ddd1@example.com",
            to: "mmmm.zzzz@example.com",
            subject: "[HR-8888] Noticed of official announcement",
            attachment: "",
            date: "2021-03-23",
            body: "this is a fake body"
          }
          ,
          {
            id: 5,
            from: "eee1@example.com",
            to: "tttt.zzzz@example.com",
            subject: "[dev]Postfix 3.1.12 / 3.2.9 / 3.3.4 / 3.4.5",
            attachment: "",
            date: "2021-09-02",
            body: "this is a fake body"
          }
          ,
          {
            id: 6,
            from: "fff1@example.com",
            to: "pppp.zzzz@example.com",
            subject: "[HR-8888] Noticed of official announcement",
            attachment: "",
            date: "2021-10-03",
            body: "this is a fake body"
          }
          ,
          {
            id: 7,
            from: "ggg1@example.com",
            to: "ooo.zzzz@example.com",
            subject: "[dev]Postfix 3.1.12 / 3.2.9 / 3.3.4 / 3.4.5",
            attachment: "",
            date: "2021-11-23",
            body: "this is a fake body"
          }
          ,
          {
            id: 8,
            from: "hhh1@example.com",
            to: "tttt.zzzz@example.com",
            subject: "[HR-8888] Noticed of official announcement",
            attachment: "",
            date: "2021-11-26",
            body: "this is a fake body"
          }
          ,
          {
            id: 9,
            from: "iii1@example.com",
            to: "xxx.zzzz@example.com",
            subject: "[dev]Postfix 3.1.12 / 3.2.9 / 3.3.4 / 3.4.5",
            attachment: "",
            date: "2021-12-25",
            body: "this is a fake body"
          }
          ,
          {
            id: 10,
            from: "jjj1@example.com",
            to: "zzzz.zzzz@example.com",
            subject: "[HR-8888] Noticed of official announcement",
            attachment: "",
            date: "2021-12-24",
            body: "this is a fake body"
          }
          ],
          result: ''
      }
    }
  },
  computed: {
    filteredData(){
      var vm = this
      var startDate = vm.startDate;
      var endDate = vm.endDate;
      return _.filter(vm.data.all, (function (data) {
        if ((_.isNull(startDate) && _.isNull(endDate))) {
          return true
        } else {
          var date = data.date;
          return (date >= startDate && date <= endDate);
        }
      }))
    },
  },
}

</script>
<style>
  .logo img {
  position: absolute;
  z-index: 0;
  display: block;
  margin-left: auto;
  margin-right: auto;

}
.calimg {
  width: 25px;
  height: 25px;
}

body {
  color: gray;
}
body th  {
  color: gray;
}
#reportrange {
  width: 50%;
}
.search {
  width: 16px;
  height: 15px;
}
.search img {
  width: 16px;
  height: 15px;
}
#basic-addon1 {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 0px;
  border-top-left-radius: 0px;
}
input[type="date"]::-webkit-calendar-picker-indicator {
    color: rgba(0, 0, 0, 0);
    opacity: 1;
    display: block;
    background: url(assets/icon_calender.svg) no-repeat;
    width: 20px;
    height: 20px;
    border-width: thin;
    
}
.input-group>.custom-select:not(:first-child), .input-group>.form-control:not(:first-child) {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
     -moz-box-shadow:    inset 0 0 1px #000000;
   -webkit-box-shadow: inset 0 0 1px #000000;
   box-shadow:         inset 0 0 1px #000000;
}

#date {
  width: 300px;
}
.logo {
  width: 150px;
  height: 150px;
}
.row {
  margin-top: 50px;
  margin-left: 25px;
}
</style>

