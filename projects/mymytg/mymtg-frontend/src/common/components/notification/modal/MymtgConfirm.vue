<template>
  <div>
    <base-modal :show="show" @close="close">
      <div class="mymtg-confirm-header" slot="header" >
        <h4>{{ title }}</h4>
      </div>

      <div slot="body" >
        <h3>{{ message }}</h3>
      </div>

      <div slot="footer" class="mymtg-confirm-actions-footer">
        <button class="mymtg-confirm-actions-item btn btn-success" @click="yesClicked" >Yes</button>
        <button class="mymtg-confirm-actions-item btn btn-danger" @click="noClicked">No</button>
      </div>

    </base-modal>
  </div>
</template>


<script type="text/javascript">
  import BaseModal from './MymtgBaseModal'
  export default {
    name: 'MymtgConfirm',
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
      yesClicked: function () {
        this.$emit('confirmed')
      },
      noClicked: function () {
        this.$emit('denied')
      },
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
.mymtg-confirm-actions-footer {
  display: flex;
  justify-content: flex-end;
}

.mymtg-confirm-actions-item {
  margin-left: 10px;
}

.mymtg-confirm-header h4 {
  margin-top: 0;
  color: #439CDF;
}
</style>