const $imageContainer = document.getElementById('img-container')
const $clock = document.getElementById('clock')
const $container = document.getElementById('container')

// ------- NASA API KEY --------------

// BMvzXLGcvWG2Q4oT9YZa7mnxpfjEcFLWXwW5seYy

// https://api.nasa.gov/planetary/apod?api_key=BMvzXLGcvWG2Q4oT9YZa7mnxpfjEcFLWXwW5seYy

fetch('https://api.nasa.gov/planetary/apod?api_key=BMvzXLGcvWG2Q4oT9YZa7mnxpfjEcFLWXwW5seYy')
.then(function(response){
    return response.json()
})

.then(function(imageData){
    if (imageData.media_type === 'video'){
        $imageContainer.innerHTML += `<p class= 'video-text'>Error 404 Sorry: APOD is a video today :( </p>`
    } else{
        $container.setAttribute('style', `background-image: url(${imageData.url});`)
    }
})
    
// Sidebar Settings
const $sidebarNav = document.getElementById('sidebar-nav')
const $closeBtn = document.getElementById('closeBtn')
const $hamburgerContainer = document.getElementById('hamburgerContainer')
const $hamburgerBtn = document.getElementById('hamburgerBtn')

const $navList = document.getElementById('navList')

function displaySidebarNav() {
    $sidebarNav.style.width = '255px'
    $sidebarNav.style.marginRight = "255px"
    $navList.style.display = 'block'
    $navList.style.transition = '0.7s'
    $navList.style.transitionDelay = '1s'
    $hamburgerBtn.style.marginLeft = '255px'
}

function closeSidebar() {
    $sidebarNav.style.width = '0'
    $hamburgerBtn.style.marginLeft = '0'
    $navList.style.display = 'none'
    $hamburgerBtn.style.transition = '1s'
}

closeSidebar()

// Mouseover and Mouseouts for Settings and Close Icons    
$closeBtn.addEventListener('mouseover', function(){
    $closeBtn.style.maxWidth = '18.5%'
    $closeBtn.style.transition = '0.5s'
})

$closeBtn.addEventListener('mouseout', function(){
    $closeBtn.style.maxWidth = '17%'
    $closeBtn.style.transition = '0.5s'
})
    
$hamburgerBtn.addEventListener('mouseover', function(){
    $hamburgerBtn.style.maxWidth = '4.5%'
    $hamburgerBtn.style.transition = '0.5s'
})

$hamburgerBtn.addEventListener('mouseout', function(){
    $hamburgerBtn.style.maxWidth = '4.14%'
    $hamburgerBtn.style.transition = '0.5s'
})

$hamburgerBtn.addEventListener('click', function(){
    displaySidebarNav()
})

$closeBtn.addEventListener('click', function(){
    closeSidebar()
})

// Determining message based on hour of the day
const $message = document.getElementById('message')
const currentHour = new Date().getHours()

switch (currentHour){
    case 0:
        $message.innerHTML = '<p>Hope your sleeping well Hamid! It is currently:</p>'
        break
        
    case 1:
        $message.innerHTML = '<p>Goodnight Hamid! It is currently:</p>'
        break
    
    case 2:
        $message.innerHTML = '<p>Sweet Dreams Hamid! It is currently:</p>'
        break

    case 3:
        $message.innerHTML = '<p>Sleep well Hamid! It is currently:</p>'
        break
    
    case 4:
        $message.innerHTML = '<p>Goodnight Hamid! It is currently:</p>'
        break
            
    case 5:
        $message.innerHTML = '<p>Goodnight Hamid! It is currently:</p>'
        break
                
    case 6:
        $message.innerHTML = '<p>Good Early Morning Hamid! It is currently:</p>'
        break
                    
    case 7:
        $message.innerHTML = '<p>Good Morning Hamid! It is currently:</p>'
        break
                        
    case 8:
        $message.innerHTML = '<p>Good Morning Hamid! It is currently:</p>'
        break
                            
    case 9:
        $message.innerHTML = '<p>Good Morning Hamid! It is currently:</p>'
        break
                                
    case 10:
        $message.innerHTML = '<p>Good Morning Hamid! It is currently:</p>'
        break
    
    case 11:
        $message.innerHTML = '<p>Good Morning Hamid! It is currently:</p>'
        break
        
    case 12:
        $message.innerHTML = '<p>Good Afternoon Hamid! It is currently:</p>'
        break
            
    case 13:
        $message.innerHTML = '<p>Good Afternoon Hamid! It is currently:</p>'
        break
                
    case 14:
        $message.innerHTML = '<p>Good Afternoon Hamid! It is currently:</p>'
        break
                    
    case 15:
        $message.innerHTML = '<p>Good Afternoon Hamid! It is currently:</p>'
        break
                        
    case 16:
        $message.innerHTML = '<p>Good Early Evening Hamid! It is currently:</p>'
        break
                            
    case 17:
        $message.innerHTML = '<p>Good Evening Hamid! It is currently:</p>'
        break
                                
    case 18:
        $message.innerHTML = '<p>Good Evening Hamid! It is currently:</p>'
        break
                                    
    case 19:
        $message.innerHTML = '<p>Good Evening Hamid! It is currently:</p>'
        break
    
    case 20:
        $message.innerHTML = '<p>Good Evening Hamid! It is currently:</p>'
        break
        
    case 21:
        $message.innerHTML = '<p>Good Evening Hamid! It is currently:</p>'
        break
            
    case 22:
        $message.innerHTML = '<p>Good Late Evening Hamid! It is currently:</p>'
        break
                
    case 23:
        $message.innerHTML = '<p>Go to sleep Hamid! It is currently:</p>'
        break
    }
                    
