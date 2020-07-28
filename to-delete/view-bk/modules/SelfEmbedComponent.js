const VUE_I18N_URL = 'https://unpkg.com/vue-i18n'
const VUE_URL      = 'https://unpkg.com/vue'

export default class EmbedComponent {

    static setOptions (opts){
        EmbedComponent.opts = setDefaults()

        EmbedComponent.opts = Object.assign(EmbedComponent.opts,opts)

        EmbedComponent.selfElement = document.getElementById( EmbedComponent.opts.selfId )
        EmbedComponent.parentNode  = EmbedComponent.selfElement.parentNode

        if(EmbedComponent.opts.i18n)
            EmbedComponent.opts.scriptDependancies.unshift(VUE_I18N_URL)

        EmbedComponent.opts.scriptDependancies.unshift(VUE_URL)

        main()
    }
}

function main () {
    let deps = EmbedComponent.opts.scriptDependancies
    let cssDeps = EmbedComponent.opts.cssDependancies
    let functions = []

    for (let i = 0; i < deps.length; i++) 
        functions[i] = ()=>{ loadScript(deps[i],functions[i+1]) }
    
    for (let i = 0; i < cssDeps.length; i++) 
        loadLink(cssDeps[i])
        
    functions[0]()
}

function setDefaults () {
    let opts = {}
    opts.propsData          = {}
    opts.scriptDependancies = []
    opts.cssDependancies    = []
    opts.i18n               = true
    opts.selfId             = 'EmbedComponent'
    opts.appID              = 'appID'

    return opts
}

function getI18n() {
    return new window['VueI18n'](   {
                                        locale        : process.env.VUE_APP_I18N_LOCALE || 'en',
                                        fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
                                        messages      : {en:{}}
                                    }
                                )
}

function loadApp (){
    let divTag = document.createElement('div')

    divTag.id = EmbedComponent.opts.appID

    insertElement(divTag)

    new window['Vue']({mounted}).$mount(`#${EmbedComponent.opts.appID}`)
}

function mounted(){
    const i18n                        = getI18n()
    const ComponentVueClass           = window['Vue'].extend(window[EmbedComponent.opts.compName])
    const componentVueClassInstance   = new ComponentVueClass({i18n,propsData:EmbedComponent.opts.propsData})

    componentVueClassInstance.$mount()

    this.$el.appendChild(componentVueClassInstance.$el)
}

function insertElement(el){
    EmbedComponent.parentNode.insertBefore(el,EmbedComponent.selfElement)
}

function loadLink(url) {

    let tag = document.createElement('link')

    tag.rel     = 'stylesheet'
    tag.charset = 'utf-8'
    tag.href    = url

    insertElement(tag)  
}

function loadScript(url, next = loadApp) {

    let tag = document.createElement('script')

    tag.charset            = 'utf-8'
    tag.src                = url
    tag.onload             = next
    tag.onreadystatechange = next

    insertElement(tag)
}