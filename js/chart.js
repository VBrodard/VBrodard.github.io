function drawChart(){var a=google.visualization.arrayToDataTable([["Year","Goal","Achieved"],["2019",1e3,1e3],["2020",1e4,2e4],["2021",5e4,77470]]);new google.visualization.ColumnChart(document.getElementById("chart_div")).draw(a,{chart:{title:"Impact",subtitle:"Goals and amount of planted trees: 2019-2021"},title:"Impact",height:400,width:400,chartArea:{width:"95%",height:"80%"},legend:{position:"top"},colors:["#9eaa3e","#385907"],vAxis:{title:"Planted trees"},hAxis:{title:"Years"}})}google.charts.load("current",{packages:["corechart"]}),google.charts.setOnLoadCallback(drawChart);