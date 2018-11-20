<template>
<div class="actions-container">
  <span class="action-item">
    <slot  name="before-actions" ></slot>
  </span>

  <button @click="create" class="action-item btn btn-default btn-lg">
    Create
  </button>

  <button @click="update" 
          class="action-item btn btn-default btn-lg"
          :class="selectedItem === null ? 'disabled' : ''"
          :disabled="selectedItem === null" >
    Update
  </button>

  <button @click="modal ? askRemove() : remove()"
          class="action-item btn btn-default btn-lg"
          :class="selectedItem === null ? 'disabled' : ''"
          :disabled="selectedItem === null">
    Remove
  </button>

  <span class="action-item">
    <slot name="after-actions" ></slot>
  </span>
  <mymtg-confirm :message="removeModal.message" :title="removeModal.title"  :show="removeModal.show"
   @close="removeModal.show = false"
   @denied="removeModal.show = false"
   @confirmed="remove">
  </mymtg-confirm>
</div>
</template>


<script type="text/javascript">
  import MymtgConfirm from 'src/common/components/notification/modal/MymtgConfirm'
  export default {
    name: 'MymtgCrudActions',
    props: {
      selectedItem: {
        default: null,
        required: true
      },
      modal: {
        default: true,
        type: Boolean
      },
      removeMessage: {
        type: String,
        default: 'Do you really want to remove it?'
      },
      removeTitle: {
        type: String,
        default: 'Atention'
      }
    },
    data: function () {
      return {
        removeModal: {
          show: false,
          message: this.removeMessage,
          title: this.removeTitle
        }
      }
    },
    methods: {
      create () {
        this.$emit('create')
      },
      update () {
        this.$emit('update', this.selectedItem)
      },
      askRemove () {
        this.removeModal.show = true
      },
      remove () {
        this.removeModal.show = false
        this.$emit('remove', this.selectedItem)
      }

    },
    components: {
      MymtgConfirm
    }
  }
</script>


<style type="text/css" scoped>
.actions-container {
  display: flex;
}
.action-item {
  margin-right: 10px;
}
</style>