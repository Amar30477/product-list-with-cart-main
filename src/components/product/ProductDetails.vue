<template>
    <div class="container mt-5 height-100 w-75 bg-danger-subtle rounded-4 p-4">
        <p>ProductDetails</p>
        <div class="product ">
            <img :src="'../../../.' + 'item.image.desktop'" :alt="item.name" />
            <h2>{{ item.name }}</h2>
        </div>
        <!-- <p>{{ product }}</p>
        <p>{{ item }}</p>
        <p>{{ item.name }}</p> -->
    </div>
</template>


<script setup>
    import { useRoute } from 'vue-router';
    fetch("../../../../data.json")
    .then(Response => Response.json())
    .then(data => showinfo(data))
    function showinfo(data){
        console.log(data)
        const route = useRoute();
        let itemCategory = route.params.productCategory;
        let product = route.params.productID;
        // const Response = data[itemCategory].find(item => item.id === product);
        const Response = data.find(item => item.id === product && item.category === itemCategory);
        // console.log(Response);
        // let item = {};
        // if (Response) {
        //     item = Response;
        // } else {
        //     item = { name: "Product Not Found", image: "" };
        // }4
        // const item = showinfo();
        const item = Response;
        console.log(item.image.desktop);
        return data;
    }
</script>