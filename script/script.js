
//Set up the drawing environment here
var margin = {t:20,r:20,b:20,l:20};
var width = document.getElementById('plot').clientWidth-margin.l-margin.r,
	height = document.getElementById('plot').clientHeight-margin.t-margin.b;

var plot = d3.select('.canvas')
	.append('svg')
	.attr('width',width+margin.l+margin.r)
	.attr('height',height+margin.t+margin.b)
	.append('g')
	.attr('class','plot')
	.attr('transform','translate(20,20)');


//Start with 100 symbols
var numOfSymbols = 100;
var symbols = [];

//Create an array, generate objects to push into the array
//Attributes of these symbols are
function runRandomTrials() {
	for (var i = 0; i < numOfSymbols; i++) {
		symbols.push({
			x: Math.random() * width,    // --> x position: between 0 and width
			y: Math.random() * height,   // --> y position: betewen 0 and height
			size: Math.random() * 50,    // --> size: between 0 and 100x100
			color: 'rgb(230,89,19)',   // --> color
			type: Math.round(Math.random())   // --> type: circle or square
		})
	}

//With the array you've created and populated, draw circles to represent these symbols
	symbols.forEach(function (symbol) {
		if (symbol.type == 0) {
			plot
				.append('circle')
				.attr('cx', symbol.x)
				.attr('cy', symbol.y)
				.attr('r', symbol.size)
				.style('fill', symbol.color);
		}

		else {
			plot
				.append('rect')
				.attr('x', symbol.x)
				.attr('y', symbol.y)
				.attr('width', symbol.size)
				.attr('height', symbol.size)
				.style('fill', symbol.color);
		}
	})
}
runRandomTrials();