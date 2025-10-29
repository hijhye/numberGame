let title = document.querySelector(".title");
let exposition = document.querySelector(".exposition");
function titleshow() {
  title.style.display = "none";
  exposition.style.display = "flex";
}

setTimeout(titleshow, 2000);
setTimeout(() => {
  exposition.style.display = "none";
}, 4000);

/*elevator*/
let elevator = document.querySelector(".elevator");
let elevatorDoor = document.querySelectorAll(".elevator .door");
let close = document.querySelector(".elevator .close");
let open = document.querySelector(".elevator .open");
let letsgo = document.querySelector(".elevator p");

close.addEventListener("click", () => {
  letsgo.style.display = "none";
  elevatorDoor.forEach((door) => {
    door.style.width = "50%";
  });
  setTimeout(() => {
    elevator.style.marginTop = "-100vh";
  }, 1000);
});
open.addEventListener("click", () => {
  elevatorDoor.forEach((door) => {
    door.style.width = "0%";
  });
});

/*game*/
let results = document.querySelectorAll(".result");
let wrong = document.querySelector(".wrong");
let correct = document.querySelector(".correct");
let up = document.querySelector(".up");
let down = document.querySelector(".down");
let chance = document.querySelector(".chance");
random = Math.round(Math.random() * 100 + 1);
console.log(random);

let confirm = document.querySelector(".game button");
let user = document.querySelector(".game input");
let userNum;

let chances = 5;

confirm.addEventListener("click", () => {
  chances--;
  console.log(chances);
  chance.innerText = `별은 이제 ${chances}개뿐!`;
  userNum = user.value;
  if (userNum == random) {
    results.forEach((result) => {
      result.classList.remove("on");
    });
    correct.classList.add("on");
  } else if (userNum > random && chances > 0) {
    results.forEach((result) => {
      result.classList.remove("on");
    });
    down.classList.add("on");
    results.forEach((result) => {
      setTimeout(() => {
        result.classList.remove("on");
      }, 2000);
    });
  } else if (userNum < random && chances > 0) {
    results.forEach((result) => {
      result.classList.remove("on");
    });
    up.classList.add("on");
    results.forEach((result) => {
      setTimeout(() => {
        result.classList.remove("on");
      }, 2000);
    });
  } else if ((userNum /= random && chances < 1)) {
    results.forEach((result) => {
      result.classList.remove("on");
    });
    wrong.classList.add("on");
  }
  user.value = "";
});

/*재도전*/
let retry = document.querySelector(".retry");
retry.addEventListener("click", () => {
  letsgo.style.display = "block";
  elevatorDoor.forEach((door) => {
    door.style.width = "0%";
  });
  elevator.style.marginTop = "0%";
  results.forEach((result) => {
    result.classList.remove("on");
  });
  random = Math.round(Math.random() * 100 + 1);
  chances = 5;
  chance.innerText = `★★★★★`;
});
