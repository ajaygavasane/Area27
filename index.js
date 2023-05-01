const optionsMenuButton = document.getElementById('options-menu');
const optionsMenuList = document.getElementById('options-menu-list');

optionsMenuButton.addEventListener('click', function() {
  if (optionsMenuList.classList.contains('hidden')) {
    optionsMenuList.classList.remove('hidden');
    optionsMenuButton.setAttribute('aria-expanded', 'true');
  } else {
    optionsMenuList.classList.add('hidden');
    optionsMenuButton.setAttribute('aria-expanded', 'false');
  }
});

document.addEventListener('click', function(event) {
    const isClickInside = optionsMenuButton.contains(event.target) || optionsMenuList.contains(event.target);
  
    if (!isClickInside) {
      options();
    }
  });
  

//   const myButton = document.getElementById("myButton");

// myButton.addEventListener("click", function() {
//   myButton.classList.add("bg-blue-800");
// });

// myButton.addEventListener("mouseleave", function() {
//   if (!myButton.classList.contains("bg-blue-800")) {
//     myButton.classList.add("bg-blue-700");
//   }
// });

// myButton.addEventListener("mouseenter", function() {
//   myButton.classList.remove("bg-blue-700");
// });

// const button = document.getElementById('my-button');

// button.addEventListener('click', function() {
//   if (this.classList.contains('bg-blue-500')) {
//     this.classList.remove('bg-blue-500');
//   } else {
//     this.classList.add('bg-blue-500');
//   }
// });

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove the "selected" class from all buttons
    buttons.forEach((button) => {
      button.classList.remove("selected");
    });

    // Add the "selected" class to the clicked button
    button.classList.add("selected");
  });
})