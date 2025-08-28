// HeartCount
function heartCount() {
  let accessHeart = document.querySelectorAll(".heart");
  let countHeart = document.getElementById("heart-count");
  let count = 0;
  for (let heart of accessHeart) {
    heart.addEventListener("click", function () {
      count++;
      countHeart.innerText = count;
    });
  }
}
heartCount();

// callButton
function accessCallButton(id) {
  let accessCallButton = document.getElementById(id);
  return accessCallButton;
}
function callbuttonEvent(id, numberID, tagid) {
  accessCallButton(id).addEventListener("click", function () {
    let accessNumber = document.getElementById(numberID).innerText;
    let accessTag = document.getElementById(tagid).innerText;
    let accessCoin = document.getElementById("coin-count").innerText;
    if (accessCoin < 20) {
      alert("You have no coin");
    } else {
      accessCoin -= 20;
      document.getElementById("coin-count").innerText = accessCoin;
      alert(`📞 Calling ${accessTag} ${accessNumber}`);
      let newElm = document.createElement("div");
      newElm.classList.add(
        "flex",
        "justify-between",
        "items-center",
        "p-1",
        "m-2",
        "pt-5",
        "shadow-sm",
        "bg-[#FAFAFA]"
      );
      newElm.innerHTML = `<div class="left">
                      <h1 class="font-semibold text-sm">${accessTag}</h1>
                      <p class="text-sm text-gray-500">${accessNumber}</p>
                  </div>
                  <div class="right text-sm whitespace-nowrap">
                      ${new Date().toLocaleTimeString()}
                  </div>`;
      document.getElementById("history").appendChild(newElm);
    }
  });

  // clear button
  accessCallButton("clear").addEventListener("click", function () {
    document.getElementById("history").innerHTML = "";
  });
}

callbuttonEvent("call1", "number1", "tag1");
callbuttonEvent("call2", "number2", "tag2");
callbuttonEvent("call3", "number3", "tag3");
callbuttonEvent("call4", "number4", "tag4");
callbuttonEvent("call5", "number5", "tag5");
callbuttonEvent("call6", "number6", "tag6");
callbuttonEvent("call7", "number7", "tag7");
callbuttonEvent("call8", "number8", "tag8");
callbuttonEvent("call9", "number9", "tag9");

//copy button
function copyButtonEvent(id , numberID){
    let countcopy = 0;
    accessCallButton(id).addEventListener("click", function () {
        let accessNumber = document.getElementById(numberID).innerText;
        navigator.clipboard.writeText(accessNumber);
        alert("Copied to clipboard");
        countcopy++;
        document.getElementById("copy-count-number").innerText = countcopy;
    })
}
copyButtonEvent("copy1", "number1");
copyButtonEvent("copy2", "number2");
copyButtonEvent("copy3", "number3");
copyButtonEvent("copy4", "number4");
copyButtonEvent("copy5", "number5");
copyButtonEvent("copy6", "number6");
copyButtonEvent("copy7", "number7");
copyButtonEvent("copy8", "number8");
copyButtonEvent("copy9", "number9");

