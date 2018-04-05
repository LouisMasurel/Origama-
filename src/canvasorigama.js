// Initial Setup
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

addEventListener('resize', () => {
    canvas.width = innerWidth
    canvas.height = innerHeight
    init()
})

addEventListener('keydown', () => {
    userPressedKey = true
    setTimeout(function(){
        userPressedKey = false
    }, 15)
})

// // ----- OBJECTS ----- // //

//------ function mouvement ------ //

// Objects
function Particule (radius, distance, velocity, radian, color, name) {
    x = canvas.width/2;
    y = canvas.height/2;
    this.x = x;    
    this.y = y;
    this.color = color;
    this.radius = radius;
    this.distance = distance;
    this.velocity = velocity;
    this.radians = radian;
    this.name = name;

    Object.prototype.update = function() {
        this.radians += this.velocity; 
        this.x = x + Math.cos(this.radians) * this.distance;
        this.y = y + Math.sin(this.radians) * this.distance;
        this.draw()
    }
    
    Object.prototype.draw = function() {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
        c.closePath()
    }
}

// Implementation

var R = (2.0*Math.PI)/360 
var t = innerHeight / 7
var s = innerHeight / 250 
var v = 0.0002

var userPressedKey = false;

var particules ;
function init() {
    particules = [

  
                         // radius, distance, velocity, radian:x*(2.0*Math.PI)/360, color, class, name
        
        new Particule (p=(s*2), m=(t*1/10), w = -(v+0.0006), 0, purple = 'grey', 'purple'),
        new Particule (p, m, w, (360/3)*R, purple, 'purple'),
        new Particule (p, m, w, (360/3*2)*R, purple, 'purple'),
        
        new Particule (r=s*8, d=t*3/9, v=(v+0.0004), 0, green = 'grey', 'green'),
        new Particule (r, d, v, (360/5)*R, green, 'green'),
        new Particule (r, d, v, (360/5*2)*R, green, 'green'),
        new Particule (r, d, v, (360/5*3)*R, green, 'green'),
        new Particule (r, d, v, (360/5*4)*R, green, 'green'),

        new Particule (g=s*2, d=t*3/9, j=-(v+0.0001), 0, grey= 'grey', 'grey'),
        new Particule (g, d, j, (360/5)*R, grey, 'grey'),
        new Particule (g, d, j, (360/5*2)*R, grey, 'grey'),
        new Particule (g, d, j, (360/5*3)*R, grey, 'grey'),
        new Particule (g, d, j, (360/5*4)*R, grey, 'grey'),


        new Particule (a=(s*4.5), i=t*6/9, e=(v+0.0002), 0, turquoise = 'grey', 'turquoise'),
        new Particule (a, i, e, (360/15*3)*R, turquoise, 'turquoise'),
        new Particule (a, i, e, (360/15*6)*R, turquoise, 'turquoise'),
        new Particule (a, i, e, (360/15*9)*R, turquoise, 'turquoise'),
        new Particule (a, i, e, (360/15*12)*R, turquoise, 'turquoise'),

        new Particule (ai=s*3, ii=t*6/9-(a/2), -e, (360/15)*R, blue = 'grey', 'blue'),
        new Particule (ai, ii, -e, (360/15*2)*R, blue, 'blue'),
        new Particule (ai, ii, -e, (360/15*4)*R, blue, 'blue'),
        new Particule (ai, ii, -e, (360/15*5)*R, blue, 'blue'),
        new Particule (ai, ii, -e, (360/15*7)*R, blue, 'blue'),
        new Particule (ai, ii, -e, (360/15*8)*R, blue, 'blue'),
        new Particule (ai, ii, -e, (360/15*10)*R, blue, 'blue'),
        new Particule (ai, ii, -e, (360/15*11)*R, blue, 'blue'),
        new Particule (ai, ii, -e, (360/15*13)*R, blue, 'blue'),
        new Particule (ai, ii, -e, (360/15*14)*R, blue, 'blue'),


        new Particule (u=s*2, j=t*8/9, l=(v+0.0001), 10*R, red = 'grey', 'red'),
        new Particule (u, j, l, 80*R, red, 'red'),
        new Particule (u, j, l, 100*R, red, 'red'),
        new Particule (u, j, l, 160*R, red, 'red'),
        new Particule (u, j, l, 190*R, red, 'red'),
        new Particule (u, j, l, 260*R, red, 'red'),
        new Particule (u, j, l, 280*R, red, 'red'),
        new Particule (u, j, l, 350*R, red, 'red'),

        new Particule (u*1.5, j, l, 45*R, redSeconde= 'grey', 'redSeconde'),
        new Particule (u*1.5, j, l, 135*R, redSeconde, 'redSeconde'),
        new Particule (u*1.5, j, l, 225*R, redSeconde, 'redSeconde'), 
        new Particule (u*1.5, j, l, 315*R, redSeconde, 'redSeconde'),

        new Particule (s, t, -v, 5*R, yellow = 'grey', 'yellow'),
        new Particule (s, t, -v, 25*R, yellow, 'yellow'),
        new Particule (s, t, -v, 35*R, yellow, 'yellow'),
        new Particule (s, t, -v, 55*R, yellow, 'yellow'),
        new Particule (s, t, -v, 65*R, yellow, 'yellow'),
        new Particule (s, t, -v, 85*R, yellow, 'yellow'),
        new Particule (s, t, -v, 95*R, yellow, 'yellow'),
        new Particule (s, t, -v, 115*R, yellow, 'yellow'),
        new Particule (s, t, -v, 125*R, yellow, 'yellow'),
        new Particule (s, t, -v, 145*R, yellow, 'yellow'),
        new Particule (s, t, -v, 155*R, yellow, 'yellow'),
        new Particule (s, t, -v, 175*R, yellow, 'yellow'),
        new Particule (s, t, -v, 185*R, yellow, 'yellow'),
        new Particule (s, t, -v, 205*R, yellow, 'yellow'),
        new Particule (s, t, -v, 215*R, yellow, 'yellow'),
        new Particule (s, t, -v, 235*R, yellow, 'yellow'),
        new Particule (s, t, -v, 245*R, yellow, 'yellow'),
        new Particule (s, t, -v, 265*R, yellow, 'yellow'),
        new Particule (s, t, -v, 275*R, yellow, 'yellow'),
        new Particule (s, t, -v, 295*R, yellow, 'yellow'),
        new Particule (s, t, -v, 305*R, yellow, 'yellow'),
        new Particule (s, t, -v, 325*R, yellow, 'yellow'),
        new Particule (s, t, -v, 335*R, yellow, 'yellow'),
        new Particule (s, t, -v, 355*R, yellow, 'yellow'),
    ]
    }

