$(document).ready(function() {

  $('#timeRange').val(0);
  $('.floating-label .custom-select, .floating-label .form-control').floatinglabel();
  //Waves.attach('.btn');
  //Waves.init();
  show_plots()

$('#timeRange').on('input', function(event, ui) {
	//console.log($('#timeRange').val())
    show_plots()
});

})

let firstExp = {"0 h ":{"Correlation":0.1589404404,"p":0.5565671862},"0 h 10 min":{"Correlation":0.2178072702,"p":0.4177357681},"0 h 20 min":{"Correlation":0.4205882353,"p":0.1047675139},"0 h 30 min":{"Correlation":0.1764705882,"p":0.5132505967},"0 h 40 min":{"Correlation":0.1,"p":0.7125163701},"0 h 50 min":{"Correlation":0.5117647059,"p":0.0427234482},"1 h ":{"Correlation":0.0882352941,"p":0.7452220944},"1 h 10 min":{"Correlation":0.3676470588,"p":0.1612323577},"1 h 20 min":{"Correlation":0.1911764706,"p":0.4781640128},"1 h 30 min":{"Correlation":0.1648271234,"p":0.5418467058},"1 h 40 min":{"Correlation":0.1676470588,"p":0.5348568246},"1 h 50 min":{"Correlation":0.247240685,"p":0.3559096492},"2 h ":{"Correlation":0.3647058824,"p":0.1648683972},"2 h 10 min":{"Correlation":0.4235294118,"p":0.1021093221},"2 h 20 min":{"Correlation":0.3558823529,"p":0.1761037381},"2 h 30 min":{"Correlation":0.3264705882,"p":0.2171594906},"2 h 40 min":{"Correlation":0.3090508563,"p":0.2441335014},"2 h 50 min":{"Correlation":0.3090508563,"p":0.2441335014},"3 h ":{"Correlation":0.3323529412,"p":0.208499828},"3 h 10 min":{"Correlation":0.2882352941,"p":0.2789844597},"3 h 20 min":{"Correlation":0.3058823529,"p":0.2492542989},"3 h 30 min":{"Correlation":0.2882352941,"p":0.2789844597},"3 h 40 min":{"Correlation":0.3235294118,"p":0.221574125},"3 h 50 min":{"Correlation":0.2735294118,"p":0.3053231563},"4 h ":{"Correlation":0.2911764706,"p":0.2738870484},"4 h 10 min":{"Correlation":0.3,"p":0.2589364526},"4 h 20 min":{"Correlation":0.2411764706,"p":0.368206608},"4 h 30 min":{"Correlation":0.2794117647,"p":0.2946176536},"4 h 40 min":{"Correlation":0.2764705882,"p":0.2999421285},"4 h 50 min":{"Correlation":0.2647058824,"p":0.3218043959},"5 h ":{"Correlation":0.2617647059,"p":0.3274104118},"5 h 10 min":{"Correlation":0.2411764706,"p":0.368206608},"5 h 20 min":{"Correlation":0.2382352941,"p":0.3742541297},"5 h 30 min":{"Correlation":0.2205882353,"p":0.4116664305},"5 h 40 min":{"Correlation":0.2323529412,"p":0.3865113499},"5 h 50 min":{"Correlation":0.2205882353,"p":0.4116664305},"6 h ":{"Correlation":0.2176470588,"p":0.4180868416},"6 h 10 min":{"Correlation":0.2529411765,"p":0.3445630313},"6 h 20 min":{"Correlation":0.2647058824,"p":0.3218043959},"6 h 30 min":{"Correlation":0.2882352941,"p":0.2789844597},"6 h 40 min":{"Correlation":0.3088235294,"p":0.2444986958},"6 h 50 min":{"Correlation":0.2882352941,"p":0.2789844597},"7 h ":{"Correlation":0.3029411765,"p":0.2540668806},"7 h 10 min":{"Correlation":0.3205882353,"p":0.2260454222},"7 h 20 min":{"Correlation":0.3029411765,"p":0.2540668806},"7 h 30 min":{"Correlation":0.3088235294,"p":0.2444986958},"7 h 40 min":{"Correlation":0.3088235294,"p":0.2444986958},"7 h 50 min":{"Correlation":0.3088235294,"p":0.2444986958},"8 h ":{"Correlation":0.3088235294,"p":0.2444986958}}

