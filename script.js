const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('nav');
if(menuBtn) menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));

document.querySelectorAll('form').forEach(form=>{
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const msg=form.querySelector('.form-message');
    if(msg) msg.textContent='Thank you! Your enquiry has been received.';
    form.reset();
  });
});

const year=document.querySelector('#year');
if(year) year.textContent=new Date().getFullYear();
