Vue.component('contador',{

    template: '#template-contador',

    data : function(){

    	return {
    		contagem : 0
    	};
    },

    props : ['assunto'],

    methods : {

    	incrementar : function(){
    		this.contagem++;
    	}

    }

});

new Vue({

	el : "#componentes"

});