let secondExp = {"0 h ":{"Correlation":-0.7352941176,"p":0.0011716155},"0 h 10 min":{"Correlation":-0.8235294118,"p":0.0000883914},"0 h 20 min":{"Correlation":-0.4235294118,"p":0.1021093221},"0 h 30 min":{"Correlation":-0.2088235294,"p":0.4376585109},"0 h 40 min":{"Correlation":-0.3852941176,"p":0.1405441774},"0 h 50 min":{"Correlation":-0.5941176471,"p":0.0152324009},"1 h ":{"Correlation":-0.6470588235,"p":0.006742077},"1 h 10 min":{"Correlation":-0.4558823529,"p":0.0759454912},"1 h 20 min":{"Correlation":-0.0823529412,"p":0.7617330788},"1 h 30 min":{"Correlation":-0.2852941176,"p":0.2841387402},"1 h 40 min":{"Correlation":-0.2764705882,"p":0.2999421285},"1 h 50 min":{"Correlation":-0.0235294118,"p":0.9310735837},"2 h ":{"Correlation":0.0794117647,"p":0.770025319},"2 h 10 min":{"Correlation":0.3441176471,"p":0.1918556314},"2 h 20 min":{"Correlation":0.4235294118,"p":0.1021093221},"2 h 30 min":{"Correlation":0.5,"p":0.0485802889},"2 h 40 min":{"Correlation":0.55,"p":0.0272939727},"2 h 50 min":{"Correlation":0.5441176471,"p":0.0293363375},"3 h ":{"Correlation":0.5617647059,"p":0.0235370165},"3 h 10 min":{"Correlation":0.5176470588,"p":0.040001793},"3 h 20 min":{"Correlation":0.5352941176,"p":0.0326158633},"3 h 30 min":{"Correlation":0.5323529412,"p":0.033768623},"3 h 40 min":{"Correlation":0.55,"p":0.0272939727},"3 h 50 min":{"Correlation":0.55,"p":0.0272939727},"4 h ":{"Correlation":0.5411764706,"p":0.0304002189},"4 h 10 min":{"Correlation":0.5705882353,"p":0.0209906964},"4 h 20 min":{"Correlation":0.5588235294,"p":0.0244365114},"4 h 30 min":{"Correlation":0.5764705882,"p":0.0194151404},"4 h 40 min":{"Correlation":0.5852941176,"p":0.0172252866},"4 h 50 min":{"Correlation":0.5617647059,"p":0.0235370165},"5 h ":{"Correlation":0.5558823529,"p":0.0253621763},"5 h 10 min":{"Correlation":0.5647058824,"p":0.0226632048},"5 h 20 min":{"Correlation":0.5764705882,"p":0.0194151404},"5 h 30 min":{"Correlation":0.5470588235,"p":0.0283010872},"5 h 40 min":{"Correlation":0.5735294118,"p":0.020191038},"5 h 50 min":{"Correlation":0.5941176471,"p":0.0152324009},"6 h ":{"Correlation":0.5823529412,"p":0.0179327341},"6 h 10 min":{"Correlation":0.5529411765,"p":0.0263144999},"6 h 20 min":{"Correlation":0.5941176471,"p":0.0152324009},"6 h 30 min":{"Correlation":0.5823529412,"p":0.0179327341},"6 h 40 min":{"Correlation":0.5470588235,"p":0.0283010872},"6 h 50 min":{"Correlation":0.5764705882,"p":0.0194151404},"7 h ":{"Correlation":0.5823529412,"p":0.0179327341},"7 h 10 min":{"Correlation":0.5941176471,"p":0.0152324009},"7 h 20 min":{"Correlation":0.5529411765,"p":0.0263144999},"7 h 30 min":{"Correlation":0.5470588235,"p":0.0283010872},"7 h 40 min":{"Correlation":0.5264705882,"p":0.036166515},"7 h 50 min":{"Correlation":0.4970588235,"p":0.0501335578},"8 h ":{"Correlation":0.4941176471,"p":0.0517234422}}

