<template>
  <div>
  <topbar></topbar>
   <sidebar></sidebar>
    <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
             <!-- use router-view element as route outlet -->
          <div class="content">
              <router-view></router-view>
          </div>
    </div>
   </div>
</template>

<script>
import topbar from './Topbar'
import sidebar from './Sidebar'
export default {
  name: 'App',
  created: function () {
  },
  components: {
    topbar,
    sidebar
  },
  methods: {
  }
}

</script>

<style>

.content {
  margin-left: 20px;
  margin-top: -30px;
  /*border: 1px solid black;*/
}

/*
 * Base structure
 */

/* Move down content because we have a fixed navbar that is 50px tall */
body {
}


/*
 * Global add-ons
 */

.sub-header {
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}

/*
 * Top navigation
 * Hide default border to remove 1px line.
 */
.navbar-fixed-top {
  border: 0;
}
</style>
