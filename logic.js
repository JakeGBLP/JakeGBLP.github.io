const getCookie = (name) => (
  document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || ''
)

function setCookie(name,value,days) {
  let expires = "";
  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days*24*60*60*1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function write(element,text,speed,exclude,waitForExcluded) {
  for (let count of Array(text.length).keys()) {
    setTimeout(() => {
      if (text.charAt(count) !== exclude) {
        element.innerHTML += text.charAt(count);
      }
      if (!waitForExcluded) {
        count--;
      }
    }, speed*count);
  }
}

const sky = document.querySelector("#sky"),
      skyParent = sky.parentElement,
      scale = 2,
      width = sky.clientWidth,
      height = sky.clientHeight;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const constellations = [
  {
    name: "orion",
    stars: [
      [11,3,2],
      [21,1,2],
      [2,27,2],
      [6,25,2],
      [12,48,2],
      [41,46,2],
      [20,58,3],
      [52,62,2],
      [85,44,2],
      [90,50,2],
      [91,58,2],
      [89,64,2],
      [87,78,2],
      [82,82,2],
      [45,91,2],
      [40,95,2],
      [35,98,2],
      [28,132,2],
      [65,126,3]
    ],
    maxWidth: function() {
      let max = 0;
      for (let forStar of this.stars.keys()) {
        if (forStar[0] > max) max = forStar[0];
      }
      return max;
    }
  }
]



function constellation(constellation) {
  let container = document.createElement("span");
  container.id = constellation.name;
  container.className = "constellation";
  container.style.left = Math.random()*80+"%";
  container.style.top = Math.random()*50+"%";
  sky.appendChild(container);
  for (let value of constellation.stars) {
    value[0] = value[0]*scale;
    value[1] = value[1]*scale;
    star(container,value);
  }
}

function star(parent, value) {
  let star, x, y, w;
  star = document.createElement("span");
  star.className = "star";
  if (value == null) {
    x = (Math.random(1)*100)+"%";
    y = (Math.random(1)*100)+"%";
    w = (getRandomInt(3)+1)+"px";
  } else {
    x = value[0]+"px";
    y = value[1]+"px";
    w = value[2]+"px";
  }
  star.style.left = x;
  star.style.top = y;
  star.style.width = w;
  parent.appendChild(star);
}


for (let i of Array(200).keys()) {
  star(sky,null);
  
}
constellation(constellations[0]);

// const isMobile = screen.height/screen.width > 0.9 || screen.height <= 1024;
const isMobile = false;
// console.log(screen.height);
// console.log(screen.width);
// console.log(screen.height/screen.width);
if (!isMobile) {
  var data;

  document.addEventListener("mousemove", (e => {
    data = {
      x: e.clientX,
      y: e.clientY,
      w: sky.getBoundingClientRect().width,
      h: sky.getBoundingClientRect().height,
      pw: skyParent.getBoundingClientRect().width,
      ph: skyParent.getBoundingClientRect().height
    };
    sky.animate([
      { 
        left: -.25*(data.w*2*(data.x/data.w))+"px",
        top: -.25*(data.h*2.5*(data.y/data.h))+"px"
      },
    ],
    {
      duration: 500,
      iterations: 1,
      fill: "forwards"
    }
    );
  }));
  
}



var lastVisit = getCookie("lastVisit"),
    subtitle = document.querySelector(".subtitle"),
    subtitleText = 
    `Hi, my name is Gabriele, I'm a Front-End and Software Developer.\\\\\\\\\\\\
    I reside in Italy and speak both English & Italian.`;
if (lastVisit <= Date.now()-120000) {
  write(subtitle,subtitleText,50, "\\", true);
} else {
  write(subtitle,subtitleText,0, "\\", false);
}


setCookie("lastVisit",Date.now(),1);