// Save Button and Settings Data
const $saveBtn = document.getElementById('saveBtn')

const $hourClock = document.getElementById('hourClock')
const $displayCurrentDate = document.getElementById('displayCurrentDate')
const $showingDate = document.getElementById('showingDate')

// Creating functions for Settings
function currentDateSettings(){                
    let dateDisplay = `<h2 class='date'>${currentTime.toDateString()}</h2>`
    $showingDate.innerHTML = dateDisplay
}

function twentyFourHourClockSettings(){
    let currentTime = new Date()
    let twentyFourClock = `<h1>${currentTime.toLocaleTimeString('en-GB')}</h1>` 
    $clock.innerHTML = twentyFourClock 
}

// Retrieving Local Storage Items
let clock12 = true
let showDate = false

if (localStorage.getItem('24-hours-checked')){
    if (localStorage.getItem('24-hours-checked') == 'true'){
        clock12 = true
        $hourClock.checked = false
    }else {
        clock12 = false
        $hourClock.checked = true
    }

    if (localStorage.getItem('current-date-checked') == 'true'){
        showDate = true
        $displayCurrentDate.checked = true
    }else {
        showDate = false
        $displayCurrentDate.checked = false
    }
}
const currentTime = new Date()

// Calling settings functions
movingClock = setInterval(function(){

    if (clock12){
        let currentTime = new Date() 
        $clock.innerHTML = `<h1>${currentTime.toLocaleTimeString('en-US')}</h1>` 
    }else {
        twentyFourHourClockSettings()
    }

    if (showDate){
        currentDateSettings()
    } else{
        $showingDate.innerHTML =''
    }

}, 1000)

// Save Button addEventListeners
$saveBtn.addEventListener('click', function (e){
    e.preventDefault()
    clock12 = !$hourClock.checked
    showDate = $displayCurrentDate.checked
    localStorage.setItem('24-hours-checked', clock12)
    localStorage.getItem('24-hours-checked')

    localStorage.setItem('current-date-checked', $displayCurrentDate.checked)
    localStorage.getItem('current-date-checked')
    closeSidebar()
})

$saveBtn.addEventListener('mouseover', function(){
    $saveBtn.setAttribute('style', 'background-color: #D03F3F; color: white; transition: 0.5s;')
})

$saveBtn.addEventListener('mouseout', function(){
    $saveBtn.setAttribute('style', 'background-color: white; color: black; transition: 0.5s;')
})

// More Data
const $moreBtn = document.getElementById('moreBtn')
const $moreInfo = document.getElementById('more-info')
const $moreBar = document.getElementById('more-bar')
const $moreContainer = document.getElementById('more-container')
let moreVisible = false 

function displayMore (){
    $moreBtn.textContent = 'Less'
    $moreInfo.style.height = '300px'
    $moreBar.style.display = 'block'
    $moreBar.style.transition = '0.5s ease-in'    
}

function closeMore (){
    $moreBtn.textContent = 'More'
    $moreInfo.style.height = '0'
    $moreBar.style.display = 'none'
}

closeMore()

// if Statements for when the more data is shown and calling functions
$moreBtn.addEventListener('click', function(){
    if (moreVisible === false){
        moreVisible = true
        displayMore()
    }else{
        moreVisible = false
        closeMore()
    }
})

// Mouseover and Mouseout on More data button
$moreBtn.addEventListener('mouseover', function(){
    $moreBtn.setAttribute('style', 'background-color: #D03F3F; color: white; transition: 0.5s;')
})

$moreBtn.addEventListener('mouseout', function(){
    $moreBtn.setAttribute('style', 'background-color: white; color: black; transition: 0.5s;')
})

// Getting current day of the week
switch (currentTime.getDay()) {
      case 0:
        document.querySelector('.dayofweek').innerHTML += '<p>Sunday</p>'
        break
      case 1:
        document.querySelector('.dayofweek').innerHTML += '<p>Monday</p>'
        break
      case 2:
        document.querySelector('.dayofweek').innerHTML += '<p>Tuesday</p>'
        break
      case 3:
        document.querySelector('.dayofweek').innerHTML += '<p>Wednesday</p>'
        break
      case 4:
        document.querySelector('.dayofweek').innerHTML += '<p>Thursday</p>'
        break
      case 5:
        document.querySelector('.dayofweek').innerHTML += '<p>Friday</p>'
        break
      case  6:
        document.querySelector('.dayofweek').innerHTML += '<p>Saturday</p>'
        break
    }

    // Getting day of current month
    document.querySelector('.dayofmonth').innerHTML += `<p>${currentTime.getDate()}</p>`

    // Getting current day of the year
    let yearStart = new Date(currentTime.getFullYear(), 0, 0)
    let difference = currentTime - yearStart
    let oneDay = 1000 * 60 * 60 * 24
    let dayOfTheYear = Math.floor(difference / oneDay)
    document.querySelector('.dayofyear').innerHTML += `<p>${dayOfTheYear}</p>`

    // Getting current year
    document.querySelector('.currentyear').innerHTML += `<p>${currentTime.getFullYear()}</p>`   