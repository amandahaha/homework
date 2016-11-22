function test(){
	svgContainer = d3. select(".callout").append("svg").attr("width", 1000).attr("height",550)
	circle = svgContainer.append("circle").attr("cx",50).attr("cy",50).attr("r",50).attr("stroke","black").attr("stroke-width",1).attr("fill","brown")
	rect = svgContainer.append("rect").attr("x",125).attr("y",90).attr("width", 250).attr("height",250).attr("style","fill:blue;stroke:orange;stroke-width:10;fill-opacity:0.1;stroke-opacity:0.9")
}
