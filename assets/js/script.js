let reachNums = document.getElementsByClassName('reached-nums-data');
let isAlreadyScrolled = false;

const loadAllReachedValues = async()=> {
    for(let i = 0; i < reachNums.length; i++) {
        let e = reachNums[i], inVal = 0;
        let reachVal = e.getAttribute('data-reachedNum');
        let finalVal = e.getAttribute('data-reachedNumFinally');
        let incVal = Math.round(reachVal/20);
        
        let intervals = setInterval(() => {
            if((inVal + incVal) < reachVal) {
                e.innerHTML = inVal+=incVal;
            } else {
                e.innerHTML = finalVal;
                clearInterval(intervals);
            }
        }, 50);
    }
    isAlreadyScrolled = true;
}

window.onscroll = ()=> {
    if(!isAlreadyScrolled) {
        // setTimeout(() => {
            loadAllReachedValues();
            // }, 100);
        }
    }
    


// Testimonials Script...
let btnLeft = document.getElementById('testimonial-btn-left');
let btnRight = document.getElementById('testimonial-btn-right');
let testimonialSection = document.getElementById('testimonials-section');
let testmonialChilds = document.querySelectorAll('.our-Team-member-section div.col');
let testimonialPos = 0;

const changeTestimonialPosition = (val)=> {
    testimonialPos += val;
    let currPos = (testimonialPos >= 0)? testimonialPos: testimonialPos * -1;
    
    if(currPos > (testmonialChilds.length*500)/4) {
        testimonialPos -= val;
        return;
    }
    testimonialSection.style.transform = `translateX(${testimonialPos}px)`;
}
changeTestimonialPosition(200);
btnLeft.addEventListener('click', (e)=> {
    changeTestimonialPosition(-350);
});

btnRight.addEventListener('click', (e)=> {
    changeTestimonialPosition(350);
});
// Testimonials Script...



// our-Team-member-section...



// let teamMemberSection = document.getElementById('our-Team-member-section');
// let teamMemberChilds = document.querySelectorAll('#our-Team-member-section div.col');
// let teamMemberPos = 0, teamMemberIndex = 0;

// const changeTOurTeamPosition = (val)=> {

//     setTimeout(() => {
//         teamMemberPos += val;
//         let currPos = (teamMemberPos >= 0)? teamMemberPos: teamMemberPos * -1;
        
//         teamMemberSection.style.transform = `translateX(${teamMemberPos}px)`;

//         if((teamMemberChilds.length*500) < currPos) {

//             teamMemberPos = 350;
//         }

//         changeTOurTeamPosition(-350);
//     }, 1000);
    
//     // console.log(teamMemberChilds[teamMemberIndex])
// }

// setTimeout(() => {
//     changeTOurTeamPosition(-350);
// }, 1000);

// // btnLeft.addEventListener('click', (e)=> {
// //     changeTestimonialPosition(350);
// // });

// // btnRight.addEventListener('click', (e)=> {
//     // changeTestimonialPosition(-350);
// // });

// // our-Team-member-section...

// Pre-loader functionality
const taglines = [
    "Empowering youth, one skill at a time.",
    "From comfort to growth – your journey starts here.",
    "Turning potential into success stories.",
    "Where dreams meet real-world opportunities.",
    "Bridging gaps between learning and doing.",
    "Nurturing talent for a brighter tomorrow.",
    "Opportunities don't happen. We create them.",
    "From tier-2 towns to global stages."
];

let currentTaglineIndex = Math.floor(Math.random() * taglines.length); // Start with random tagline
let taglineInterval;
let preloaderStartTime;
let minimumDisplayTime = 3000; // Minimum 3 seconds display time
const taglineElement = document.getElementById('tagline-text');
const preloader = document.getElementById('preloader');

// Function to rotate taglines
function rotateTaglines() {
    if (taglineElement) {
        // Fade out current tagline
        taglineElement.classList.add('fade');
        
                       setTimeout(() => {
                   // Update tagline text
                   currentTaglineIndex = (currentTaglineIndex + 1) % taglines.length;
                   taglineElement.textContent = taglines[currentTaglineIndex];
                   
                   // Fade in new tagline
                   taglineElement.classList.remove('fade');
               }, 400); // Increased from 250ms to 400ms for smoother transition
    }
}

               // Start tagline rotation
        function startTaglineRotation() {
            if (taglineElement) {
                // Start the first rotation immediately
                setTimeout(rotateTaglines, 2000); // First rotation after 2 seconds
                // Then continue with regular intervals
                taglineInterval = setInterval(rotateTaglines, 4000); // Continue every 4 seconds
            }
        }

// Stop tagline rotation and hide preloader
function hidePreloader() {
    // Check if minimum display time has passed
    const currentTime = Date.now();
    const timeElapsed = currentTime - preloaderStartTime;
    
    if (timeElapsed < minimumDisplayTime) {
        // If minimum time hasn't passed, wait for the remaining time
        setTimeout(hidePreloader, minimumDisplayTime - timeElapsed);
        return;
    }
    
    // Stop the tagline rotation
    if (taglineInterval) {
        clearInterval(taglineInterval);
    }
    
    // Add fade-out class to preloader
    if (preloader) {
        preloader.classList.add('fade-out');
        
        // Remove preloader from DOM after fade-out completes
        setTimeout(() => {
            if (preloader && preloader.parentNode) {
                preloader.parentNode.removeChild(preloader);
            }
        }, 600); // Match the CSS transition duration
    }
}

// Initialize preloader when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    preloaderStartTime = Date.now(); // Record start time
    
    // Set initial tagline
    if (taglineElement) {
        taglineElement.textContent = taglines[currentTaglineIndex];
    }
    
    // Start rotation after a short delay to ensure smooth first transition
    setTimeout(() => {
        startTaglineRotation();
    }, 1000); // Start rotation after 1 second
});

// Hide preloader when page is fully loaded
window.addEventListener('load', function() {
    hidePreloader();
});

// Fallback: Hide preloader after 8 seconds if load event doesn't fire
setTimeout(function() {
    if (preloader && !preloader.classList.contains('fade-out')) {
        hidePreloader();
    }
}, 8000); // Increased from 5s to 8s to ensure minimum display time
