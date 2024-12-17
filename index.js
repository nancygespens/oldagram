const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "img/avatar-vangogh.jpg",
        postImage: "img/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "img/avatar-courbet.jpg",
        postImage: "img/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "img/avatar-ducreux.jpg",
        postImage: "img/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
];

const mainEl = document.getElementById('main-content');
let html = '';

for (let i = 0; i < posts.length; i++) {
    // Determine the class name for <div>
    let containerClass = "";
    if (i === 0) {
        containerClass = "two";
    } else if (i === 1) {
        containerClass = "three";
    } else if (i === 2) {
        containerClass = "four";
    }

    // Determine if the section gets a class
    let sectionClass = "";
    if (i === 0) {
        sectionClass = "post-content";
    }

    // HTML
    html += `
        <section class="${sectionClass}">
            <div class="container ${containerClass}">
                <div class="top">
                    <img src=${posts[i].avatar} alt="${posts[i].name} avatar" class="avatar">
                    <p><span>${posts[i].name}</span> ${posts[i].location}</p>
                </div>

                <img src=${posts[i].postImage} id="postImage-${i}" alt="${posts[i].name} selfie" class="mainPhoto">
                
                <div class="bottom">
                    <div class="icons">
                        <img class="icon" src="img/icon-heart.png" id="heartIcon-${i}" alt="heart icon">
                        <img class="icon" src="img/icon-comment.png" alt="comment icon">
                        <img class="icon" src="img/icon-dm.png" alt="dm icon">
                    </div>
                    <p>
                        <span id="likes-${i}">${posts[i].likes} likes</span>
                        <span class="comment">${posts[i].username}</span> ${posts[i].comment}
                    </p>
                </div>
            </div> 
        </section>
    `;
}

mainEl.innerHTML = html;

// Add Event Listeners for Double Clicks
for (let i = 0; i < posts.length; i++) {
    // Select the post image and heart icon
    const postImageEl = document.getElementById(`postImage-${i}`);
    const heartIconEl = document.getElementById(`heartIcon-${i}`);
    const likesEl = document.getElementById(`likes-${i}`);

    // Event handler function to increase likes
    const increaseLikes = () => {
        posts[i].likes += 1; // Increase likes in the posts array
        likesEl.innerText = `${posts[i].likes} likes`; // Update displayed likes
    };

    // Double-click listener for post image
    postImageEl.addEventListener("dblclick", increaseLikes);

    // Double-click listener for heart icon
    heartIconEl.addEventListener("dblclick", increaseLikes);
}