// Animation Loop
function animate() {
    requestAnimationFrame(animate)
    c.fillStyle = 'rgba (255, 255, 255, 0,05)';
    c.clearRect(0, 0, canvas.width, canvas.height);
    particules.forEach(particule => {
    particule.update();
     });
    }

    init()
    animate()
// // -----PIPES -----// //

// ----- creation pipe ----- // 

function Pipe (myX, myY, myW, myH, color) {
    this.x = myX;
    this.y = myY;
    this.width = myW;
    this.height = myH;
    this.color = color;
};
   
  Pipe.prototype.update = function() {
    this.x = myX;
    this.y = myY;
    this.drawMe();
  };

  Pipe.prototype.drawMe = function () {
    c.fillStyle = 'brown';
    c.fillRect(this.x, this.y, this.width, this.height, this.color);
  };

var t = innerHeight / 5
var p = 20
var g = 5

var allPipes = [
    new Pipe (innerWidth/2-((t/p)/2), (innerHeight/2-(t+(2*g)))+(innerHeight/7), t/p, t+t/(2*g), 'brown'),
];

// ----- collision pipe and particule ----- //

  function getLeft (obj) {
    return obj.x;
  }
  function getRight (obj) {
      if(obj.width) {
          return obj.x + obj.width
      } else {
        return obj.x + obj.radius;
      }
  }
  
  function collision (objA, objB) {
    return getRight(objA)  >= getLeft(objB)   &&
           getLeft(objA)   <= getRight(objB);
  }
  
  function pipeCollision (particule) {
    var hasCollided = false;
  
      if (collision(particule, allPipes[0])) {
        hasCollided = true;
      }
    return hasCollided;
  }

// // ----- FOOD  ----- // //

