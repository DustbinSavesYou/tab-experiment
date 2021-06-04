document.addEventListener('DOMContentLoaded',() => {

	document.body.scrollTop = 0;

	// TOP MENU HEIGHT

	let menu = document.querySelector('.tab-selector')
	let menuHeight = menu.clientHeight
	menuHeight = menuHeight + menuHeight * 0.03;
	document.querySelector('.menu-filler').style.height = `${menuHeight}px`;

	

	// TABS FUNCTIONALITY

	let tabButtons = document.querySelectorAll('.tab-button')
	let tabs = []
	tabButtons.forEach((button, index) => {
		tabs.push(document.querySelector(button.hash))
	})
	
	// set the first tab as a default when app starts
	tabButtons[1].classList.add('active')
	tabs[1].classList.add('active-tab')


	tabButtons.forEach((button, tabButtonIndex) => {
		button.addEventListener('click', () => {

			// vibrate if device supports it
			window.navigator.vibrate(200)

			//remove active class from all buttons and add it to corresponding button
			tabButtons.forEach((button) => {button.classList.remove('active')})
			button.classList.add('active')

			// remove active class from all tabs
			tabs.forEach((tab, index) => {
				if (tab.classList.contains('active-tab') == true) {
					tab.classList.remove('active-tab')		
				}
			})

			// add active class to corresponding tab
			document.querySelector(button.hash).classList.add('active-tab')				
			
			// change scrolled to 0
			document.documentElement.scrollTop = 0;
			document.body.scrollTop = 0; // both used for browser comapability with chrome, firefox, safari
		})
	})


	// prevent blue highlight on touch on mobile devices
	tabButtons.forEach((button) => {
		button.addEventListener('click', (event) => {
			event.preventDefault()
		})
	})





	
	shuffle = (array) => {
		let m = array.length, t, i;

		// While there remain elements to shuffle:
		while (m) {
			// Pick a remaining element…
			i = Math.floor(Math.random() * m--) // subtracts m-- for the loop too
 		   	
			// And swap it with the current element.
			t = array[m]
			array[m] = array[i]
			array[i] = t
		}
		
		return array;
	}


	let imageURLs = []
	imageURLs = [
		'./images/img1.jpg', './images/img2.jpg', './images/img3.jpg', 
		'./images/img4.jpg', './images/img5.jpg', './images/img6.jpg', 
		'./images/img7.jpg', './images/img8.jpg', './images/img9.jpg', 
		'./images/img10.jpg', './images/img12.jpg', './images/img13.jpg', 
		'./images/img14.jpg', './images/img15.jpg', './images/img16.jpg', 
		'./images/img17.jpg', './images/img18.jpg', './images/img19.jpg', 
		'./images/img20.jpg', './images/img21.jpg', './images/img22.jpg', 
		'./images/img23.jpg', './images/img24.jpg', './images/img25.jpg', 
		'./images/img26.jpg', './images/img27.jpg', './images/img28.jpg', 
		]
	// now randomize this array and parse it through the function below

	
	imageURLs = shuffle(imageURLs);
	let shuffledURLs = [];
	for (i = 0; i <= 16; i++) {
		shuffledURLs.push(imageURLs[i])
	}

	imageGrid = document.querySelector('.img-grid');
	shuffledURLs.forEach((url) => {
		image = document.createElement('img');
		image.src = url;
		imageGrid.appendChild(image)
	})


	console.log(Math.random)







	// comment for note:
	// after splicing, array.splice() also returns an array of all elements that were spliced, since I only splice 1 element, that one element is returned. I can use [0] selector to select it and then push it into the copy array.
	// copy.push(array.splice(i, 1)[0])
	//third parameter splice(start, deleteCount, itemN) not used since adding is not necessary

	// let imageURLs = []
	// let columns, columnsPrevious

	// imageURLs = [] // urls are written in the code above, removed to avoid repeating large array of urls

	// function imageGridColumns() {
	// 	let screenWidth = document.body.offsetWidth
	// 	if (screenWidth < 450) {
	// 		columns = 1
	// 	} 
	// 	else if (screenWidth >= 450 && screenWidth < 650) {
	// 		columns = 2
	// 	} 
	// 	else {
	// 		columns = 3
	// 	}

	// 	// let division = Math.floor(imageURLs.length / columns)
	// 	let imageGrid = document.querySelector('.img-grid')
	// 	// console.log(columns)

	// 	//remove previous image_divs
	// 	previousImageDivs = imageGrid.childNodes
	// 	// console.log(previousImageDivs)
	// 	previousImageDivs.forEach((div, index) => {
	// 		console.log(div)
	// 	})

	// 	// console.log('imageGridColumns() called')

	// 	//check if previous column number and current column number are equal, if they are, no need to refresh images and image divs
	// 	// if they're not, refresh images and image divs

	// 	// if (columns != columnsPrevious) {
	// 	if (true) {

			
	// 		// imageGrid.childNodes.forEach((image_div, index) => {
	// 		// 	console.log(image_div, index)
	// 		// 	image_div.remove()
	// 		// })

	// 		for (i = 0; i < columns; i++) {
	// 			let imageDiv = document.createElement('div')
	// 			imageDiv.style = "border: 2px solid purple; height: 10px; width: 5px"
	// 			// let img = document.createElement('img')
	// 		// img.src = imageURLs[1]
	// 			// imageDiv.appendChild(img)


	// 			// imageGrid.appendChild(imageDiv)
	// 		}

	// 		// make previous column number and current the same, so the function doesn't run constantly until column number changes again
	// 		columnsPrevious = columns
	// 		// console.log(columns, columnsPrevious, columns == columnsPrevious)
	// 	}

	// }
	// // window.addEventListener('resize', imageGridColumns)

	// imageGridColumns()




	// DEPRECATED: add border radius to menu bar after user scrolls, no longer necessary
	// might be reused when input fields are added to top
	// let scrolled;
	// window.addEventListener('scroll', () => {
	// 	scrolled = window.scrollY
	// 	if (scrolled > 36) {
	// 		menu.style = 'border-radius: 0 0 20px 20px';
	// 	} else if (scrolled < 36) {
	// 		menu.style 
	// 	}
	// })


	// DEPRECATED: loader 
	// setTimeout(() => {
	// 	loader = document.querySelector('.loader')
	// 	loader.style.opacity = '0';
	// 	setTimeout(() => {loader.style.display = 'none';}, 250)
	// }, 500)
})


