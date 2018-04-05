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

addEventListener('foodAssimilation', () => {
  hasAssimilated = true
    setTimeout(function(){
        userPressedKey = false
    }, 15)
})

// // ----- OBJECTS ----- // //

//------ function mouvement ------ //

// Objects
function Particule (radius, distance, velocity, radian, color, name) {
    x = canvas.width/2 ;
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

var R = (2.0*Math.PI)/360;
var t = innerHeight/2-70;
var s = innerHeight / 150;
var v = 0.0002;

var allParticules ;
function init() {
  allParticules = [
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
    allParticules.forEach(particule => {
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


var allPipes = [
  new Pipe (((innerWidth/2)-2.5), 65, 5, (innerHeight/2-65), 'brown'),
  new Pipe ((innerWidth/2-15),(innerHeight-30), 30, 10, 'brown')
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
  
  function pipeCollision (Particule) {
    var hasCollided = false;
  
    if (collision(Particule, allPipes[0])) {
        hasCollided = true;
      }
    return hasCollided;
  }

// // ----- FOOD  ----- // //

//----- creat FOOD  ----- //
var food = 0 
function Food (radius, color) {
    this.x = null;
    this.y = null;
    this.speed = 1;
    this.radius = radius;
    this.color = color;
    this.creation();
    this.clearFood();
}
    
  Food.prototype.drawMe = function () {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    this.y += this.speed;
    c.fillStyle = this.color,
    c.fill();
    c.closePath();
    };
    
  Food.prototype.clearFood = function () {
     c.beginPath();
     c.clearRect(this.x, innerHeight-((innerHeight/7)/2), this.radius, 0, Math.PI * 2, false);
     c.closePath();
    };
  
  Food.prototype.creation = function () {
    this.y = 30; 
    this.x = Math.floor(Math.random() * (canvas.width-(innerHeight/7)))
       if ((innerHeight/7) > this.x) {
        this.creation();
        return;
        };   
      };

var N = innerHeight / 100 

var allFoods = [
    new Food (N, 'purple'),
    new Food (N, 'green'),
    new Food (N, 'grey'),
    new Food (N, 'blue'),
    new Food (N, 'turquoise'),
    new Food (N, 'red'),
    new Food (N, 'redSeconde'),
    new Food (N, 'yellow'),
];


//----- mouvement and limite of Pipe and particules by button Arrow ----- //

   var body = document.querySelector("body");
   body.onkeydown = function () {

    switch (event.keyCode) {
      case 65 : // A key (81 for French keyboards)
      case 37 : // left arrow
        allPipes.forEach(function (Pipe) {
          allPipes[1].x -= 5});
        break;
  
      case 68: // D key
      case 39: // right arrow
        allPipes.forEach(function (Pipe) {
          allPipes[1].x += 5});    
        break;
        }
      };

   
  // ----- assimilation Pipe and food ----- //


function getTopSecond (obj) {
  if(obj.width) {
    return obj.x + obj.width
  } else {
    return obj.x + obj.radius;
  }
};
function getBottomSecond (obj) {
  if(obj.width) {
    return obj.x + obj.width
  } else {
    return obj.x + obj.radius;
  }
};

function assimilation (objA, objB) {
  return getBottomSecond(objA) >= getTopSecond(objB)    &&
         getTopSecond(objA)    <= getTopSecond(objB) 
};
  
  function foodAssimilation (Food) {
    var hasAssimilated = false;
    console.log(Food)
    
    if (assimilation(Food, allPipes[1])===true) {
      hasAssimilated = true;
        Food.clearRect();
        return hasAssimilated;
      }
    return Food.color;
  }
  
  console.log(foodAssimilation(allFoods[2]))    
  // ----- update action ----- // 
  // allFoods.forEach(function foodAssimilation (Food){
  //   var hasAssimilated = false;
  //   if (assimilation(Food, allPipes[1])===true) {
  //     console.log("ok")
  //       hasAssimilated = true;
  //       Food.clearRect();
  //       return hasAssimilated;
  //     }
  // })

function updateStuff () {
    // clear old drawings from the entire canvas before drawing again
    allPipes.forEach(function (Pipe) {
      Pipe.drawMe();
    });

    allParticules.forEach(function (Particule) {
      Particule.draw();
    });

    if (food === 0) {
        var index = Math.floor(Math.random() * allFoods.length) 
        allFoods[index].drawMe()
        }
        allFoods.forEach(function (Food) {
          Food.drawMe();
        });


 // ----- activate Particules ----- //

    //  allParticules.forEach(function(p) {
    //   (pipeCollision(p) === true
    // && if 
    // noteAssimilation(p) 
    // && if p.name === food.color) 
    //         console.log (p)
    //    return  p.color = f.color
    //     }
    // })

    requestAnimationFrame(function () {
      updateStuff();
    });
  };
 // start the drawing loop
 
 updateStuff();

// ----- RESET ----- //


// ----- trash ----- //



      // if  (((canvas.width/2) - (innerWidth/7)-5) < this.x && this.x < ((canvas.width/2) + (innerWidth/7)+5)) {
      //   this.creation();
      //   return;
      // }; 

          
    // Math.floor(Math.random() * (canvas.height-70))
    //   if ( ((canvas.height/2) - (innerHeight/7) -5) < this.y && this.y < ((canvas.height/2) + (innerHeight/7)+5)) {
    //     this.creation();
    //     return;


    //  // ----- création NOTE ----- //

//  var allNotes = new Image();
//  allNotes.src = "./imagesetsons/autocollant-mural-notes-musique-couleur-820.png";

//  var note = {
//    x: (innerWidth/2-(innerHeight/10)/2),
//    y: 50,
//    width: innerHeight/10,
//    height: innerHeight/10,

//    drawMe: function () {
//      c.drawImage(allNotes, this.x, this.y, this.width, this.height);
//    }
//  };

//    note.drawMe();
