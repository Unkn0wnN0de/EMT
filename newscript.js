window.addEventListener("load", () => {
    console.log(`Loaded Successfully`);
  });

 //** Selectors */
  const subjectBtns = document.querySelectorAll(".subject-btn");
  const allAnchorSubjects = document.querySelectorAll(".subjects");


//** add eventlisteners to all subjects and send the selected subject on home page to session storage to use on quizscript page */

for( key of allAnchorSubjects) {
    key.addEventListener("click", (e) => {
      console.log(e.target.id);
      if (e.target.id === "") {
        console.log(e.target.parentElement, e.target.parentElement.id);
        sessionStorage.setItem("subject", e.target.parentElement.id)}
      else {
          sessionStorage.setItem("subject", e.target.id);
        }
    })
};
