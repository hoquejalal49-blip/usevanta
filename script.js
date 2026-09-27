
(function(){
  "use strict";
  const menuButton=document.querySelector("[data-menu-toggle]");
  const nav=document.querySelector("[data-nav]");
  if(menuButton&&nav){
    menuButton.addEventListener("click",function(){
      const open=nav.classList.toggle("open");
      menuButton.setAttribute("aria-expanded",String(open));
    });
    nav.querySelectorAll("a").forEach(function(link){
      link.addEventListener("click",function(){nav.classList.remove("open");menuButton.setAttribute("aria-expanded","false");});
    });
  }

  const form=document.querySelector("[data-search-form]");
  const input=document.querySelector("[data-search-input]");
  const message=document.querySelector("[data-search-message]");
  if(form&&input&&message){
    form.addEventListener("submit",function(e){
      e.preventDefault();
      const query=input.value.trim();
      if(!query){message.textContent="Enter a search term to look for a tool.";input.focus();return;}
      message.textContent="No tool is available for “"+query+"” yet.";
    });
  }

  const year=document.querySelector("[data-year]");
  if(year) year.textContent=new Date().getFullYear();
})();
