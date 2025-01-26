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
