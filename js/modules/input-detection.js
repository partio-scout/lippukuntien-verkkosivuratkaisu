// adds data-input and data-intent to <html> for different styles for keyboard and mouse
// for example, for keyboard only outlines
import 'what-input'; 

// adds .touch-device class to <body> on touch screen
window.addEventListener('touchstart', function onFirstTouch() {
    document.body.classList.add('touch-device');
    window.removeEventListener('touchstart', onFirstTouch, false);
});
