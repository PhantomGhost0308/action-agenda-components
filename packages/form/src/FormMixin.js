import Vue                from 'vue'
import VeeValidate        from 'vee-validate'
import FieldErrorMessage  from '@components/AAForm/controls/FieldErrorMessage'

import { isNil, omitBy, isEmpty, clone } from 'lodash'

Vue.use(VeeValidate, {fieldsBagName: 'veeFields',fastExit: false})

export default {
    components: { FieldErrorMessage},
    methods   : { validateState, resetForm, isValid, resetValidation, cleanForm, getValidationClass, validateComponent }
}

async function resetForm (root)  {
  let props = Object.keys(root)

  for (let i = 0; i < props.length; i++) {
    let prop = root[props[i]]
    let propType = typeof prop

    if(propType === 'object') await resetForm(root[props[i]])
    else if(propType === 'array')  root[props[i]] = []
    else root[props[i]] = ''
  }
}

function cleanForm(value) {
  let form = clone(value)

  if(form && form.contacts && form.contacts.length==1 && isEmpty(form.contacts[0]))
    delete(form.contacts)

  form  = omitBy(form , isEmpty)
  form  = omitBy(form , isNil)
  
  for (const key in form ) {
    if(Array.isArray(form[key])){
     
      form[key].forEach(element => {
        if (typeof element === 'object'  ) 
          element= cleanForm(element)
      })
    }else if (typeof form[key] === 'object') 
      form[key] = cleanForm(form[key])
  }

  return form 
}

async function isValid() {
  let isValidFlag = false

  if(this.$validator) await this.$validator.validateAll()

  for (let i = 0; i < this.$children.length; i++) {
    let vm = this.$children[i]

    if (vm.$validator) {
      await vm.$validator.validateAll()
      isValidFlag = !vm.$validator.errors.count();     
    }
  }

  return isValidFlag
}

async function resetValidation() {
  if(this.$validator) this.$validator.reset()

  for (let i = 0; i < this.$children.length; i++) {
    let vm = this.$children[i]
    if (vm.$validator) await vm.$validator.reset()
  }

}

function validateState(ref,value) {
  if (this.veeFields[ref] && (this.veeFields[ref].dirty || this.veeFields[ref].validated)) 
    return (!this.errors.has(ref) && !value) ? null : !this.errors.has(ref) 
  
  return null
}

function getValidationClass(ref) {

  if(!this.veeFields[ref]) return ''

  if (!(this.veeFields[ref].dirty || this.veeFields[ref].validated)) 
    return ''

  if (!this.errors.has(ref)) return 'is-valid'
  
  return 'is-invalid'
}

function validateComponent(vm) {
  if (vm.$validator) vm.$validator.validateAll()
  if (vm.$children ) vm.$children.forEach(validateComponent)
}