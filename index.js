// Text-Processing API Url
const API_URL = 'https://japerk-text-processing.p.rapidapi.com/sentiment/';
// RapidAPI request headers
const REQUEST_HEADERS = {
  'X-RapidAPI-Host': 'japerk-text-processing.p.rapidapi.com'
  , 'X-RapidAPI-Key': '7xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
  , 'Content-Type': 'application/x-www-form-urlencoded'
};


const analyzeEmail = (email, callback) => {
  // Creating an object to send to the server
  const data = {
          text: email
          , language: 'english'
  };
  // Encoding data for application/x-www-form-urlencoded content type
  const formattedData = Qs.stringify(data);
  // POST request to server
  axios.post(API_URL, formattedData, { headers: REQUEST_HEADERS })
          .then(response => {
             const data = response.data;
            // Calling a callback function with data from the server
            callback(data)
          })
          .catch(error => console.error(error))
};


$(function() {

    var start = moment().subtract(29, 'days');
    var end = moment();

    function cb(start, end) {
        $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
    }

    $('#reportrange').daterangepicker({
        startDate: start,
        endDate: end,
        ranges: {
           'Today': [moment(), moment()],
           'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
           'Last 7 Days': [moment().subtract(6, 'days'), moment()],
           'Last 30 Days': [moment().subtract(29, 'days'), moment()],
           'This Month': [moment().startOf('month'), moment().endOf('month')],
           'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        }
    }, cb);

    cb(start, end);

});

function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}


