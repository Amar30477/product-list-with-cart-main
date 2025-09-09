<template>
   <div class="main d-flex p-5 bg-warning" style="min-height: 100vh; width: 100vw;">

      <div id="products" class="container m-3 w-75 bg-danger-subtle " style="min-height: 100vh; ">
         <h3 class="col-12 mb-4 ps-5">Desserts</h3>
         <div class="list d-flex w-100 gap-3 m-4 row row-cols-3 justify-content-start align-items-start">

            <div class="card order-1 border-0 bg-transparent" style="height: 28rem;width: 30%; ">
               <img src="..." class="card-img-top " alt="...">
               <div class="card-body">
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                  <h5 class="card-title">Card title</h5>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                  <p></p>
               </div>
            </div>
            <!-- <div class="card col order-2 bg-danger " style="height: 28rem;width: 30%; "><p>product2</p></div>
            <div class="card col order-3 " style="height: 28rem;width: 30%; "><p>product3</p></div>
            <div class="card col order-4 bg-primary" style="height: 28rem;width: 30%; "><p>product3</p></div>
            <div class="card col order-5 bg-secondary" style="height: 28rem;width: 30%; "><p>product3</p></div> -->
         </div>
      </div>
      <div id="Emptycart" class="w-25 p-4 m-3 rounded-4 algin-items-center" style="min-height: 100px; background-color: aqua;position: sticky; top: 2rem; ">
         <h2>your Cart(0)</h2>
         <img class="cartImg d-flex align-self-center m-auto w-100" src="./../../../assets/images/illustration-empty-cart.svg" alt="">
      </div>
      <div id="Fullcart" class="w-25 p-4 m-3 rounded-4 algin-items-center" style="min-height: 100px; background-color: aqua;position: sticky; top: 2rem; ">
         <h2>your Cart(0)</h2>
         <img class="cartImg d-flex align-self-center m-auto w-100" src="./../../../assets/images/illustration-empty-cart.svg" alt="">
      </div>
   </div>
</template>
<style scoped>


</style>
<script setup>
   import { useRoute } from 'vue-router';
   fetch("../../../../data.json")
   .then(Response => Response.json())
   .then(data => showinfo(data))
   function showinfo(data,){
      console.log(data);
      let prodlst = document.querySelector('.list');
      prodlst.innerHTML = "";
      document.querySelector('#Fullcart').style.display = "none";
      document.querySelector('#Emptycart').style.display = "block";
      // let dessimg = document.querySelector('.card-img-top');
      // dessimg.src = data[0].image;
      // let dessert = document.querySelector('.card');
      // let dessertname = document.querySelector('.card-title');
      // let dessertdiscrip = document.querySelector('.card-text');
      for (let index = 0; index < data.length; index++) {
         let link = document.createElement('router-link');
         link.setAttribute(':to', `/product/$` );
         link.style = "text-decoration: none; color: black;height: 100%;width: 30%;";
         let card = document.createElement('div');
         card.className = "card order-1 border-0 bg-transparent";
         card.style = "height: 28rem;width: 100%;";
         let img = document.createElement('img');
         img.className = "card-img-top rounded-4";
         img.setAttribute('src', data[index].image.desktop);
         let cardbody = document.createElement('div');
         cardbody.className = "card-body";
         let cardtext = document.createElement('p');
         cardtext.className = "card-text";
         cardtext.innerHTML = data[index].category;
         let cardtitle = document.createElement('h5');
         cardtitle.className = "card-title";
         cardtitle.innerHTML = data[index].name;
         let dPrice = document.createElement('h6');
         dPrice.className = "card-price";
         dPrice.innerHTML = "$" + data[index].price.toFixed(2);
         let cardlink = document.createElement('a');
         cardlink.className = "btn btn-primary";
         cardlink.setAttribute('href', "#");
         cardlink.innerHTML = "Go somewhere";
         prodlst.appendChild(link);
         // list.appendChild(link);
         link.appendChild(card);
         cardbody.appendChild(cardtext);
         cardbody.appendChild(cardtitle);
         cardbody.appendChild(dPrice);
         cardbody.appendChild(cardlink);
         card.appendChild(img);
         card.appendChild(cardbody);
         // dessertname.innerHTML = data[index].name;
         // dessertdiscrip.innerHTML = data[index].category;
         // dessimg.setAttribute('src', data[index].image.desktop);
         // let newdessert = dessert.cloneNode(true);
      }
      return data;
   }
   const route = useRoute();
</script>