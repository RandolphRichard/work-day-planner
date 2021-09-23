// Moment Time Format
var restore = function () {
    document.querySelector("#currentDay").innerHTML = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
  };
  setInterval(restore, 1000);


  //Save Notes

$(document).ready(function () {
    var timeFrame = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
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

  $("#12pmdeleteN").click(function () {
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
    console.log("14 Pm task got deleted")
  });

  $("#4pmdeleteN").click(function () {
    $("#16").val("");
    localStorage.setItem(16, "");
    console.log("15 Pm task got deleted")
  });

  $("#5pmdeleteN").click(function () {
    $("#17").val("");
    localStorage.setItem(17, "");
    console.log("16 Pm task got deleted")
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
  if (rowTime < 8) {
    rowTime+= 12;
  }
  if (rowTime) {
    // set color based on time frame
    if (currentTime === rowTime) {
      setColor(row, "lightgreen");
    } else if (currentTime < rowTime) {
      setColor(row, "beige");
    } else if (currentTime > rowTime) {
      setColor(row, "beige");
    }
  }
});

function setColor(element, color) {
  element.style.backgroundColor = color;
}