let thirdExp = {"0 h ":{"Correlation":-0.85,"p":0.0000305226},"0 h 10 min":{"Correlation":-0.8882352941,"p":0.0000043263},"0 h 20 min":{"Correlation":-0.7411764706,"p":0.0010184695},"0 h 30 min":{"Correlation":-0.8235294118,"p":0.0000883914},"0 h 40 min":{"Correlation":-0.6882352941,"p":0.0032039086},"0 h 50 min":{"Correlation":-0.7176470588,"p":0.0017475351},"1 h ":{"Correlation":-0.8529411765,"p":0.0000267907},"1 h 10 min":{"Correlation":-0.6460634567,"p":0.006855472},"1 h 20 min":{"Correlation":-0.7852941176,"p":0.0003128539},"1 h 30 min":{"Correlation":-0.4882352941,"p":0.0550150298},"1 h 40 min":{"Correlation":-0.5588235294,"p":0.0244365114},"1 h 50 min":{"Correlation":-0.5176470588,"p":0.040001793},"2 h ":{"Correlation":-0.45,"p":0.0802957365},"2 h 10 min":{"Correlation":-0.1147058824,"p":0.6722910466},"2 h 20 min":{"Correlation":-0.1588235294,"p":0.5568612811},"2 h 30 min":{"Correlation":0.0147058824,"p":0.956891924},"2 h 40 min":{"Correlation":0.0764705882,"p":0.778340981},"2 h 50 min":{"Correlation":0.0294117647,"p":0.9138955873},"3 h ":{"Correlation":0.1176470588,"p":0.6643410792},"3 h 10 min":{"Correlation":0.1235294118,"p":0.648542067},"3 h 20 min":{"Correlation":0.1735294118,"p":0.5204075144},"3 h 30 min":{"Correlation":0.1735294118,"p":0.5204075144},"3 h 40 min":{"Correlation":0.2117647059,"p":0.4310832472},"3 h 50 min":{"Correlation":0.2176470588,"p":0.4180868416},"4 h ":{"Correlation":0.2058823529,"p":0.4442846411},"4 h 10 min":{"Correlation":0.2058823529,"p":0.4442846411},"4 h 20 min":{"Correlation":0.2,"p":0.4576879051},"4 h 30 min":{"Correlation":0.2,"p":0.4576879051},"4 h 40 min":{"Correlation":0.2,"p":0.4576879051},"4 h 50 min":{"Correlation":0.1911764706,"p":0.4781640128},"5 h ":{"Correlation":0.1970588235,"p":0.4644642112},"5 h 10 min":{"Correlation":0.2117647059,"p":0.4310832472},"5 h 20 min":{"Correlation":0.1941176471,"p":0.4712897284},"5 h 30 min":{"Correlation":0.2,"p":0.4576879051},"5 h 40 min":{"Correlation":0.2117647059,"p":0.4310832472},"5 h 50 min":{"Correlation":0.1970588235,"p":0.4644642112},"6 h ":{"Correlation":0.2117647059,"p":0.4310832472},"6 h 10 min":{"Correlation":0.1970588235,"p":0.4644642112},"6 h 20 min":{"Correlation":0.2117647059,"p":0.4310832472},"6 h 30 min":{"Correlation":0.1970588235,"p":0.4644642112},"6 h 40 min":{"Correlation":0.1970588235,"p":0.4644642112},"6 h 50 min":{"Correlation":0.1970588235,"p":0.4644642112},"7 h ":{"Correlation":0.1941176471,"p":0.4712897284},"7 h 10 min":{"Correlation":0.2,"p":0.4576879051},"7 h 20 min":{"Correlation":0.1823529412,"p":0.4990748572},"7 h 30 min":{"Correlation":0.1764705882,"p":0.5132505967},"7 h 40 min":{"Correlation":0.1764705882,"p":0.5132505967},"7 h 50 min":{"Correlation":0.1617647059,"p":0.5494831434},"8 h ":{"Correlation":0.1823529412,"p":0.4990748572}}

