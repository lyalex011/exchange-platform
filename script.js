let balanceVisible = false;
let balanceElement = document.getElementById("balance");
let balanceVisibleElement = document.getElementById("balance-visible");
let showHideButton = document.getElementById("show-hide-button");
let balanceVisibleTwo = false;
let balanceElementTwo = document.getElementById("balance-2");
let balanceVisibleElementTwo = document.getElementById("balance-visible-2");
let showHideButtonTwo = document.getElementById("show-hide-button-2");
let reserveBtnElement = document.getElementById("reserve");

function toggleBalanceVisibility() {
    balanceVisible = !balanceVisible;
    if (balanceVisible) {
        balanceElement.style.display = "none";
        balanceVisibleElement.style.display = "block";
        showHideButton.innerHTML = '<i class="fa-regular fa-eye"></i>';
    } else {
        balanceElement.style.display = "block";
        balanceVisibleElement.style.display = "none";
        showHideButton.innerHTML = '<i class="fa-regular fa-eye-slash"></i>';
    }
}

showHideButton.addEventListener("click", toggleBalanceVisibility);

function toggleBalanceVisibilityTwo() {
    balanceVisibleTwo = !balanceVisibleTwo;
    if (balanceVisibleTwo) {
        balanceElementTwo.style.display = "none";
        balanceVisibleElementTwo.style.display = "block";
        showHideButtonTwo.innerHTML = '<i class="fa-regular fa-eye"></i>';
    } else {
        balanceElementTwo.style.display = "block";
        balanceVisibleElementTwo.style.display = "none";
        showHideButtonTwo.innerHTML = '<i class="fa-regular fa-eye-slash"></i>';
    }
}

showHideButtonTwo.addEventListener("click", toggleBalanceVisibilityTwo);




reserveBtnElement.addEventListener('click', function () {

    const buttonText = reserveBtnElement.innerHTML;
  

    if (buttonText === 'Show reserves <i class="fa-solid fa-chevron-down text-xs mt-1"></i>') {
        reserveBtnElement.innerHTML = 'Hide reserves <i class="fa-solid fa-chevron-up text-xs "></i>';
    } else {
        reserveBtnElement.innerHTML = 'Show reserves <i class="fa-solid fa-chevron-down text-xs mt-1"></i>';
    }
  
  });


