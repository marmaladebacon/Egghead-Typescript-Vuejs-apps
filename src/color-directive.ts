import { DirectiveOptions, VNodeDirective } from 'vue'

//Note: Directives have different hooks from components
//bind: one time setup work,
//inserted: called when bound element is inserted into its parent node
//update: called after component's VNode has been updated but possibly before it's children have updated
//component: called after the containing component's VNode and the VNodes of its children have updated
//unbind: called only once, when the directive is unbound from the element

const directive: DirectiveOptions = {

  //Example usage in Hello.vue
  //<h1 v-colorDirective="{ color: 'white', background: 'green'}">{{ message }}</h1>
  inserted(el:HTMLElement, node:VNodeDirective) {
    console.log('Directive inserted');
    el.style.color = node.value.color
    el.style.backgroundColor = node.value.background
  }
}

export default directive;