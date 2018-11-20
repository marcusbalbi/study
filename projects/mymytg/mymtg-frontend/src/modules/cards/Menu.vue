<template>
  <div class='menu'>
    <router-link class="btn btn-lg btn-primary" :to="{ name: 'cards.artist' }">Artists</router-link>
    <router-link class="btn btn-lg btn-primary" :to="{ name: 'cards.block' }">Block</router-link>
    <router-link class="btn btn-lg btn-primary" :to="{ name: 'cards.card' }">Card</router-link>
    <!-- <router-link class="btn btn-lg btn-primary" :to="{ name: 'cards.color' }">Color</router-link> -->
    <router-link class="btn btn-lg btn-primary" :to="{ name: 'cards.edition' }">Edition</router-link>
    <!-- <router-link class="btn btn-lg btn-primary" :to="{ name: 'cards.rarety' }">Rarety</router-link> -->
    <!-- <router-link class="btn btn-lg btn-primary" :to="{ name: 'cards.type' }">Type</router-link> -->
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'MymtgMainMenu'
}
</script>

<style>
.menu .btn {
  padding: 60px;
  margin-left: 30px;
  margin-bottom:10px;
  width: 250px;
  float:left;
}
</style>