
const hello1 = document.querySelector('.hello1');
const hello2 = document.querySelector('.hello2');
const hello3 = document.querySelector('.hello3');
const hello4 = document.querySelector('.hello4');
const hello5 = document.querySelector('.hello5');
const social = document.querySelector('.social');
const logo = document.querySelector('.logo');
const tl = gsap.timeline();

tl.to(hello1, 0, {autoAlpha: 0})
.to(logo, 20, {rotation: 360, ease: Linear.easeNone, repeat: -1}, 0)
.to(social, 0, {x:100}, 0)
.add("end",1)
.to(hello1, 0.5, {autoAlpha: 1}, "end")
.to(social, 1, {x:0}, "end");
tl.fromTo(hello2, 0.6, {autoAlpha: 0}, {autoAlpha: 1}, 2)
tl.fromTo(hello3, 0.6, {autoAlpha: 0}, {autoAlpha: 1}, 2.4)
tl.fromTo(hello4, 0.6, {autoAlpha: 0}, {autoAlpha: 1}, 2.8)
tl.fromTo(hello5, 0.6, {autoAlpha: 0}, {autoAlpha: 1}, 3.2);