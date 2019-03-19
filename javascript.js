const movieTitles = ["Iron Man", "The Incredible Hulk", "Iron Man 2", "Thor", "Captain America: The First Avenger", "The Avengers", "Iron Man 3", "Thor: The Dark World", "Captain America: The Winter Soldier", "Guardians of the Galaxy", "Avengers: Age of Ultron", "Ant-Man", "Captain America: Civil War", "Doctor Strange", "Guardians of the Galaxy Vol.2", "Spider-Man: Homecoming", "Thor: Ragnarok", "Black Panther", "Avengers: Infinity War", "Ant-Man and the Wasp" ]
const dataset = [585.2, 263.4, 623.9, 449.3, 370.6, 1518.8, 1214.8, 644.6, 714.3, 773.3, 1405.4, 516.3, 1153.3, 677.7, 863.8, 880.2, 854.0, 1346.9, 2048.4, 622.7];
const movieYears = [2008, 2008, 2010, 2011, 2011, 2012, 2013, 2013, 2014, 2014, 2015, 2015, 2016, 2016, 2017, 2017, 2017, 2018, 2018, 2018]
/*let h = 600; 
let w = 795;
let p = 10;
const scale = d3.scaleLinear()
  .domain([0, 2200])
  .range([500, 0])
const svg = d3.select("svg").attr("width", w).attr("height", h);
const axis = d3.svg.axis()
  //.tickValues(0, 200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000, 2200)
  .scale(scale)
  .orient("left")
  .ticks("12");
svg.append("g")
  .attr("transform", "translate(0," + h + ")")
  .call(d3.axisLeft(scale));
const barChart = svg.selectAll("rect")   
                    .data(dataset)
                    .enter()
                    .append("rect")
                    .attr("x", (d, i) => i * 40)
                    .attr("y", (d, i) => h - scale(d))
                    .attr("width", 35)
                    .attr("height", (d, i) => scale(d));*/

const margin = 60;
const width = 1000 - 2 * margin;
const height = 600 - 2 * margin;

const svg = d3.select('svg')
.attr("width", width + 2 * margin)
.attr("height", height + 2 * margin);

const barChart = svg.append('g')
  .attr('transform', `translate(${margin}, ${margin})`);

const yScale = d3.scaleLinear()
  .range([height, 0])
  .domain([0, 2200]);

barChart.append('g')
  .call(d3.axisLeft(yScale));

barChart.selectAll()
  .data(dataset)
  .enter()
  .append('rect')
  .attr('x', (d, i) => i * 45)
  .attr('y', (d, i) => yScale(d))
  .attr('height', (d, i) => height - yScale(d))
  .attr('width', 40)
  .attr("id", (d, i) => `bar-${i}`)
  .append("title")
  .text((d, i) => movieTitles[i]);

/*const bar1 = d3.selectAll("rect");

bars.on('click', function addToInfoBox() {
  d3.select("#info-box").text("Work")
});*/

const infoBox = d3.select("#info-box");

const infoBoxText = ''

function addInfoBoxText(index) {
  return `${movieTitles[index]} was made in ${movieYears[index]} and made ${dataset[index]} million at the box office.`
}

d3.select("#bar-0")
  .on('click', () => {
  infoBox.text(addInfoBoxText(0))
  });

d3.select("#bar-1")
  .on('click', () => {
    infoBox.text(addInfoBoxText(1))
  });

d3.select("#bar-2")
  .on('click', () => {
    infoBox.text(addInfoBoxText(2))
  });

d3.select("#bar-3")
  .on('click', () => {
    infoBox.text(addInfoBoxText(3))
  });

d3.select("#bar-4")
  .on('click', () => {
    infoBox.text(addInfoBoxText(4))
  })

d3.select("#bar-5")
  .on('click', () => {
    infoBox.text(addInfoBoxText(5))
  })

d3.select("#bar-6")
  .on('click', () => {
    infoBox.text(addInfoBoxText(6))
  })

d3.select("#bar-7")
  .on('click', () => {
    infoBox.text(addInfoBoxText(7))
  })

d3.select("#bar-8")
  .on('click', () => {
    infoBox.text(addInfoBoxText(8))
  })

d3.select("#bar-9")
  .on('click', () => {
    infoBox.text(addInfoBoxText(9))
  })

d3.select("#bar-10")
  .on('click', () => {
    infoBox.text(addInfoBoxText(10))
  })

d3.select("#bar-11")
  .on('click', () => {
    infoBox.text(addInfoBoxText(11))
  })

d3.select("#bar-12")
  .on('click', () => {
    infoBox.text(addInfoBoxText(12))
  })

d3.select("#bar-13")
  .on('click', () => {
    infoBox.text(addInfoBoxText(13))
  })

d3.select("#bar-14")
  .on('click', () => {
    infoBox.text(addInfoBoxText(14))
  })

d3.select("#bar-15")
  .on('click', () => {
    infoBox.text(addInfoBoxText(15))
  })

d3.select("#bar-16")
  .on('click', () => {
    infoBox.text(addInfoBoxText(16))
  })

d3.select("#bar-17")
  .on('click', () => {
    infoBox.text(addInfoBoxText(17))
  })

d3.select("#bar-18")
  .on('click', () => {
    infoBox.text(addInfoBoxText(18))
  })

d3.select("#bar-19")
  .on('click', () => {
    infoBox.text(addInfoBoxText(19))
  })

