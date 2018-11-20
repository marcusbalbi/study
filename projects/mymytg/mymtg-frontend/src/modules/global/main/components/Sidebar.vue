<template>
    <nav class="col-sm-3 col-md-2 sidebar">
        <ul class="nav-sidebar">
          <router-link v-for="link in links" tag="li" :to="link.to"><a>{{ link.name }}</a></router-link>
        </ul>        
    </nav>
</template>

<script>
import RouterLink from 'vue-router'
export default {
  name: 'MymtgSidebar',
  components: {
    RouterLink
  },
  data: function () {
    return {
      links: [
        { name: 'Dashbord', to: '/dashbord' },
        { name: 'Cards', to: '/cards' }
      ]
    }
  }
}
</script>

<style>
ul {
 
}
li > a {
  position: relative;
  display: block;
  padding: 10px 15px;
  text-decoration: none !important;

}

a.router-link-active {
 color: #fff;
  background-color: #428bca;
}
li.router-link-active a {
 color: #fff;
  background-color: #428bca;

}

/* Hide for mobile, show later */
.sidebar {
  display: none;
}
@media (min-width: 768px) {
  .sidebar {
    position: fixed;
    top: 51px;
    bottom: 0;
    left: 0;
    z-index: 1000;
    display: block;
    padding: 20px;
    overflow-x: hidden;
    overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
    background-color: #f5f5f5;
    border-right: 1px solid #eee;
  }
}

/* Sidebar navigation */
.nav-sidebar {
  margin-right: -21px; /* 20px padding + 1px border */
  margin-left: -20px;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
}
.nav-sidebar > li > a {
  padding-right: 20px;
  padding-left: 20px;
  cursor: pointer;
}
.nav-sidebar > .router-link-active > a,
.nav-sidebar > .router-link-active > a:hover,
.nav-sidebar > .router-link-active > a:focus {
  color: #fff;
  background-color: #428bca;
}
</style>