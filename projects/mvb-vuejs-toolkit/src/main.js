/**
 * Created by Marcus Balbi on 07/12/2016.
 */
import MvbBaseModal from './components/notification/modal/MvbBaseModal.vue'
import MvbAlert from './components/notification/modal/MvbAlert.vue'
import MvbConfirm from './components/notification/modal/MvbConfirm.vue'
import { toast, Toast } from './components/notification/toast/Toast.js'

export function install(Vue) {
    /*
     * Set the component to the Vue object
     */
    Vue.component('mvb-base-modal', MvbBaseModal);
    Vue.component('mvb-alert', MvbAlert);
    Vue.component('mvb-confirm', MvbConfirm);
    //
    Vue.prototype.toast = toast;
};
