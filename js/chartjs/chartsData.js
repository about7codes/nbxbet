
// Chart A  *******************************************************

let chartA = document.getElementById('chart-a').getContext('2d');

let statsA = new Chart(chartA, {
    type:'doughnut', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data:{
      labels:['team-a', 'team-b'],
      datasets:[{
        label:'Team',
        data:[
          97,
          3,
          
        ],
        //backgroundColor:'green',
        backgroundColor:[
          'rgb(100,176,0)',
          'rgb(107,110,120)'
        ],
        weight:1,
        borderWidth:0,
        borderColor:'#777',
        hoverBorderWidth:0,
        hoverBorderColor:'#000'
      }]
    },
    options:{
      cutoutPercentage: 55,
      responsive:true,
      maintainAspectRatio: false,
      
      legend:{
        display:false,
        position:'right',
        labels:{
          fontColor:'#000'
        }
      },
      layout:{
        padding:{
          left:0,
          right:0,
          bottom:0,
          top:0
        }
      },
      tooltips:{
        enabled:false
      }
    }
});



  
// Chart B  **********************************************************************************

let chartB = document.getElementById('chart-b').getContext('2d');

let statsB = new Chart(chartB, {
    type:'doughnut', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data:{
      labels:['team-a', 'team-b'],
      datasets:[{
        label:'Team',
        data:[
          99,
          1,
          
        ],
        //backgroundColor:'green',
        backgroundColor:[
          'rgb(100,176,0)',
          'rgb(107,110,120)'
        ],
        borderWidth:0,
        borderColor:'#777',
        hoverBorderWidth:0,
        hoverBorderColor:'#000'
      }]
    },
    options:{
      cutoutPercentage: 55,
      responsive:true,
      maintainAspectRatio: false,
      
      legend:{
        display:false,
        position:'right',
        labels:{
          fontColor:'#000'
        }
      },
      layout:{
        padding:{
          left:0,
          right:0,
          bottom:0,
          top:0
        }
      },
      tooltips:{
        enabled:false
      }
    }
});



// Chart C  ********************************************************************************************

let chartC = document.getElementById('chart-c').getContext('2d');

let statsC = new Chart(chartC, {
    type:'doughnut', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data:{
      labels:['team-a', 'team-b'],
      datasets:[{
        label:'Team',
        data:[
          99,
          1,
          
        ],
        //backgroundColor:'green',
        backgroundColor:[
          'rgb(100,176,0)',
          'rgb(107,110,120)'
        ],
        borderWidth:0,
        borderColor:'#777',
        hoverBorderWidth:0,
        hoverBorderColor:'#000'
      }]
    },
    options:{
      cutoutPercentage: 55,
      responsive:true,
      maintainAspectRatio: false,
      
      legend:{
        display:false,
        position:'right',
        labels:{
          fontColor:'#000'
        }
      },
      layout:{
        padding:{
          left:0,
          right:0,
          bottom:0,
          top:0
        }
      },
      tooltips:{
        enabled:false
      }
    }
});


// Chart D  ********************************************************************************************

let chartD = document.getElementById('chart-d').getContext('2d');

let statsD = new Chart(chartD, {
    type:'doughnut', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data:{
      labels:['team-a', 'team-b'],
      datasets:[{
        label:'Team',
        data:[
          98,
          2,
          
        ],
        //backgroundColor:'green',
        backgroundColor:[
          'rgb(100,176,0)',
          'rgb(107,110,120)'
        ],
        borderWidth:0,
        borderColor:'#777',
        hoverBorderWidth:0,
        hoverBorderColor:'#000'
      }]
    },
    options:{
      cutoutPercentage: 55,
      responsive:true,
      maintainAspectRatio: false,
      
      legend:{
        display:false,
        position:'right',
        labels:{
          fontColor:'#000'
        }
      },
      layout:{
        padding:{
          left:0,
          right:0,
          bottom:0,
          top:0
        }
      },
      tooltips:{
        enabled:false
      }
    }
});