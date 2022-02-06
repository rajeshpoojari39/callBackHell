window.onload = function () {
  var timer = document.getElementById("timer");
  timer.innerHTML = 10;
  var message = document.getElementById("message");
  message.innerHTML =
    "<span class='orange'>Happy </span><span class='white'>Independence </span><span class='green'>Day</span>";
  message.style.visibility = "hidden";

  setTimeout(() => {
    timer.innerText = 9;
    setTimeout(() => {
      timer.innerText = 8;
      setTimeout(() => {
        timer.innerText = 7;
        setTimeout(() => {
          timer.innerText = 6;
          setTimeout(() => {
            timer.innerText = 5;
            setTimeout(() => {
              timer.innerText = 4;
              setTimeout(() => {
                timer.innerText = 3;
                setTimeout(() => {
                  timer.innerText = 2;
                  setTimeout(() => {
                    timer.innerText = 1;
                    setTimeout(() => {
                      timer.style.visibility = "hidden";
                      message.style.visibility = "visible";
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
};
