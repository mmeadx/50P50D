console.log("script.js running");

const testimonialsContainer = document.querySelector('.testimonials-container');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const userName = document.querySelector('.username');
const userRole = document.querySelector('.role')

const testimonials = [
    {
        name: 'Nicole Mead',
        position: 'Bad Ass Bitch',
        photo: 'https://content.malakye.com/media/uploads/images/personalprofiles/thumbs/725791_637020192158432060.jpeg',
        text: "He's the best brother I've ever had the pleasure of being related to."
    },
    {
        name: 'Adam Mead',
        position: 'Not my brother',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYVr5UkpaINKQ5O2MyWl2knSjJaeYprlto2A&usqp=CAU',
        text: "He's the best brother I've never had the pleasure of being related to."
    },
    {
        name: 'Molly Kalda',
        position: 'Wifey Extraordinaire',
        photo: 'https://images.squarespace-cdn.com/content/v1/5b71dbcb0dbda3b1c8395ac1/1550094551391-R987B5PYRONY5VQIM84G/021119.JPG?format=2500w',
        text: "Why did I marry him? Because he asked!"
    },
    {
        name: 'Tim Walz',
        position: 'MN Gov',
        photo: 'https://images.squarespace-cdn.com/content/v1/5b71dbcb0dbda3b1c8395ac1/1545171145593-7M2BQYA3GRZJ90QZR3CY/TimWalz.jpg?format=2500w',
        text: "Minnesota's biggest fan."
    }
];

let idx = 1;

function updateTestimonial() {
    const {name, position, photo, text} = testimonials[idx]

    testimonial.innerHTML = text;
    userImage.src = photo;
    userName.innerHTML = name;
    userRole.innerHTML = position;

    idx++

    if(idx > testimonials.length - 1) {
        idx = 0;
    }
}

setInterval(updateTestimonial, 10000);