let corrs_f = []
let corrs_s = []
let corrs_t = []
$.each(firstExp, function(_, obj) {corrs_f.push(obj['Correlation'])})
$.each(secondExp, function(_, obj) {corrs_s.push(obj['Correlation'])})
$.each(thirdExp, function(_, obj) {corrs_t.push(obj['Correlation'])})

let times = ['0 h ', '0 h 10 min', '0 h 20 min', '0 h 30 min', '0 h 40 min',
  '0 h 50 min', '1 h ', '1 h 10 min', '1 h 20 min', '1 h 30 min',
  '1 h 40 min', '1 h 50 min', '2 h ', '2 h 10 min', '2 h 20 min',
  '2 h 30 min', '2 h 40 min', '2 h 50 min', '3 h ', '3 h 10 min',
  '3 h 20 min', '3 h 30 min', '3 h 40 min', '3 h 50 min', '4 h ',
  '4 h 10 min', '4 h 20 min', '4 h 30 min', '4 h 40 min', '4 h 50 min',
  '5 h ', '5 h 10 min', '5 h 20 min', '5 h 30 min', '5 h 40 min',
  '5 h 50 min', '6 h ', '6 h 10 min', '6 h 20 min', '6 h 30 min',
  '6 h 40 min', '6 h 50 min', '7 h ', '7 h 10 min', '7 h 20 min',
  '7 h 30 min', '7 h 40 min', '7 h 50 min', '8 h '
]

let scores = [5.78,
  7.07,
  9.67,
  32.09,
  33.2,
  37.81,
  48.39,
  55.67,
  57.84,
  62.89,
  70.16,
  71.18,
  75.2,
  95.43,
  96.72,
  97.75,

]





function plot_data() {
  let i = !$('#timeRange').val() ? 0 : $('#timeRange').val()
  var d = []
  var names = ['First', 'Second', 'Third']
  var colors = ['#1f77b4', '#ff7f0e', '#d62728']
  for (let j = 1; j <= 3; j++) {
    Plotly.d3.csv('static/data/' + j + '.csv', (err, rows) => {
      let fl = []
      $.each(rows, function(index, item) {
        fl.push(item[times[i]])
      })
      var data = {
        mode: 'line',
        name: names[j - 1] + ' replicate',
        x: scores,
        y: fl,
        marker: {
          color: colors[j - 1],
        },
        line: {
          // 'shape': 'spline',
          // 'smoothing': 1.3
        }
      }
      d.push(data)

      var layout = {
        title: 'Time: ' + times[i] + ' post induction',
        font: {
          size: 12
        },
        yaxis: {
          title: 'Fluorescence normalised by native GFP',
		  range: [0.2, 1.3]
        },
        xaxis: {
          title: 'Expression score'
        }
      }

      var config = {
        responsive: true,
        'displayModeBar': false
      }

      Plotly.newPlot('graph', d, layout, config)
    })
  }

}






function plot_bar() {
  let i = !$('#timeRange').val() ? 0 : $('#timeRange').val()
  // let corr = [];
  // let p = [];
  // for (let j = 1; j <= 3; j++) {
  //   $.getJSON("static/data/" + j + "_corr.json", function(json) {
  //     corr.push(json[times[i]]['Correlation']);
  //     p.push((json[times[i]]['p']));
  //     // console.log(json[times[i]]['Correlation']); // this will show the info it in firebug console
  //   });
  // }


  var data = {
    x: ['First', 'Second', 'Third'],
    y: [corrs_f[i], corrs_s[i], corrs_t[i]],
    type: 'bar',
    marker: {
      color: ['#1f77b4', '#ff7f0e', '#d62728'],
    },
  };



  var layout = {
    title: 'Correlation between <br> Fluorescence and <br> expression score ',
    font: {
      size: 12
    },
    yaxis: {
      title: "Spearman's Rho",
      range: i >= 15 ? [0.0, 0.6]:[-0.8, 0.2]
    },
    xaxis: {
      title: 'Replicates'
    }
  }
  var config = {
    responsive: true,
    'displayModeBar': false
  }

  Plotly.newPlot('bar', [data], layout, config);
}


function show_plots(){
  plot_data()
  plot_bar()
}


