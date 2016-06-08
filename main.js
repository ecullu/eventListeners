// GO!

// ******* PART 1 ******* 
var showHideButton = document.querySelector("#nav-button")
var navBar = document.querySelector(".nav-menu")
var navBarDisplay = true

var showHide = function (){
	if(navBarDisplay){
		navBar.style.opacity = 0
		navBarDisplay = false
		showHideButton.textContent = 'show nav'
	}
	else {
		navBar.style.opacity = 1 
		navBarDisplay = true
		showHideButton.textContent = 'hide nav'
	}
}
showHideButton.addEventListener('click', showHide)

// ******* PART 2 ******* 
var guestNameBox = document.querySelector("#add-guest input")
var guestList = document.querySelector("#add-guest ul")

var addGuest = function(guestName){
	if(guestName.keyCode === 13){
		var inputBox = guestName.target
		var userInput = inputBox.value
		guestList.innerHTML += '<li class="guest">' + userInput + '</li>'
		guestName.target.value = ""		
	}
}
guestNameBox.addEventListener('keydown', addGuest)

// ******* PART 3 ******* 
var guestNameBoxBonus = document.querySelector("#add-guest-bonus input")
var guestListBonus = document.querySelector("#add-guest-bonus ul")
var addGuestBonus = function(guestNameBonus){
	if(guestNameBonus.keyCode === 13){
		var inputBoxBonus = guestNameBonus.target
		var userInputBonus = inputBoxBonus.value
		var newGuest = document.createElement('li')
		newGuest.className = "guest"
		newGuest.textContent = userInputBonus
		// create a new button node
		var removeButton = document.createElement('button')
		removeButton.textContent = 'X'

		var removeGuest = function(){
			guestListBonus.removeChild(newGuest)
		}
		// add an event listener to the button node
		removeButton.addEventListener('click',removeGuest)
		// append the button node to the li as a child
		newGuest.appendChild(removeButton)
		guestListBonus.appendChild(newGuest)
		guestNameBonus.target.value = ""			
	}

}
guestNameBoxBonus.addEventListener('keydown', addGuestBonus)