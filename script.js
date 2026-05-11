$(document).ready(function () {

  // ================= SKILLS ANIMATION =================
  $(".bar").each(function () {
    let level = $(this).data("level");

    $(this).animate({
      width: level + "%"
    }, 1200);
  });


  // ================= CONTACT FORM VALIDATION =================
$("#contactForm").submit(function (e) {
  e.preventDefault();

  let name = $(this).find("input[type='text']").val().trim();
  let email = $(this).find("input[type='email']").val().trim();
  let message = $(this).find("textarea").val().trim();

  if (name === "" || email === "" || message === "") {
    alert("❌ Tous les champs sont obligatoires !");
  }
  else if (!email.includes("@") || !email.includes(".")) {
    alert("❌ Email invalide !");
  }
  else {
    alert("✅ Message envoyé avec succès !");
    this.reset();
  }
});

  // ================= SCROLL EFFECT =================
  $(window).on("scroll", function () {

    $("section").each(function () {

      let position = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();

      if (scroll + windowHeight > position + 100) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }

    });

  });

});

const { useState } = React;

// ===== Project Card Component =====
function ProjectCard(props) {
  return (
    React.createElement("div", { className: "project" },

      React.createElement("h3", null, props.title),

      React.createElement("p", null, props.description),

      React.createElement("p", null, "Technologies: " + props.tech)
    )
  );
}

// ===== Projects App =====
function App() {
  return (
    React.createElement("div", null,

      React.createElement(ProjectCard, {
        title: "Site Web Maroc",
        description: "Site sur la culture et monuments du Maroc",
        tech: "HTML, CSS, JS"
      }),

      React.createElement(ProjectCard, {
        title: "Jeu C++",
        description: "Petit jeu développé en S4",
        tech: "C++"
      }),

      React.createElement(ProjectCard, {
        title: "TP Web",
        description: "Petits projets d'apprentissage",
        tech: "HTML, CSS, JS"
      })

    )
  );
}

// ===== Render React in HTML =====
const root = ReactDOM.createRoot(document.getElementById("react-projects"));
root.render(React.createElement(App));