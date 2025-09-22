const darkBtn = document.querySelector(".Dark");
const icon = darkBtn.querySelector("i");

document.querySelector(".Dark").addEventListener("click", () => {
  document.body.classList.toggle("lighton");

  // switch icon
  if (document.body.classList.contains("lighton")) {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
    icon.style.color = "#00000045"; 
  } else {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
    icon.style.color = "#ffd43b";
  }
});


//projects

const projectsbuttons = document.querySelectorAll(".filter-btn");
const datainit = document.querySelectorAll(".mainprojects section");

//loop

projectsbuttons.forEach((btn)=>{
  btn.addEventListener("click",()=>{


    //means when buttin is clicked then
    projectsbuttons.forEach((b)=>b.classList.remove("active"));
    btn.classList.add("active");

    const filtervalue=btn.getAttribute("data-filter");
    


    datainit.forEach((section)=>{
      if(filtervalue=="All"){
        section.style.display="grid";
      }
      else if (section.id === filtervalue) {
        section.style.display = "grid"; 
      } else {
        section.style.display = "none"; 
      }
    });
    
  });
});


const contactform = document.querySelector(".Contactform");

contactform.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = contactform.querySelector("input[name='name']").value.trim();
  const email = contactform.querySelector("input[name='email']").value.trim();
  const message = contactform.querySelector("#message1").value.trim();

  
  contactform.querySelector(".errorname").textContent = "";
  contactform.querySelector(".errormail").textContent = "";
  contactform.querySelector(".errormessage").textContent = "";
  contactform.querySelector(".errorgeneral").textContent = "";

  let haserror = false;

  if (name === "") {
    contactform.querySelector(".errorname").textContent = " Name is required.";
    haserror = true;
  }

  if (email === "") {
    contactform.querySelector(".errormail").textContent = " Email is required.";
    haserror = true;
  }

  if (message === "") {
    contactform.querySelector(".errormessage").textContent = " Message cannot be empty.";
    haserror = true;
  }

  if (!haserror) {
    contactform.querySelector(".errorgeneral").textContent = "✅ Message sent successfully!";
    contactform.reset();
  }
});

document.querySelector(".seeprojects").addEventListener("click", () => {
  document.querySelector("#projects").scrollIntoView({ behavior: "smooth" });
});


document.querySelector(".Contactme").addEventListener("click", ()=>{
  document.querySelector("#contact").scrollIntoView({behavior:"smooth"});
})


