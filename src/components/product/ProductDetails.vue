<template>
    <div class="container mt-5 height-100 w-75 bg-danger-subtle rounded-4 p-4">
        <p>ProductDetails</p>
        <div class="product ">
            <img :src="item.image" :alt="item.name" />
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
        return Response;
    }
    const route = useRoute();
    let itemCategory = route.params.poductCategory;
    let product = route.params.productID;
    let Response = data.find(item => item.id === product);
    // const item = showinfo();
</script>