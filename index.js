// Js for project section,
// Selected project appear

document.querySelector(".project-navbar").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default anchor behavior

    let target = event.target.closest(".project-navitem"); // Ensure clicking on <div> works too
    if (!target) return; // If clicked outside, do nothing

    let category = target.getAttribute("data-category"); // Get selected category

    // Change the title
    document.getElementById("project-title").innerText = category.toUpperCase();

    // Hide all project sections
    document.getElementById("html-projects").style.display = "none";
    document.getElementById("css-projects").style.display = "none";
    document.getElementById("javascript-projects").style.display = "none";
    document.getElementById("bootstrap-projects").style.display = "none";
    document.getElementById("react-projects").style.display = "none";

    // Show the selected project section
    if (category === "html") {
        document.getElementById("html-projects").style.display = "flex";
    } else if (category === "css") {
        document.getElementById("css-projects").style.display = "flex";
    } else if (category === "javascript") {
        document.getElementById("javascript-projects").style.display = "flex";
    } else if (category === "bootstrap") {
        document.getElementById("bootstrap-projects").style.display = "flex";
    } else if (category === "react") {
        document.getElementById("react-projects").style.display = "flex";
    }
});

// Animation
// Animation fo home section

gsap.from(".nav-item", {
    opacity: 0,
    y: -20,
    duration: 1,
    stagger: 0.2
})

gsap.from("h2", {
    opacity: 0,
    x: -100,
    duration: 1,
    delay: 0.5
})

gsap.from("h1", {
    opacity: 0,
    x: -100,
    duration: 2,
    delay: 1
})

gsap.from(".typing", {
    opacity: 0,
    x: -100,
    duration: 1,
    delay: 1.5
})

gsap.from(".img-one", {
    opacity: 0,
    y: -100,
    duration: 1.5,
    delay: 0.5
})

gsap.from(".img-two", {
    opacity: 0,
    x: -100,
    duration: 2,
    scrollTrigger: {
        trigger: ".img-two",
        scroller: "body",
        toggleActions: "play reverse play reverse",
        scrub: true,
        end: "top 30%"
    }
})

gsap.from([".html", ".css", ".js", ".react"], {
    opacity: 0,
    scaleX: 0,
    transformOrigin: "left center",
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".about",
        scroller: "body",
        start: "top 30%",
        end: "top 10%",
        toggleActions: "play reverse play reverse",
        scrub: 2,
    }
});

gsap.from([".show-project", ".project-navitem-container"], {
    opacity: 0,
    y: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: ".project",
        scroller: "body",
        start: "top 30%",
        end: "top 10%",
        toggleActions: "play reverse play reverse",
        scrub: 2,
    }
})

gsap.from(".contact-info-card",{
    opacity: 0,
    x: -100,
    duration: 1.5,
    scrollTrigger:{
        trigger:".contact",
        scroller:"body",
        start: "top 70%",
        end: "top 10%",
        toggleActions: "play reverse play reverse",
        scrub: 2,
    }
})