var images = [],
  x = -1;

images[0] = 'http://platinum-im.net/hash/thumbs/a/0/a/3/a0a3-depositphotos_25066217-Funny-animals-in-flowers.-Cartoon-seamless-pattern-for-childish-designs.-Hamster-cat-dog-turtle.-Seamless-pattern-can-be-used-for-wallpaper-pattern-fills-web-page-background-surface-textures..jpg'
images[1] = 'http://png.clipart.me/graphics/thumbs/140/doodle-floral-texture-with-animals-copy-that-square-to-the-side-and-you-ll-get-seamlessly-tiling-pattern-which-gives-the_140773369.jpg'
images[2] = 'http://floral-designs.org/hash/seamless-pattern-samples/d/9/c/d9c-vector-vector-seamless-pattern-with-cute-funny-animals-150373913.jpg'
images[3] = 'http://cdnstatic.visualizeus.com/thumbs/7c/cd/animal,fox,illustration,nature,pattern,animals-7ccd120b0b05a3b8adf3be347a04a30c_h.jpg'

function displayNextImage() {
  x = (x === images.length - 1) ? 0 : x + 1;
  document.getElementById('body:after').style.backgroundImage = "url(" + images[x] + ")";
}

function displayPreviousImage() {
  x = (x <= 0) ? images.length - 1 : x - 1;
  document.getElementById('body:after').style.backgroundImage = "url(" + images[x] + ")";
}

function startTimer() {
  setInterval(displayNextImage, 24);
}

$(document).ready(function() {

  $('#animate-avatar').addClass('animated fadeInDown');

  $('#circle-animate').addClass('animated fadeInDown');

  $('#circle-animate-xs').addClass('animated fadeInDown');

  $('#mlg').addClass('animated fadeInDown');

  $('#header-animate').addClass('animated fadeInLeft')

  $('#header-animate-xs').addClass('animated fadeInLeft')

  $('#article-p-animate').addClass('animated fadeInLeft')

  $('#article-p-animate-xs').addClass('animated fadeInLeft')
});