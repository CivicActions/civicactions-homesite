(self.webpackChunkcivic_actions_homesite=self.webpackChunkcivic_actions_homesite||[]).push([[501],{9458:function(e,t,a){"use strict";var n=a(7294);t.Z=function(e){var t=e.title,a=e.description;return n.createElement("div",{className:"hero-component"},n.createElement("div",{className:"inner"},n.createElement("h1",null,t),n.createElement("p",{className:"body"},a)))}},9763:function(e,t,a){"use strict";var n=a(7294),c=a(5444);t.Z=function(e){var t=e.size,a=e.src,r=e.text,s=e.type;return n.createElement(c.rU,{className:"button "+("secondary"==s?"button__secondary":"button__primary")+" "+(null!=t?t:" "),to:a},r)}},9340:function(e,t,a){"use strict";var n=a(7294),c=a(9763);t.Z=function(e){var t=e.title,a=e.subtitle,r=e.primaryButtonText,s=e.secondaryButtonText;return n.createElement("section",{className:"primary-page-cta"},n.createElement("div",{className:"inner"},n.createElement("div",{className:"column"},n.createElement("h3",null,t),n.createElement("h5",null,a)),n.createElement("div",{className:"row"},n.createElement(c.Z,{src:"/contact",type:"primary",text:r}),n.createElement(c.Z,{src:"/services",type:"secondary",text:s}))))}},1777:function(e,t,a){"use strict";a.d(t,{Z:function(){return d}});var n=a(7294),c=(a(4692),a(5444)),r=a.p+"static/CA-white-e8d26f610893dfd9387a448d81952c5d.svg",s=a(9235),i=function(e){var t=e.onMenuClick,a=e.mobileMenuHiddenBool?"mobile-menu-closed":"mobile-menu-open";return n.createElement("header",{className:"header red-header "+a},n.createElement("div",{className:"red-header--header"},n.createElement("div",{className:"inner"},n.createElement(c.rU,{to:"/",className:"logo"},n.createElement("img",{src:r,alt:"Civic Actions Logo"})),n.createElement("div",{className:"header-nav"},n.createElement(c.rU,{to:""},"company"),n.createElement(c.rU,{to:"/services"},"services"),n.createElement(c.rU,{to:""},"our work"),n.createElement(c.rU,{to:""},"insights"),n.createElement(c.rU,{to:""},"careers"),n.createElement("div",{className:"primary-button"},"contact us")),n.createElement("div",{className:"header-nav-mobile",onClick:t,role:"button",tabIndex:0,onKeyDown:function(){}},n.createElement("img",{src:s.Z,alt:""})))))},l=a(3958),o=a(4396),A=a(5414),m=a(9609),d=function(e){var t=e.children,a=(0,n.useState)(!0),c=a[0],r=a[1];return n.createElement("div",{style:{position:"relative"}},n.createElement(A.q,{htmlAttributes:{lang:"en"}}),n.createElement("div",null,n.createElement(m.p,{id:"main-content"}),n.createElement("img",{className:"red-rectangle",src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI0NjIiIHZpZXdCb3g9IjAgMCAxNDQwIDQ2MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMEgxNDQwVjIxMi43ODdMMCA0NjJWMFoiIGZpbGw9IiNEODM5MzMiLz4KPC9zdmc+Cg==",alt:"background red color"}),n.createElement(i,{onMenuClick:function(){return r(!1)},mobileMenuHiddenBool:c}),n.createElement("main",{id:"main-content"},n.createElement("div",null,t)),n.createElement(l.Z,null)),n.createElement(o.Z,{hidden:c,close:function(){return r(!0)}}))}},2015:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return o}});var n=a(7294),c=a(1777),r=a(9340),s=a(9458),i=[];var l=function(e){var t=function(e){var t=(0,n.useState)(!1),a=t[0],c=t[1],r=(0,n.useState)(!1),s=r[0],l=r[1];return(0,n.useEffect)((function(){if(!i.includes(e)){i.push(e);var t=document.createElement("script");t.src=e,t.async=!0;var a=function(){c(!0),l(!1)},n=function(){var a=i.indexOf(e);a>=0&&i.splice(a,1),t.remove(),c(!0),l(!0)};return t.addEventListener("load",a),t.addEventListener("error",n),document.body.appendChild(t),function(){t.removeEventListener("load",a),t.removeEventListener("error",n)}}c(!0),l(!1)}),[e]),[a,s]}("https://js.hsforms.net/forms/v2.js"),a=t[0],c=t[1],r=(0,n.useState)(!1),s=r[0],l=r[1];return(0,n.useEffect)((function(){if("undefined"!=typeof window&&window){var t=window;a&&t.hbspt&&!s&&(t.hbspt.forms.create(e),l(!0))}}),[a,s,l]),{loaded:a,formCreated:s,error:c}},o=function(){var e=l({portalId:"9391823",formId:"38c64225-614c-4786-876f-12d3174cb330",target:"#contact-hubspot-form"}),t=(e.loaded,e.error,e.formCreated,{color:"white"});return n.createElement(c.Z,null,n.createElement(s.Z,{title:"Put us to work",description:"We love solving hard problems. Tell us about your challenge or idea, and we’ll get in touch to discuss a plan of action."}),n.createElement("section",{className:"contact--form"},n.createElement("div",{className:"inner"},n.createElement("div",{id:"contact-hubspot-form"}))),n.createElement("section",{className:"contact--ways-to-contact--section"},n.createElement("div",{className:"inner"},n.createElement("h3",{style:t},"More ways to reach us"),n.createElement("p",{className:"body",style:t},"Feel free to connect with us about work opportunities, speaking engagements, potential partnerships, or just to say hi."),n.createElement("div",{className:"contact-grid"},n.createElement("div",{className:"grid"},n.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMlSURBVHgB7VmBdZswED1ngdIJqhG8Qdig7gRlg3oDOxtkA9MJnA1wJ0gyAXQC7AmuunJ6HHIMJ2Fwm5f/3pn3sE763H1JhwD4wLxYwBWAiIm9LNmMtU/WEv77aO23tRdr1WKxeIFbgshaW1srMAyltZ21FEYgOOIc3R/W1tBG9dXaAZqokh2FS8JG2Uit3Qu/ytqDzUIOU4IjXHPk6Lq1ZiAQ1iezdhBZeI7pRzMQyWLvEU5gJIgsk3ZYw7XAnZdTRsbL5AbGwiOdXyPKyrF2EAuvoy3MAG/MuMgLTecwIzzy30OdN9iuuZPJo2d8w5qv1XNKOCFOsUQpwROWUGgd8jl1PcClYC7pUEMTKxFsS4C90KhbQncYscWTjyrq2GwshKCNALvrcB92ofITUU/6GpWh2hYTmUDb+MoNwllIhfxcNg1n5lnRf8Z+20sNltzgCZTAdgLVQ1nC7jJXsg/C8BhJr1zEk2WggEckVfoQCVmbDBJnv8KXy534f8lXbaG/gualgcrSg8bBtqNy9xt0y14NXvlqzv5xTwVKxMwH4bsNjPiZGmTEKQ0VKMApM9Z+2SiqfDw8Qhhcht6UymfQI1RWHbBkQuTi2n51N+5gHEK1KnGiH1rNFG3d66BxN2KJV3z9AuMxuENzhk7yniROT2VAAdY1dbaCeNQwApJ4RT8Bq8RPawnGHzOMkdk5cWiOEDR45MF3eIOaXRJ3W/29xpHl8gCNvIqI9fwE4Xg7S3bwimsIdQRt20dRf2QRfoOVqKhXdpcaxJa1W1F+0APs+d4a2xp95fnoam3oFHMp9DwZRbyEQHDRlWP3JcKh9omzT8H/b3r6XbL/AQYIREXd68PV4aZPduidpch5wn1sXCBxaA6JqOvfsEfAI4+CqIP+9AxD37CvAGwPQiu2JwyY7LKj/ZD+/kmwZMr/lbx5L+SnOmY2GHF0oemYZJOLWX+16GP3TCaDKcAz30W/5HXWQCCwPfWSfaUwJbDdISUKbGoPOgyinS654JexJGpBOIM5IYgc8DLcZlJ793Kc+3PhhYeQnwMNtJ8Ij8L+fkq8+QfaD0TiD52UX930oASvAAAAAElFTkSuQmCC",alt:"email icon"}),n.createElement("p",{className:"label body",style:t},"EMAIL"),n.createElement("a",{style:t,href:"mailto:contact@civicactions.com",className:"link body"},"contact@civicactions.com")),n.createElement("div",{className:"grid"},n.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAYAAADjVADoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQoSURBVHgB7VrtceIwEF2Y/Ier4JQKQio4p4L4OvB1QCqIUwG5CuAqIKkAXwUkFZirAFKBTjteX9ayVpYzmSMmejMasPW0Wj30sZIAiIiIiIiIiIiIiIiIeH+M7Bda67n5mJj0B04XB5OeRqPRrn7REMKIkJqPNXwOoBCX9cPYypzC58ELfzgTSL9NysAPBVXvQfF2Jn2HqstxJCYt6fsTcWwsiYe4M2nl4CxMSun7jUkPDl829H1n0hXIKKELZmhkusI2gFvqV6SOfMU4+KkcnFtmYyvUwzm5I3/K6tnzesiH1HpXowBP4zJGXGAlAm/hc444JeMoR37K8iWhZgFCrRkns/K2zP6M3vUWwumgxSkFO1youSNfWULNOjgtPxy+5I78e6s987cKUTuRMs7c5xxxHohzL+QnPqGIk/qEIk7e1SjGsVGECFE4DNxaTs48dqbEmXo4M+2YWywO2kgCOKqDk+hmDwwXgp7x19+zwl7HPzJ0ezjufeTMVosZ2HcpPwQwIRqT71lXQQpDz7Gbm+8H+M+gIakC6Xc8bO5AUEDVwpFEwKGY9yjyBV4Dr16QhJgcqwdY4JMt+vIi8CbEbUzOuoorcFK/79FT2jHCsecEy5/Mw3Muo+Z5Z7dFWjXGHj+w4GbIK4VBHccok1CMuUSUhDgwA2vNYoghwQwHFAI3YDt6tZC4khDPUO3yamDXW/sCpI8KI0YBTTGcGHsMoJrnzAAOkQwGCJwoTcK2/JQ44y4DUKn5CNUZxQMMGKY94hwRGlANecIMwhhOHKHzmiTEhW/dHgpMG/D4bh+y6klDA1VcGgNfzdC4g4+Ba0+A9014X/eGnHpGWFu0+2Bmo48UYQr++FBY5XHnvNXNaNnJlXoEnjijggqqE+aNKXjVK15/H+AqNYPwa4Yn/kD+XurqGC98F6ubJ1R4yrSyFE9goNDtQ6aC5/sCqoNJGTTHlYKBggLESyk/JI7IST1lvq9gwMChYtrizAs6mKF4/aQhDY0JnABonktCuJIQeNQ+yK23BQyocMUTb+2c0O11e6MHfHJN/vMYQkmrhl1QuulSnjLY/XBCTT0cRRzVUXeu/ZdC87716OZFVdlXCIzG1pYg0tXcv1hDyOe31UuQG9hVzy3lixcz+rUHlA77e6s9BUC3EAU951bhTHAOkQs2V1J5ylfMSeclkiWUJKbXF92+6SogVAh6lzID/DI46TL6Buekm/NaKOROPX6LQjFbbxOCGZgJDSiFX5ELFfLfhlxwvK5H6i2dQll8pxBSQHVBv87BMlKLwTcwv0zCRts2+PL7qNvD4gKaJ187B+ea1VN46pkyX1ItRI9UZ41G2+x/1aHBLQx4T9EDP/iWoRFQ0RUfHtY+w+kC23hj75tGEpt6x+DuMbpwhDOViIiIiIiIiIiIiIhPjL+e/7/ctUXAEgAAAABJRU5ErkJggg==",alt:"mail icon"}),n.createElement("p",{style:t,className:"label body"},"MAIL"),n.createElement("a",{style:t,href:"https://www.google.com/maps/place/3527+Mt+Diablo+Blvd+%23269,+Lafayette,+CA+94549,+USA/data=!4m2!3m1!1s0x8085625abdbe2b5d:0x1ab127226da2131c?sa=X&ved=2ahUKEwjvoPTJ7cTwAhVGT6wKHRJAAssQ8gEwAHoECAUQAQ",className:"link body"},"3527 Mt Diablo Blvd #269 Lafayette, CA 94549")),n.createElement("div",{className:"grid"},n.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAA0CAYAAADIZmusAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKWSURBVHgB7ZnhUfMwDIYV7vv/sQFmAhghbAAT0A0oE5AN2g3KBpQJkg0KEyRMUJjASESmIrS13cSJw/W5Mz5cx9Ib2bGcABw5cmQfSbNBaz3D6hoOp8BynyTJOwwJCql0ezLomX97frvB8gL+PGE5g57ZJmQNtSPvOD0q8ASjMciUOtnSZhw5hRGxTcgb16MX8mciUnGtYET8aSEF1xcwIn4J4R2ZFryCEXGyo72gP7gnXMJI2CXE7OgpWECxCssTlpwKNpH4D4gBdo5YOvSdNPKsgq6HWODkcY3l1NLvkgUsIEYog2UHU4e+JLiEGCEBLCR36Ju7ih4E4aBtek2HOoc44eogCeXpZV1Tg+DjIP7+GHtUMseomEd21FHRjlGZc98ZxIhwMLP0M1ORaPMmJgyNtaIsfVMRQQWxIdZK7tG3jE4MR6V0nTZiOtI1cWXRvtNGRIZ4gIAknv2/7jRWd1gKPIRdOfTPsDIi6Hhws+t9Gd+cKZb/YIeOCvND3r1Jgyufx6yuM+RSRGeht+RljT4ufK9X74iwQYXVCupXRvTCeu54XYbVLWyO0RXUp9FnbqMbs+T/bZhjw3nbqKTizqQe11EGMNlz9zPHcQwK2qI3SSUtfu8nE085GmPJZe7qWKdCeMCsjZgWdrsVwoNKMbfQA0GE8MC97RlsL4wQHnwqDMx0wHQ+qBA2IPeMMpSh4ELYCD1i85BTrRchwphcNxSdFDqiVyFskKKzEoYXXRjvXYgw3NzNF20iNJgQ4UBTUMltynOcYYUIR8j5Qv8k53ZrhtAUclD22yXsCJ04J/DzK1kF9fnllWv6AFWZTJcUcL922W8I9CYzpkit9W7W0UVkHzzFFNQfjxRszjGmpgilcCRCPgFMdUzQBC/DQgAAAABJRU5ErkJggg==",alt:"phone icon"}),n.createElement("p",{style:t,className:"label body"},"PHONE"),n.createElement("a",{style:t,href:"tel:510-408-7510",className:"link body"},"(510) 408-7510"))))),n.createElement(r.Z,{title:"Let’s build a public success story.",subtitle:"Get in touch to start.",primaryButtonText:"HIRE US",secondaryButtonText:"EXPLORE SERVICES"}))}}}]);
//# sourceMappingURL=component---src-pages-contact-js-2773264ed736bae7b7dd.js.map