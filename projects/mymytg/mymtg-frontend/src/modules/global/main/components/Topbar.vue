<template>
      <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="project-name navbar-brand" href="#">{{ projectName }}</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-right">
          <!--   <li><a href="#">Dashboard</a></li>
            <li><a href="#">Settings</a></li>
            <li><a href="#">Profile</a></li> -->
            <li><a href="#">Help</a></li>
          </ul>
          <form @submit.prevent="search" class="query-form navbar-form navbar-right">
          <div class="row">
            <div class="col-lg-12">
              <div class="input-group">
                <input v-model="query" type="text" class="form-control" placeholder="Search...">
                <span class="input-group-btn">
                  <!-- <button type="submit" class="btn btn-default" type="button">Go!</button> -->
                  <button @click="cleanQuery" class="clean-query btn btn-default" type="button">Clean!</button>
                </span>
              </div><!-- /input-group -->
            </div><!-- /.col-lg-6 -->
          </div><!-- /.row -->
          </form>
        </div>
      </div>
    </nav>
</template>

<script>
  export default {
    name: 'MymtgTopbar',
    data: function () {
      return {
        projectName: 'My Magic the Gathering',
        query: ''
      }
    },
    computed: {
    },
    methods: {
      search: function (e) {
        this.$emit('topbarsearch', this.query)
      },
      cleanQuery: function (e) {
        this.query = ''
        this.$emit('topbarsearch', this.query)
      }
    }

  }
</script>