import { toast } from 'src/common/components/notification/toast/Toast'
import Request from 'common/http/Request'
export default {
  data: function () {
    return {
      formModel: null,
      mixinName: 'FormMixin',
      createdMessage: 'Item Created!',
      updatedMessage: 'Item Updated!'
    }
  },
  mounted: function () {
    if (!!this.model === false) {
      throw new Error(`to use ${this.mixinName} mixin you should provide a model`)
    }
    this.addFormActionListeners()

    if (this.updating) {
      Request.getInstance().waitActiteRequests().then(() => {
        this.model.get(this.$route.params.id).then((response) => {
          this.formModel = response.data
        }, (response) => {
          this.goBack()
        })
      }, (error) => {
        toast.error('Some strange error on loading the form, try again later, please! ' + error)
        this.goBack()
      })
    }
  },
  computed: {
    updating: function () {
      if (this.$route.params && this.$route.params.id) {
        return true
      }
      return false
    }
  },
  methods: {
    addFormActionListeners: function () {
      if (!this.$refs.action) {
        return
      }
      this.$refs.action.$on('back', this.goBack)
      this.$refs.action.$on('submit', this.submit)
      this.$refs.action.$on('reset', this.reset)
    },
    submit: function (e) {
      /* this.$validate(() => {
        if (this.$validation.valid) { */
      this.updating ? this.update() : this.create()
        // }
      // })
    },
    goBack: function () {
      this.$router.history.go(-1)
    },
    reset: function () {
      console.error('Not implemented yet')
    },
    create: function () {
      this.model.create(this.formModel).then(() => {
        toast.success(this.createdMessage)
        this.goBack()
      })
    },
    update: function () {
      this.model.update(this.formModel.id, this.formModel).then(() => {
        toast.success(this.updatedMessage)
        this.goBack()
      })
    }
  }

}
