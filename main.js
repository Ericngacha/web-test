window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toggle
    ('window-scroll',window.scrollY > 0)
})
/*========nav menu==========*/
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)



    <section class="activities">
            <h2>Our Co-Curricular Activities</h2>
            <div class="container activities__container">
            <article class="activity">
                <div class="activity__image">
                    <img src="./images/journalism.jpg" alt="">
                </div>
                <div class="activity__info">
                <h4>Journalism</h4>
                <p>Learners take part in video & audio editing, photography,
                    graphics design and acquire skills in multimedia technology.
                </p>
                </div>
            </article>
            <article class="activity">
                <div class="activity__image">
                    <img src="./images/robotics.jpg" alt="">
                </div>
                <div class="activity__info">
                <h4>Coding and Robotics</h4>
                <p>Creating awareness of emerging trends in technology among the learners.
                    Training them to create and innovate computer programs,farmiliarizing them with robotics and Artificial Intelligence.
                </p>
                </div>
            </article>
            <article class="activity">
                <div class="activity__image">
                    <img src="./images/Music.jpg" alt="">
                </div>
                <div class="activity__info">
                <h4>Music and Drama</h4>
                <p>Enhancing our children's talents and abilities. Providing a suitable platform for them to showcase them to the greater World.
                </p>
                </div>
            </article>
            <article class="activity">
                <div class="activity__image">
                    <img src="./images/Swim.jpg" alt="">
                </div>
                <div class="activity__info">
                <h4>Swimming</h4>
                <p>Advanced and beginner swimming classes.
                </p>
                </div>
            </article>
            <a href="academics.html" class="btn btn-primary">See More</a>
            </div>
        </section>
