function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('elementB');
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.elementA');
for (let elm of elements) {
  observer.observe(elm);
}


function two() {
  document.querySelectorAll('[data-scroll-from]').forEach(function(button) {
    button.addEventListener('click', function() {
      const targetElement = this.getAttribute('data-scroll-to');
      document.getElementById(targetElement).scrollIntoView({ behavior: 'smooth' });
    });
  });
}
two();