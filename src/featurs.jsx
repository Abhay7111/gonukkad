import React, { useEffect } from 'react'

function Featurs() {
     useEffect(()=>{
          const btn_1 = document.querySelector(".btn_1");
          const btn_2 = document.querySelector(".btn_2");
          const btn_3 = document.querySelector(".btn_3");
          const btn_4 = document.querySelector(".btn_4");
          const btn_5 = document.querySelector(".btn_5");

          const cont_1 = document.querySelector(".cont_1");
          const cont_2 = document.querySelector(".cont_2");
          const cont_3 = document.querySelector(".cont_3");
          const cont_4 = document.querySelector(".cont_4");
          const cont_5 = document.querySelector(".cont_5");

          const progress_bar = document.querySelector(".progress_bar");
          const span1 = document.querySelector(".span1");
          const span2 = document.querySelector(".span2");
          const span3 = document.querySelector(".span3");
          const span4 = document.querySelector(".span4");
          const span5 = document.querySelector(".span5");

          

          btn_1.addEventListener("click", (e)=>{
               cont_1.style.display = "block"
               cont_2.style.display = "none"
               cont_3.style.display = "none"
               cont_4.style.display = "none"
               cont_5.style.display = "none"
               progress_bar.style.width = "0%"
               btn_1.style.backgroundColor = "#195180"
               span1.style.color = "#ffffff"
               span2.style.color = "#121212"
               span3.style.color = "#121212"
               span4.style.color = "#121212"
               span5.style.color = "#121212"
               btn_2.style.backgroundColor = "#ffffff"
               btn_2.style.color = "#121212"
               btn_3.style.backgroundColor = "#ffffff"
               btn_3.style.color = "#121212"
               btn_4.style.backgroundColor = "#ffffff"
               btn_4.style.color = "#121212"
               btn_5.style.backgroundColor = "#ffffff"
               btn_5.style.color = "#121212"
          })
          btn_2.addEventListener("click", (e)=>{
               cont_1.style.display = "none"
               cont_2.style.display = "block"
               cont_3.style.display = "none"
               cont_4.style.display = "none"
               cont_5.style.display = "none"
               progress_bar.style.width = "25%"
               btn_2.style.backgroundColor = "#195180"
               span2.style.color = "#ffffff"
               span1.style.color = "#121212"
               span3.style.color = "#121212"
               span4.style.color = "#121212"
               span5.style.color = "#121212"
               btn_1.style.backgroundColor = "#ffffff"
               btn_1.style.color = "#121212"
               btn_3.style.backgroundColor = "#ffffff"
               btn_3.style.color = "#121212"
               btn_4.style.backgroundColor = "#ffffff"
               btn_4.style.color = "#121212"
               btn_5.style.backgroundColor = "#ffffff"
               btn_5.style.color = "#121212"
          })
          btn_3.addEventListener("click", (e)=>{
               cont_1.style.display = "none"
               cont_2.style.display = "none"
               cont_3.style.display = "block"
               cont_4.style.display = "none"
               cont_5.style.display = "none"
               progress_bar.style.width = "50%"
               btn_3.style.backgroundColor = "#195180"
               span3.style.color = "#ffffff"
               span2.style.color = "#121212"
               span1.style.color = "#121212"
               span4.style.color = "#121212"
               span5.style.color = "#121212"
               btn_2.style.backgroundColor = "#ffffff"
               btn_2.style.color = "#121212"
               btn_1.style.backgroundColor = "#ffffff"
               btn_1.style.color = "#121212"
               btn_4.style.backgroundColor = "#ffffff"
               btn_4.style.color = "#121212"
               btn_5.style.backgroundColor = "#ffffff"
               btn_5.style.color = "#121212"
          })
          btn_4.addEventListener("click", (e)=>{
               cont_1.style.display = "none"
               cont_2.style.display = "none"
               cont_3.style.display = "none"
               cont_4.style.display = "block"
               cont_5.style.display = "none"
               progress_bar.style.width = "75%"
               btn_4.style.backgroundColor = "#195180"
               span4.style.color = "#ffffff"
               span2.style.color = "#121212"
               span3.style.color = "#121212"
               span1.style.color = "#121212"
               span5.style.color = "#121212"
               btn_2.style.backgroundColor = "#ffffff"
               btn_2.style.color = "#121212"
               btn_3.style.backgroundColor = "#ffffff"
               btn_3.style.color = "#121212"
               btn_1.style.backgroundColor = "#ffffff"
               btn_1.style.color = "#121212"
               btn_5.style.backgroundColor = "#ffffff"
               btn_5.style.color = "#121212"
          })
          btn_5.addEventListener("click", (e)=>{
               cont_1.style.display = "none"
               cont_2.style.display = "none"
               cont_3.style.display = "none"
               cont_4.style.display = "none"
               cont_5.style.display = "block"
               btn_5.style.backgroundColor = "#195180"
               span5.style.color = "#ffffff"
               span2.style.color = "#121212"
               span3.style.color = "#121212"
               span4.style.color = "#121212"
               span1.style.color = "#121212"
               progress_bar.style.width = "100%"
               btn_2.style.backgroundColor = "#ffffff"
               btn_2.style.color = "#121212"
               btn_3.style.backgroundColor = "#ffffff"
               btn_3.style.color = "#121212"
               btn_4.style.backgroundColor = "#ffffff"
               btn_4.style.color = "#121212"
               btn_1.style.backgroundColor = "#ffffff"
               btn_1.style.color = "#121212"
          })



     })
}

export default Featurs