
document.addEventListener('mousemove', function(e) {
    const leftEye = document.querySelector('.ulls .uesq');
    const rightEye = document.querySelector('.ulls .udre');
    
    
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    
    function movePupil(eye) {
        
        const eyeRect = eye.getBoundingClientRect();
        const eyeCenterX = eyeRect.left + eyeRect.width / 2;
        const eyeCenterY = eyeRect.top + eyeRect.height / 2;
        
        
        const angle = Math.atan2(mouseY - eyeCenterY, mouseX - eyeCenterX);
        
        
        const maxDistance = 20; 
        const pupilX = Math.cos(angle) * maxDistance;
        const pupilY = Math.sin(angle) * maxDistance;
        
        
        eye.style.setProperty('--pupil-x', `${pupilX}px`);
        eye.style.setProperty('--pupil-y', `${pupilY}px`);
    }
    
    
    if (leftEye) movePupil(leftEye);
    if (rightEye) movePupil(rightEye);
});