//----- creat FOOD  ----- //
var food = 0 
function Food (otherX, otherY, radius, color) {
    this.x = otherX;
    this.y = otherY;
    this.radius = radius;
    this.color = color;
    
  Food.prototype.drawMe = function () {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color,
    c.fill();
    c.closePath();
    };
    
  Food.prototype.clearFood = function () {
     c.beginPath();
     c.clearRect(this.x, this.y, this.radius, 0, Math.PI * 2, false);
     c.closePath();
    };
  
  Food.prototype.creation = function () {
    this.x = Math.floor(Math.random() * (canvas.width-70)) 
      if  (((canvas.width/2) - (innerWidth/7)) < this.x< ((canvas.width/2) + (innerWidth/7))) {return creation}; 

    this.y = Math.floor(Math.random() * (canvas.height-70))
      if ( ((canvas.height/2) - (innerHeight/7)) < this.y < ((canvas.height/2) + (innerHeight/7))) {return creation}  
    } 

var N = innerHeight / 100 

var allFoods = [
    new Food (otherX, otherY, N, 'purple'),
    new Food (otherX, otherY, N, 'green'),
    new Food (otherX, otherY, N, 'grey'),
    new Food (otherX, otherY, N, 'blue'),
    new Food (otherX, otherY, N, 'turquoise'),
    new Food (otherX, otherY, N, 'red'),
    new Food (otherX, otherY, N, 'redSeconde'),
    new Food (otherX, otherY, N, 'yellow'),
];



 // ----- NOTE ----- //

 // ----- création NOTE ----- //

 var allNotes = new Note();
 allNotes.src = "./imagesetsons/imaautocollant-mural-notes-musique-couleur-820.png";

 var Note = {
   x: 70,
   y: 70,
   width: 100,
   height: auto,

   drawMe: function () {
     c.drawMe(allNotes, this.x, this.y, this.width, this.height);
   }
 };


//----- mouvement and limite of NOTE by button Arrow ----- //

   var body = document.querySelector("body");
   body.onkeydown = function () {
  
    switch (event.keyCode) {
      case 87: // W key (90 for French keyboards)
      case 38: // up arrow
      if (note.y < 5){note.y += 5}  
      if ( ((canvas.height/2) - (innerHeight/7)) < note.y < ((canvas.height/2) + (innerHeight/7))) {note.y += 5}  
        note.y -= 5;         
        break;
  
      case 65: // A key (81 for French keyboards)
      case 37: // left arrow
      if (note.x < 5){note.y += 5} 
      if ( ((canvas.width/2) - (innerWidth/7)) < note.y < ((canvas.width/2) + (innerWidth/7))) {note.y += 5}  
        note.x -= 5;
        break;
  
      case 83: // S key
      case 40: // down arrow
      if (note.y > (canvas.height - 5)){note.y -= 5} 
      if ( ((canvas.height/2) - (innerHeight/7)) < note.y < ((canvas.height/2) + (innerHeight/7))){note.y -= 5}  
        note.y += 5;
        break;
  
      case 68: // D key
      case 39: // right arrow
      if (note.x > (canvas.width - 5)){note.y -= 5}
      if ( ((canvas.width/2) - (innerWidth/7)) < note.y < ((canvas.width/2) + (innerWidth/7))) {note.y -= 5}  
      note.x += 5
        break;
    };
  }
   

  // ----- assimilation NOTE and food ----- //

function getTopSecond (obj) {
  return obj.y;
}
function getBottomSecond (obj) {
  return obj.y + obj.height;
}
function getLeftSecond (obj) {
  return obj.x;
}
function getRightSecond (obj) {
  return obj.x + obj.width;
}

function assimilation (objA, objB) {
  return getBottomSecond(objA) >= getTopSecond(objB)    &&
         getTopSecond(objA)    <= getBottomSecond(SecondobjB) &&
         getRightSecond(objA)  >= getLeftSecond(objB)   &&
         getLeftSecond(objA)   <= getRightSecond(objB);
}
  
  function noteAssimilation (food) {
    var hasAssimilated = false;
  
      if (assimilation(food, allNotes[0])) {
        hasAssimilated = true;
      }
      Food.clearRect;
    return hasAssimilated;
  }
 
  
  // ----- update action ----- // 

function updateStuff () {
    // clear old drawings from the entire canvas before drawing again
    
    note.drawMe();

    allPipes.forEach(function (Pipe) {
      Pipe.drawMe();
    });

    if (food === 0) {
        var index = Math.floor(Math.random() * allFoods.length) 
        allFoods[index].drawMe()
        }
    allFoods.forEach(function (Food) {
            Food.drawMe();
          });


    // ----- activate Particules ----- //

    // if particules.forEach(function(p) {
    //   (pipeCollision(p) === true
    // && if 
    // noteAssimilation(p) 
    // && if p.name === food.color) 
    //         console.log (p)
    //    return  p.color = f.color
    //     }
    // })

    // update again as soon as the browser will allow
    requestAnimationFrame(function () {
      updateStuff();
    });
  };
 // start the drawing loop
 
 updateStuff();


}
// ----- RESET ----- //
