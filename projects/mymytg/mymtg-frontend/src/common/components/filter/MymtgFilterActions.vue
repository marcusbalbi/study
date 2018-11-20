<template>
   <div class="filter-actions">
      <button class="search btn btn-default" @click.prevent="search">Search</button>
      <button class="clean btn btn-info" @click.prevent="clean">Clean</button>
    </div>
</template>


<script type="text/javascript">
  export default {
    name: 'MymtgFilterACtions',
    components: {
    },
    methods: {
      search: function () {
        this.$emit('search')
      },
      clean: function () {
        this.$emit('clean')
      }
    }
  }
</script>


<style type="text/css" scoped>

.filter-actions {
  margin-top: 10px;
}

</style>
