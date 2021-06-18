var exampleEl = document.getElementById('mockup')
var tooltip = new bootstrap.Tooltip(exampleEl, {
    boundary: document.body, // or document.querySelector('#boundary')
    container: "body"
})