javascript: (function() {
  
  // remove records that are not absenteeism
  var tds = document.querySelectorAll("tr > td:nth-child(37)");
  
  for (var i = 0; i < tds.length; i++) {
    if (tds[i].innerText === "") {
      tds[i].parentElement.remove();
    }
  }

  // remove class tables that don't have any record
  var tables = document.querySelectorAll("table");

  for (var j = 0; j < tables.length; j++) {
    if (tables[j].children[0].children.length === 1) {
      tables[j].children[0].children[0].setAttribute("colspan", "39");
    }
    if (tables[j].children[0].children.length === 3) {
      tables[j].previousSibling.previousSibling.previousSibling.previousSibling.remove();
      tables[j].remove();
    }
  }
})()