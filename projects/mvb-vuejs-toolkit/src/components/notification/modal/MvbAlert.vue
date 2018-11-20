<template>
  <div>
    <base-modal :show="show" @close="close">
      <div class="mvb-confirm-header" slot="header" >
        <h4>{{ title }}</h4>
      </div>

      <div slot="body" >
        <h3>{{ message }}</h3>
      </div>

      <div slot="footer" class="mvb-confirm-actions-footer">
        <button class="mvb-confirm-actions-item btn btn-success" @click="close" >Ok</button>
      </div>

    </base-modal>
  </div>
</template>


<script type="text/javascript">
  import BaseModal from './MvbBaseModal.vue'
  export default {
    name: 'MvbAlert',
    props: {
      title: {
        type: String,
        default: 'Are you Sure?'
      },
      message: {
        type: String,
        default: ''
      },
      show: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      close: function () {
        this.$emit('close')
      }
    },
    components: {
      BaseModal
    }
  }
</script>



<style type="text/css" scoped>
.mvb-confirm-actions-footer {
  display: flex;
  justify-content: flex-end;
}

.mvb-confirm-actions-item {
  margin-left: 10px;
}

.mvb-confirm-header h4 {
  margin-top: 0;
  color: #439CDF;
}
</style>
