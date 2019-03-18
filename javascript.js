const movieTitles = ["Iron Man", "The Incredible Hulk", "Iron Man 2", "Thor", "Captain America: The First Avenger", "The Avengers", "Iron Man 3", "Thor: The Dark World", "Captain America: The Winter Soldier", "Guardians of the Galaxy", "Avengers: Age of Ultron", "Ant-Man", "Captain America: Civil War", "Doctor Strange", "Guardians of the Galaxy Vol.2", "Spider-Man: Homecoming", "Thor: Ragnarok", "Black Panther", "Avengers: Infinity War", "Ant-Man and the Wasp" ]
const dataset = [585.2, 263.4, 623.9, 449.3, 370.6, 1518.8, 1214.8, 644.6, 714.3, 773.3, 1405.4, 516.3, 1153.3, 677.7, 863.8, 880.2, 854.0, 1346.9, 2048.4, 622.7];
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
  .attr('width', 40);




