<template>
<div class="row">
  <div id="date" class="input-group mb-3 mr-3 ml-3">
  <div class="input-group-prepend">
  </div>



<div>
   <button @click="toggleModal">Open</button>
    <transition name="fade">
      <div v-if="isOpen" class="modal">
        <button @click="toggleModal">Close</button>
          </div>
        </transition>
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
<div v-if="startDate === null" class="ml-3">
 <b>Results: 0 mail(s)</b> 
 <div class="position-relative d-flex flex-row-reverse flex-lg-row flex-wrap flex-lg-nowrap flex-justify-center flex-lg-justify-between pt-6 pb-2 mt-6 f6 text-gray border-top border-gray-light mt-3 mb-3 ml-1"></div>
</div>
<div v-else-if="filteredData === 1">
  Results: 1 mail
</div>
<div v-else>
 <b class="results-number">Results: {{ filteredData.length }} mail(s)</b> 
</div>

<div class="container col-12">
  <div v-if="startDate === null">
  <img id="logo" class ="rounded mx-auto d-block mt-4" src="@/assets/logo.png" alt="">
</div>
<div v-else>
<table class="table table-hover">
  <thead class="table-active">
    <tr>
      <th scope="col">From</th>
      <th scope="col">To</th>
      <th scope="col">Subject</th>
      <th scope="col"><b style="color:black">Date</b><img class="arrow" src="@/assets/icon_arrow01.svg"></th>
    </tr>
  </thead>

  <tbody class="filtredData" id="filtredData" v-for="all in filteredData" :key="all">
    <tr>
      <td>
        <a href="#">{{all.from}}</a>
      </td>
      <td v-if="all.quantity === true">
        <a href="#">{{all.to}}</a></td>
      <td v-else-if="all.quantity > 0">
        <a href="#">{{all.to}}
          <div class="email-no">+ {{all.quantity}}
        </div>
      </a>
      </td>
      <td v-if="all.attachment === true">
        <a href="#">{{all.subject}}
             <img src="@/assets/icon_clip.svg" class="attachment" alt="">
          </a>
       
        </td>
        <td v-else>
          <a href="#">{{all.subject}}
        </a>
      </td>
      <th style="color:black">{{all.date}}</th>
    </tr>
  </tbody>
</table>
    <div class="bottom-border">
    </div>
</div>
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
            attachment: false,
            date: "2021-02-23",
            quantity: true,
          },
          {
            id: 2,
            from: "bbb1@example.com",
            to: "zzzz.zzzz@example.com",
            subject: "[Github] Logout page",
            attachment: true,
            date: "2021-07-29",
            quantity: 1,
          },
          {
            id: 3,
            from: "ccc1@example.com",
            to: "zzzz.zzzz@example.com",
            subject: "[dev]Postfix 3.1.12 / 3.2.9 / 3.3.4 / 3.4.5",
            attachment: false,
            date: "2021-08-17",
            quantity: true,
          }
          ,
          {
            id: 4,
            from: "ddd1@example.com",
            to: "mmmm.zzzz@example.com",
            subject: "[HR-8888] Noticed of official announcement",
            attachment: false,
            date: "2021-03-23",
            quantity: 2,
          }
          ,
          {
            id: 5,
            from: "eee1@example.com",
            to: "xxxx.zzzz@example.com",
            subject: "[dev]Postfix 3.1.12 / 3.2.9 / 3.3.4 / 3.4.5",
            attachment: false,
            date: "2021-09-02",
            quantity: 2,
          }
          ,
          {
            id: 6,
            from: "fff1@example.com",
            to: "pppp.zzzz@example.com",
            subject: "[HR-8888] Noticed of official announcement",
            attachment: false,
            date: "2021-10-03",
            quantity: true,
          }
          ,
          {
            id: 7,
            from: "ggg1@example.com",
            to: "oooo.zzzz@example.com",
            subject: "[dev]Postfix 3.1.12 / 3.2.9 / 3.3.4 / 3.4.5",
            attachment: false,
            date: "2021-11-23",
            quantity: 1,
          }
          ,
          {
            id: 8,
            from: "hhh1@example.com",
            to: "tttt.zzzz@example.com",
            subject: "[HR-8888] Noticed of official announcement",
            attachment: true,
            date: "2021-11-26",
            quantity: true,
          }
          ,
          {
            id: 9,
            from: "iii1@example.com",
            to: "xxxx.zzzz@example.com",
            subject: "[HR-887(Revised: Office Expansion Project Team)] Notice of off...",
            attachment: false,
            date: "2021-12-25",
            quantity: true,
          }
          ,
          {
            id: 10,
            from: "jjj1@example.com",
            to: "zzzz.zzzz@example.com",
            subject: "[HR-8888] Noticed of official announcement",
            attachment: false,
            date: "2021-12-24",
            quantity: true,
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
tbody {
  font-size: 16px;
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
.results-number {
  margin-left: 32px;
}
#basic-addon1 {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 0px;
  border-top-left-radius: 0px;
}
.arrow {
  margin-left: 10px;
  height: 10px;
  width: 10px;
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
input[type="date"]::-webkit-calendar-picker-indicator {
 position: absolute; left: 0; }
input::-webkit-datetime-edit { position: relative; left: 0; }
input::-webkit-datetime-edit-fields-wrapper { position: relative; left: 0; }
input{
  text-align: center;

}


.form-control {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
    -moz-box-shadow:    inset 0 0 1px #000000;
   -webkit-box-shadow: inset 0 0 1px #000000;
   box-shadow:         inset 0 0 1px #000000;

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
a {
    color: black;
    text-decoration: none;
    background-color: transparent;
    text-decoration: none;
}
a:hover {
  color: blue;
}
.attachment {
  margin-left: 5px;
  height: 16px;
  width: 16px;
  float: right;
}

.email-no {
    border: 0.5px black;
    border-radius: 5px;
    width: 24px;
    height: 18px;
    font-size: 12px;
    font-weight: 700;
    background-color: #999797;
    color: white;
    text-align: center;
    display: inline-block;
    margin-left: 55px;

}
.bottom-border {
    padding: .75rem;
    vertical-align: top;
    border-top: 2px solid #dee2e6;
}
@media (max-width: 1200px) {
  table {
    width: 100%;
    font-size: 12px;
    text-indent: none;
}
tr {
  font-size: 12px;
  vertical-align: middle
}
  }

</style>

