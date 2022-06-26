// Belly Button Biodiversity 
// using data from samples.json
// Interactive selection. Bubble, Bar and Gauge Charts
 
// d3.json("samples.json").then(function(data){console.log(data);});


// Color palette for Gauge Chart
let arrColorsG = ["#FF6666", "#FF8BA0", "#FFC2A6", "#F9DE87", "#FCE9C4", "#D3E5CF", "#BBDD93", "#85B88B", "#AFC86D", "white"];


// Use D3 to fetch the metadata for a sample
function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    let metadata = data.metadata;
    let resultsarray = metadata.filter(sampleobject => 
      sampleobject.id == sample);
    let result= resultsarray[0]

    // Use d3 to select the panel with id of `#sample-metadata`
    let panel = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    panel.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    Object.entries(result).forEach(([key, value]) => {
      panel.append("h6").text(`${key.toUpperCase()}: ${value}`);
      return currentSubject = `${sample}`;
    });
  });
}

//Gauge Chart Function/

function buildGaugeChart(sample) {
  // console.log("sample", sample);

  d3.json("samples.json").then(data =>{

    let objs = data.metadata;
    //console.log("objs", objs);

    let matchedSampleObj = objs.filter(sampleData => 
      sampleData["id"] === parseInt(sample));
    //console.log("buildGaugeChart matchedSampleObj", matchedSampleObj);

    gaugeChart(matchedSampleObj[0]); 
 });    
}
 
//Build a GAUGE Chart

function gaugeChart(data) { 
  // console.log("gaugeChart", data); 

  if(data.wfreq === null){
    data.wfreq = 0; 
  }

  let degree = parseInt(data.wfreq) * (180/10); 

  // Trig to calculate needle direction 
  let degrees = 180 - degree; 
  let radius = .5; 
  let radians = degrees * Math.PI / 180; 
  let x = radius * Math.cos(radians); 
  let y = radius * Math.sin(radians); 

  // Calculate needle size  
  let mainPath = 'M -.0 -0.025 L .0 0.025 L ', 
      pathX = String(x), 
      space = ' ', 
      pathY = String(y),
      pathEnd = ' Z';  
  let path = mainPath.concat(pathX, space, pathY, pathEnd);
   
  let trace = [{ type: 'scatter', 
     x: [0], y:[0], 
      marker: {size: 25, color:'#A36F58'}, 
      showlegend: false, 
      name: 'WASH FREQ', 
      text: data.wfreq, 
      hoverinfo: 'text+name'}, 
    { values: [1, 1, 1, 1, 1, 1, 1, 1, 1, 9], 
    rotation: 90, 
    text: ['8-9', '7-8', '6-7', '5-6', '4-5', '3-4', '2-3', '1-2', '0-1',''], 
    textinfo: 'text', 
    textposition:'inside', 
    textfont:{ 
      size : 20, 
      }, 
    marker: {colors:[...arrColorsG]}, 
    hovertemplate: 
    `<b>Number of Belly Button Cleanings Per Week</b><br>%{text}<extra></extra>` , 
    hole: .5, 
    type: 'pie', 
    showlegend: false 
  }]; 

  let layout = {
    shapes:[{
        type: 'path', 
        path: path, 
        fillcolor: '#A36F58', 
        line: {
          color: '#A36F58' 
        } 
      }],
    title: '<b>Belly Button Washing Frequency</b> <br> <b>Scrubs Per Week</b>',
    height: 550, 
    width: 550,
    margin: {t: 100, l: 80, r: 80, b: 0},
    xaxis: {zeroline:false, showticklabels:false, 
               showgrid: false, range: [-1, 1]}, 
    yaxis: {zeroline:false, showticklabels:false, 
               showgrid: false, range: [-1, 1]}, 
  }; 

  Plotly.newPlot('gauge', trace, layout, {responsive: true}); 
}

//Bubble and Bar Chart Functions 

function buildCharts(sample) { 

d3.json("samples.json").then((data) => { 
  let samples= data.samples; 
  let resultsarray= samples.filter(sampleobject =>  
      sampleobject.id == sample); 
  let result= resultsarray[0] 

  let ids = result.otu_ids; 
  let labels = result.otu_labels; 
  let values = result.sample_values; 

// Build a BUBBLE Chart 
  let layoutBubble = { 
    margin: { t: 50,  l: 125}, 
    xaxis: { title: "Operational Taxonomic Unit ID"}, 
    yaxis: { title: "Bacteria Count"}, 
    title: `<b>Culture Observations for Test Subject: ${currentSubject}</b>`, 
    hovermode: "closest", 
    }; 

    let dataBubble = [  
    {
      x: ids, 
      y: values, 
      text: labels, 

      mode: "markers", 
      marker: { 
        color: ids, 
        showscale: true, 
        size: values, 
        },   
        hovertemplate: 
        `<b>Result Information</b><br>%{yaxis.title.text}: %{y:}<br>%{xaxis.title.text}: %{x:}<br><br>Colonies Found<br>%{text}<extra></extra>`   
    } 
  ];

  // console.log("layout", layoutBubble);
  // console.log("current subject", currentSubject); 

  Plotly.newPlot("bubble", dataBubble, layoutBubble); 

// Build a BAR Chart
  let barData =[
    {
      y:ids.slice(0, 10).map(otuID => `OTU ${otuID} `).reverse(), 
      x:values.slice(0,10).reverse(), 
      text:labels.slice(0,10).reverse(), 
      marker: {color: '#eba85e'}, 
      type:"bar", 
      orientation:"h", 
      hovertemplate: 
      `<b>Number of Colonies found:</b><br>%{x:}<br><br>Colony Types Found<br>%{text}<extra></extra>`  
    }
  ];

  let barLayout = { 
    margin: { t: 80, l: 125}, 
    title: '<b>Top 10 Bacteria Cultures Found</b>' 
}; 

  Plotly.newPlot("bar", barData, barLayout); 
}); 
} 

// Function init 

function init() {
// Grab a reference to the dropdown select element 
let selector = d3.select("#selDataset"); 

// Use the list of sample ids to populate the select options
d3.json("samples.json").then((data) => {
  let sampleNames = data.names;
  sampleNames.forEach((sample) => {
    selector
      .append("option")
      .text(sample)
      .property("value", sample);
  });

  // Use the first sample from the list to build the initial plots
  const firstSample = sampleNames[0];
  buildMetadata(firstSample); 
  buildCharts(firstSample); 
  buildGaugeChart(firstSample) 
}); 
}

// Get new data each time a new sample is selected
function optionChanged(newSample) { 
  buildMetadata(newSample); 
  buildCharts(newSample); 
  buildGaugeChart(newSample) 
}

// Initialize the dashboard 
init(); 