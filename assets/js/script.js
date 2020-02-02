// Adding the event handlers

const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
)
toggleSwitch.addEventListener('change', switchTheme) // listening to input change

// Store the user preference for future visits
function switchTheme (e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark') // documentElement HTML
    localStorage.setItem('theme', 'dark') // add this
  } else {
    document.documentElement.setAttribute('data-theme', 'light') // documentElement HTML
    localStorage.setItem('theme', 'light') // add this
  }
}

// Check for saved user preference, if any, on load of the website

const currentTheme = localStorage.getItem('theme')
// setAttribute to HTML whatever you found in the theme in localStorage
document.documentElement.setAttribute('data-theme', currentTheme)

if (currentTheme === 'dark') {
  toggleSwitch.checked = true
} else {
  toggleSwitch.checked = false
}
