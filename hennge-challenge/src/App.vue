<template>
<div class="results ml-3">
  <h4>Results: 10mail(s)</h4>

  <p>Length = {{result}}</p>
  <p>Length = {{ theCount }}</p>
  
</div>
<div class="row">
  
  <div id="date" class="input-group mb-3 mr-3 ml-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1">   <img class="search" src="@/assets/icon_search.svg" alt="calendar"></span>
  </div>
  <input type="date" class="form-control" aria-label="Username" aria-describedby="basic-addon1" v-model="startDate">
</div>


<div id="date" class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1"> <img class="search" src="@/assets/icon_search.svg" alt="calendar"></span>
  </div>
  <input type="date" class="form-control" aria-label="Username" aria-describedby="basic-addon1" v-model="endDate">
</div>

</div>

    <div class="position-relative d-flex flex-row-reverse flex-lg-row flex-wrap flex-lg-nowrap flex-justify-center flex-lg-justify-between pt-6 pb-2 mt-6 f6 text-gray border-top border-gray-light mt-3 mb-3"></div>

 <div class="container col-12 md-8 sm-3">
    <div class="mail-list">
  <table id="myTable" class="table table-hover">
    <thead>
      <th class="table-active" scope="col">From</th>
      <th class="table-active" scope="col">To</th>
      <th class="table-active" scope="col">Subject</th>
      <th class="table-active" scope="col"> <strong>Date</strong> </th>
    </thead>
  <tbody>
<div v-if="startDate === null">
  <img src="@/assets/logo.png" alt="">
</div>
<div v-else>
    <tr class="filtredData" id="filtredData" v-for="all in filteredData" :key="all">
      <td>{{all.from}}</td>
      <td>{{all.to}}</td>
      <td>{{all.subject}}</td>
      <td>{{all.date}}</td>
    </tr>

</div>
    
  </tbody>
  </table>
</div>
</div>
</template>

<script>
  import _ from 'lodash';

  export default {
  data(){
    return{
      startDate: new Date(),
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
  methods:{
    myFunction: function () { 
    // const result = this.data.all;  
    this.result = this.data.all.length;
    
    },
    theCount(){
      var anchors = document.getElementById("filtredData").getElementsByTagName("td");
        // alert("The Div has " + anchors.length + " links in it");
        return anchors.length
    }
  }
  
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
  width: 10px;
  height: 15px;
}
input[type="date"]::-webkit-calendar-picker-indicator {
    color: rgba(0, 0, 0, 0);
    opacity: 1;
    display: block;
    background: url(assets/icon_calender.svg) no-repeat;
    width: 20px;
    height: 20px;
    border-width: thin;
    border-radius: 5px;
}
input {
  border-radius: 5px;
}
#date {
  width: 300px;
}
</style>

