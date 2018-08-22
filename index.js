document.getElementById('projects-link').addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('projects').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
})
