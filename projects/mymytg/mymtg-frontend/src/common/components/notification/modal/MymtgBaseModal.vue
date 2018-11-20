<template>
  <div>
     <transition name="mymtg-base-modal">
    <div v-show="show" class="mymtg-base-modal-mask">
      <div class="mymtg-base-modal-wrapper">
        <div class="mymtg-base-modal-container">

          <div class="mymtg-base-modal-header">
          <button class="mymtg-close close" aria-label="Close" @click="close">
            <span aria-hidden="true">&times;</span>
          </button>
            <slot name="header">
            </slot>
          </div>

          <div class="mymtg-base-modal-body">
            <slot name="body">
            </slot>
          </div>

          <div class="mymtg-base-modal-footer">
            <slot name="footer">
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'MymtgBaseModal',
    props: ['show'],
    methods: {
      close: function () {
        this.$emit('close')
      }
    }
  }
</script>


<style>
  .mymtg-base-modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.mymtg-base-modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.mymtg-base-modal-container {
  width: 500px;
  margin: 0px auto;
  padding: 10px 30px 10px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
  min-height: 100px;
}

.mymtg-base-modal-body {
  margin: 20px 0;
}

.mymtg-close {

}

.mymtg-base-modal-enter-active {
  transition: opacity .5s
}

.mymtg-base-modal-leave-active {
  opacity: 0;
}

.mymtg-base-modal-enter .mymtg-base-modal-container,
.mymtg-base-modal-leave-active .mymtg-base-modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>
