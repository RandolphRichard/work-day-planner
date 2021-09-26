// Moment Time Format
var restore = function () {
    document.querySelector("#currentDay").innerHTML = moment().format("dddd, MMMM Do YYYY, h:mm:ss A");
  };
  setInterval(restore, 1000);


  //Save Notes

$(document).ready(function () {
    var timeFrame = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
    function renderPlans() {
      for (var i = 0; i <= timeFrame.length; i++) {
        $("#" + timeFrame[i]).val(localStorage.getItem(timeFrame[i]));
      }
    }
    renderPlans();
  
    $(".saveBtn").click(function () {
      var dataHour = $(this).attr("data-hour");
      var inputField = $("#" + dataHour).val();
  
      localStorage.setItem(dataHour, inputField);
      console.log("At "+dataHour+" o'clock You should do: "+inputField);  
    });
   
});

//   Delete Notes
$("#6amdeleteN").click(function () {
  $("#6").val("");
  localStorage.setItem(8, "");
  console.log("6 Am task got deleted")
});

$("#7amdeleteN").click(function () {
  $("#7").val("");
  localStorage.setItem(8, "");
  console.log("7 Am task got deleted")
});
$("#8amdeleteN").click(function () {
    $("#8").val("");
    localStorage.setItem(8, "");
    console.log("8 Am task got deleted")
  });

  $("#9amdeleteN").click(function () {
    $("#9").val("");
    localStorage.setItem(9, "");
    console.log("9 Am task got deleted")
  });

  $("#10amdeleteN").click(function () {
    $("#10").val("");
    localStorage.setItem(10, "");
    console.log("10 Am task got deleted")
  });

  $("#11amdeleteN").click(function () {
    $("#11").val("");
    localStorage.setItem(11, "");
    console.log("11 Am task got deleted")
  });

  $("#12pmdeleteN").click(function (event) {
    event.preventDefault();
    $("#12").val("");
    localStorage.setItem(12, "");
    console.log("12 Pm task got deleted")
  });

  $("#1pmdeleteN").click(function () {
    $("#13").val("");
    localStorage.setItem(13, "");
    console.log("13 Pm task got deleted")
  });

  $("#2pmdeleteN").click(function () {
    $("#14").val("");
    localStorage.setItem(14, "");
    console.log("14 Pm task got deleted")
  });

  $("#3pmdeleteN").click(function () {
    $("#15").val("");
    localStorage.setItem(15, "");
    console.log("15 Pm task got deleted")
  });

  $("#4pmdeleteN").click(function () {
    $("#16").val("");
    localStorage.setItem(16, "");
    console.log("16 Pm task got deleted")
  });

  $("#5pmdeleteN").click(function () {
    $("#17").val("");
    localStorage.setItem(17, "");
    console.log("17 Pm task got deleted")
  });

  $("#6pmdeleteN").click(function () {
    $("#18").val("");
    localStorage.setItem(18, "");
    console.log("18 Pm task got deleted")
  });

  $("#7pmdeleteN").click(function () {
    $("#19").val("");
    localStorage.setItem(19, "");
    console.log("19 Pm task got deleted")
  });

  $("#8pmdeleteN").click(function () {
    $("#20").val("");
    localStorage.setItem(20, "");
    console.log("20 Pm task got deleted")
  });

  $("#9pmdeleteN").click(function () {
    $("#21").val("");
    localStorage.setItem(21, "");
    console.log("21 Pm task got deleted")
  });

  // set color based on the real time of the day
var time = $(".row");
var currentTime = parseInt(moment().hours());

Array.from(time).forEach((row) => {
  var rowIdSlot = row.id,
    rowTime;
  if (rowIdSlot) {
    rowTime = parseInt(rowIdSlot);
  }
  if (rowTime < 6) {
    rowTime += 12;
  }
  if (rowTime) {
    // set color based on time frame
    if (currentTime === rowTime) {
      setColor(row, "lightgreen");
    } else if (currentTime < rowTime) {
      setColor(row, "lightblue");
    } else if (currentTime > rowTime) {
      setColor(row, "grey");
    }
  }
});

function setColor(element, color) {
  element.style.backgroundColor = color;
}

