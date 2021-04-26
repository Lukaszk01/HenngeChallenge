<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <h1>Events For Good</h1>
    <router-view />
  </div>
 <!--  <div id="reportrange" style="background: #fff; cursor: pointer; padding: 5px 10px; border: 1px solid #ccc; width: 20%">
    <i class="fa fa-calendar"></i>&nbsp;
    <span></span> <i class="fa fa-caret-down"></i>
</div> <button id="submit" href="#"></button>
<div id="callendar">
</div>


 <div class="calimg">
 </div>
<div class="results ml-3">
  <h4>Results: 10mail(s)</h4>
</div>
  <div class="position-relative d-flex flex-row-reverse flex-lg-row flex-wrap flex-lg-nowrap flex-justify-center flex-lg-justify-between pt-6 pb-2 mt-6 f6 text-gray border-top border-gray-light mt-3 mb-3"></div>

 <div class="container col-12 md-8 sm-3">
    <div class="mail-list">
  <table id="myTable" class="table table-hover">
  <thead>
    <tr>
      <th class="table-active" scope="col">From</th>
      <th class="table-active" scope="col">To</th>
      <th class="table-active" scope="col">Subject</th>
      <th class="table-active" scope="col"> <strong>Date</strong> </th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for names..">

      <td>zzz.zzz@example.com</td>
      <td>mmm@example.com</td>
      <td>[ HR-888 ] Notice of official announcement</td>
      <td>0:20</td>

    </tr>
    <tr>

      <td>bbb.bbbb@example.com</td>
      <td>ppp@example.com</td>
      <td>[Github] Logout page</td>
      <td>0:24</td>
    </tr>
    <tr>
      <td>ccc.bbbb@example.com</td>
      <td>rrr.bbbb@example.com</td>
      <td>[dev]Postfix 3.1.12 / 3.2.9 / 3.3.4 / 3.4.5</td>
      <td>Jan 01</td>
    </tr>
    <tr>
      <td>dddd@example.com</td>
      <td>xxx@example.com</td>
      <td>[ HR-888 ] Notice of official announcement</td>
      <td>Jan 02</td>
    </tr>
    <tr>
      <td>ffff.bbbb@example.com</td>
      <td>gggg@example.com</td>
      <td>[Github] Logout page</td>
      <td>2019/12/31</td>
    </tr>
    <tr>
      <td>ccc.bbbb@example.com</td>
      <td>rrr.bbbb@example.com</td>
      <td>[dev]Postfix 3.1.12 / 3.2.9 / 3.3.4 / 3.4.5</td>
      <td>2019/12/30</td>
    </tr>

  </tbody>
</table>
</div>

  </div> -->
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>


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
