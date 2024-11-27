let streetLightTable, wood, metal, concrete = [];
const cityBounds = { minLat: 30.2290, maxLat: 30.6838, minLon: -91.2555, maxLon: -90.9980 };
const aspectRatio = (cityBounds.maxLon - cityBounds.minLon) / (cityBounds.maxLat - cityBounds.minLat);

function preload() {
  streetLightTable = loadTable("streetlights.csv", "header");
}

function setup() {
  createCanvas(800, 800 / aspectRatio);
  wood = streetLightTable.findRows("Wood", "POLE TYPE");
	  metal = streetLightTable.findRows("Metal", "POLE TYPE");
  concrete = streetLightTable.findRows("Concrete", "POLE TYPE");

}

function draw() {
  background(0);
  noStroke();

  
  for (let i = 0; i < wood.length; i++) {
    let x = map(wood[i].obj.LONGITUDE, cityBounds.minLon, cityBounds.maxLon, 0, width);
    let y = map(wood[i].obj.LATITUDE, cityBounds.minLat, cityBounds.maxLat, height, 0);
    fill("brown")
		circle(x, y, 2);
  }

	for (let i = 0; i < metal.length; i++) {
    let x = map(metal[i].obj.LONGITUDE, cityBounds.minLon, cityBounds.maxLon, 0, width);
    let y = map(metal[i].obj.LATITUDE, cityBounds.minLat, cityBounds.maxLat, height, 0);
    fill("silver")
		circle(x, y, 2);
  }
 
	for (let i = 0; i < concrete.length; i++) {
    let x = map(concrete[i].obj.LONGITUDE, cityBounds.minLon, cityBounds.maxLon, 0, width);
    let y = map(concrete[i].obj.LATITUDE, cityBounds.minLat, cityBounds.maxLat, height, 0);
    fill("grey")
		circle(x, y, 2);
  }
}