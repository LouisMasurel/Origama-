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

// // ----- OBJECTS ----- // //

//------ function mouvement ------ //

// Objects
function Particule (radius, distance, velocity, radian, color, name, song) {
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
    this.song = song;

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
var t = innerHeight/2-innerHeight/10;
var s = innerHeight / 110;
var v = 0.0025;

var allParticules ;
function init() {
  allParticules = [
                         // radius, distance, velocity, radian:x*(2.0*Math.PI)/360, color, class, name
        new Particule (p=(s*2), m=(t*0.8/10), w = (v+0.009), 0, green = 'grey', 'green', 'none'),
        new Particule (p, m, w, (360/3)*R, green, 'green', 'none'),
        new Particule (p, m, w, (360/3*2)*R, green, 'green', 'none'),
        
        new Particule (g=s*3.5, d=t*1.5/9, j=(v+0.007), 0, purple= 'grey', 'purple', 'none'),
        new Particule (g, d, j, (360/5)*R, purple, 'purple', 'none'),
        new Particule (g, d, j, (360/5*2)*R, purple, 'purple', 'none'),
        new Particule (g, d, j, (360/5*3)*R, purple, 'purple', 'none'),
        new Particule (g, d, j, (360/5*4)*R, purple, 'purple', 'none'),

        new Particule (r=s*4.5, d=t*2.5/9, b=(v+0.004), 0, darkBlue = 'grey', 'darkBlue', 'none'),
        new Particule (r, d, b, (360/5)*R, darkBlue, 'darkBlue', 'none'),
        new Particule (r, d, b, (360/5*2)*R, darkBlue, 'darkBlue', 'none'),
        new Particule (r, d, b, (360/5*3)*R, darkBlue, 'darkBlue', 'none'),
        new Particule (r, d, b, (360/5*4)*R, darkBlue, 'darkBlue', 'none'),

        new Particule (a=(s*5.5), i=t*4/9, e=(v+0.002), 0, turquoise = 'grey', 'turquoise', 'none'),
        new Particule (a, i, e, (360/15*3)*R, turquoise, 'turquoise', 'none'),
        new Particule (a, i, e, (360/15*6)*R, turquoise, 'turquoise', 'none'),
        new Particule (a, i, e, (360/15*9)*R, turquoise, 'turquoise', 'none'),
        new Particule (a, i, e, (360/15*12)*R, turquoise, 'turquoise', 'none'),

        new Particule (ai=s*3, ii=t*6/9-(a/2), é=(e+0.001), (360/15)*R, blue = 'grey', 'blue', 'none'),
        new Particule (ai, ii, é, (360/15*2)*R, blue, 'blue', 'none'),
        new Particule (ai, ii, é, (360/15*4)*R, blue, 'blue', 'none'),
        new Particule (ai, ii, é, (360/15*5)*R, blue, 'blue', 'none'),
        new Particule (ai, ii, é, (360/15*7)*R, blue, 'blue', 'none'),
        new Particule (ai, ii, é, (360/15*8)*R, blue, 'blue', 'none'),
        new Particule (ai, ii, é, (360/15*10)*R, blue, 'blue', 'none'),
        new Particule (ai, ii, é, (360/15*11)*R, blue, 'blue', 'none'),
        new Particule (ai, ii, é, (360/15*13)*R, blue, 'blue', 'none'),
        new Particule (ai, ii, é, (360/15*14)*R, blue, 'blue', 'none'),


        new Particule (u=s*4, j=t*7/9, l=(é+0.0005), 10*R, red = 'grey', 'red', 'none'),
        new Particule (u, j, l, 80*R, red, 'red', 'none'),
        new Particule (u, j, l, 100*R, red, 'red', 'none'),
        new Particule (u, j, l, 170*R, red, 'red', 'none'),
        new Particule (u, j, l, 190*R, red, 'red', 'none'),
        new Particule (u, j, l, 260*R, red, 'red', 'none'),
        new Particule (u, j, l, 280*R, red, 'red', 'none'),
        new Particule (u, j, l, 350*R, red, 'red', 'none'),

        new Particule (ù=(u*1.5), j, l, 45*R, redSeconde= 'grey', 'orange', 'none'),
        new Particule (ù, j, l, 135*R, redSeconde, 'rorange', 'none'),
        new Particule (ù, j, l, 225*R, redSeconde, 'orange', 'none'), 
        new Particule (ù, j, l, 315*R, redSeconde, 'orange', 'none'),

        new Particule (h=(s*2), t, z=(l+0.0005), 5*R, yellow = 'grey', 'yellow', 'none'),
        new Particule (k=(s*4), t, z, 25*R, yellow, 'yellow', 'none'),
        new Particule (k, t, z, 35*R, yellow, 'yellow', 'none'),
        new Particule (h, t, z, 55*R, yellow, 'yellow', 'none'),
        new Particule (h, t, z, 65*R, yellow, 'yellow', 'none'),
        new Particule (k, t, z, 85*R, yellow, 'yellow', 'none'),
        new Particule (k, t, z, 95*R, yellow, 'yellow', 'none'),
        new Particule (h, t, z, 115*R, yellow, 'yellow', 'none'),
        new Particule (h, t, z, 125*R, yellow, 'yellow', 'none'),
        new Particule (k, t, z, 145*R, yellow, 'yellow', 'none'),
        new Particule (k, t, z, 155*R, yellow, 'yellow', 'none'),
        new Particule (h, t, z, 175*R, yellow, 'yellow', 'none'),
        new Particule (h, t, z, 185*R, yellow, 'yellow', 'none'),
        new Particule (k, t, z, 205*R, yellow, 'yellow', 'none'),
        new Particule (k, t, z, 215*R, yellow, 'yellow', 'none'),
        new Particule (h, t, z, 235*R, yellow, 'yellow', 'none'),
        new Particule (h, t, z, 245*R, yellow, 'yellow', 'none'),
        new Particule (k, t, z, 265*R, yellow, 'yellow', 'none'),
        new Particule (k, t, z, 275*R, yellow, 'yellow', 'none'),
        new Particule (h, t, z, 295*R, yellow, 'yellow', 'none'),
        new Particule (h, t, z, 305*R, yellow, 'yellow', 'none'),
        new Particule (k, t, z, 325*R, yellow, 'yellow', 'none'),
        new Particule (k, t, z, 335*R, yellow, 'yellow', 'none'),
        new Particule (h, t, z, 355*R, yellow, 'yellow', 'none'),
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
  new Pipe (((innerWidth/2)-2.5), innerHeight/17, 5, ((innerHeight/2)-(innerHeight/15)), 'brown', 'none'),
  new Pipe ((innerWidth/2-15),(innerHeight-innerHeight/20), innerWidth/17, innerHeight/80, 'brown')
];

// ----- collision pipe and particule ----- //

  function getLeft (obj) {
    if(obj.width) {
      return obj.x;
    } else {
      return obj.x - obj.radius;
    }
  }

  function getRight (obj) {
    if(obj.width) {
      return obj.x + obj.width;
    } else {
      return obj.x + obj.radius;
    }
  }
  
  function getBottom (obj) {
    if(obj.height) {
      return obj.y + obj.height;
    } else {
      return obj.y + obj.radius;
    }
  };

  function getTop (obj) {
    if(obj.height) {
      return obj.y;
    } else {
      return obj.y - obj.radius;
    }
  };
  
  function collision (objA, objB) {
    return getBottom(objA) >= getTop(objB)    &&
    getTop(objA)  <= getBottom(objB) &&
    getRight(objA)  >= getLeft(objB)   &&
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
function Food (radius, color, song) {
    this.x = 1;
    this.y = 1;
    this.speed = 1.5;
    this.radius = radius;
    this.color = color;
    this.song = song;
    this.id = Food;
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
     c.clearRect(this.x, this.y, this.radius, 0, Math.PI * 2, false);
     c.closePath();
    };
  
  Food.prototype.creation = function () {
    this.y = innerHeight/30; 
    this.x = innerWidth/8 + Math.floor(Math.random() * (canvas.width-((2*innerWidth)/8)))   
      };
  
  // setTimeout(Food.prototype.creation(), 1000) 
      
var N = innerHeight / 100 
var greenSound = document.querySelector(".greenSound");
var purpleSound = document.querySelector(".purpleSound");
var darkBlueSound = document.querySelector(".darkBlueSound");
var blueSound = document.querySelector(".blueSound");
var turquoiseSound = document.querySelector(".turquoiseSound");
var redSound = document.querySelector(".redSound");
var orangeSound = document.querySelector(".orangeSound");
var yellowSound = document.querySelector(".yellowSound");


var allFoods = [
    new Food (N, 'green', greenSound),
    new Food (N, 'purple', purpleSound ),
    new Food (N, 'darkBlue', darkBlueSound),
    new Food (N, 'blue', blueSound),
    new Food (N, 'turquoise', turquoiseSound),
    new Food (N, 'red', redSound),
    new Food (N, 'orange', orangeSound),
    new Food (N, 'yellow', yellowSound),
];
var movingFoods = [];
randomFoods();

setInterval(function () {
  randomFoods();
}, 700);


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
  if(obj.height) {
    return obj.y;
  } else {
    return obj.y - obj.radius;
  }
};
function getBottomSecond (obj) {
  if(obj.height) {
    return obj.y + obj.height;
  } else {
    return obj.y + obj.radius;
  }
};

function getLeftSecond (obj) {
  if(obj.width) {
    return obj.x;
  } else {
    return obj.x - obj.radius;
  }
}
function getRightSecond (obj) {
  if(obj.width) {
    return obj.x + obj.width;
  } else {
    return obj.x + obj.radius;
  }
}

function assimilation (objA, objB) {
  return getBottomSecond(objA) >= getTopSecond(objB)    &&
          getTopSecond(objA)  <= getBottomSecond(objB) &&
          getRightSecond(objA)  >= getLeftSecond(objB)   &&
          getLeftSecond(objA)   <= getRightSecond(objB);
};
  
  function foodAssimilation (food) {
    var hasAssimilated = false;
    
    if (assimilation(food, allPipes[1])) {
      hasAssimilated = true;
        // food.clearFood();
      }
    return hasAssimilated;
  }

function randomFoods () {
  var allFoodsCopy = allFoods.slice();

  for (var i = 1; i <= 2; i +=1) {
    var index = Math.floor(Math.random() * allFoodsCopy.length);
    movingFoods.push(new Food(N, allFoodsCopy[index].color, allFoodsCopy[index].song));
    allFoodsCopy.splice(index, 1);
  }
}

function updateStuff () {
    // clear old drawings from the entire canvas before drawing again
    allPipes.forEach(function (pipe) {
      pipe.drawMe();
    });

    var collided = [];
    allParticules.forEach(function (particule) {
      particule.draw();
      if (pipeCollision(particule)) {
        collided.push(particule);
        if (particule.song && particule.song !== "none") particule.song.play();
      }
    });

    var assimilated = [];
    var oldFood = [];
    movingFoods.forEach(function (food, index) {
      food.drawMe();
      if (foodAssimilation(food)) {
        assimilated.push(food);
        if (food.song) food.song.play();
      }
      if (foodAssimilation(food) || food.y > canvas.height) {
        oldFood.push(index);
      }
    });

    oldFood.sort(function (a, b) {
      return b - a;
    });
    oldFood.forEach(function (index) {
      movingFoods.splice(index, 1);
    });

    assimilated.forEach(function (oneFood) {
      collided.forEach(function (oneParticle) {
        if (oneParticle.name === oneFood.color){
          oneParticle.color = oneFood.color
          oneParticle.song = oneFood.song
        }
      });
    });

    requestAnimationFrame(function () {
      updateStuff();
    });

  };
 // start the drawing loop 
 updateStuff();





