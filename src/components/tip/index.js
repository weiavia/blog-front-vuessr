import Tip from './tip'

var TipC = {};

TipC.install = function (Vue) {
    const TipConstructor = Vue.extend(Tip)
    const instance = new TipConstructor();

    instance.$mount(document.createElement('div'))
    
    document.body.appendChild(instance.$el)
    
    Vue.prototype.$tipShow = instance.show
    Vue.prototype.$tipHide = instance.hide
}

export default TipC