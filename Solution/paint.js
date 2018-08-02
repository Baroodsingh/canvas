 var canvas = document.getElementById('canvas');
 var context = canvas.getContext('2d');

 canvas.width = window.innerWidth - 100;
 canvas.height = window.innerHeight - 50;

 var radius = 2;
 var dragging = false;
 var dragStartLocation;
 

 
 	

 context.lineWidth = 2 * radius;

 	function getCanvasCoordinates(e) {

 		var x = e.clientX - canvas.getBoundingClientRect().left,
 			y = e.clientY - canvas.getBoundingClientRect().top;

 			return{x: x, y: y};
 		
 	}

 	

 	 function drawCircle(position){

 	 	
 	 	var radius = Math.sqrt(Math.pow((dragStartLocation.x - position.x),2) + Math.pow((dragStartLocation.x - position.x), 2));
 	 	context.beginPath();
 	 	context.arc(dragStartLocation.x,dragStartLocation.y,radius, 0 ,2 * Math.PI, false);
 	 	var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
 	 	context.fillStyle = hue;
 	 	context.fill();
 	 }
 
 var putPoint = function (e) {
 	
 	if(dragging){

 	position = getCanvasCoordinates(e);
 
 	drawCircle(position);

 }
 }

 var engage = function(e){
 	dragging = true;
 	dragStartLocation = getCanvasCoordinates(e);
 
 	putPoint(e);
 }

 var disengage = function(e) {
 	 	dragging = false;
 	 	
 	 	 var position = getCanvasCoordinates(e);
 	 	
 	 	 drawCircle(position);
  }

 window.addEventListener('mousedown', engage);
 window.addEventListener('mousemove', putPoint);
 window.addEventListener('mouseup', disengage);