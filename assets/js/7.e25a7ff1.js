(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{208:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"database"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#database","aria-hidden":"true"}},[t._v("#")]),t._v(" Database")]),t._v(" "),e("p",[t._v('Database is the object that holds all Models and Modules that registered to the Vuex ORM. It is also responsible for generating the whole database relational schema from registered models. This schema is used to "Normalize" data before persisting to the Vuex Store.')]),t._v(" "),e("p",[t._v("When using Vuex ORM, you would probably never need to use Database class after it's registered to the Vuex Store. But for those who are curious, we'll describe why object such as Database exists in the first place.")]),t._v(" "),e("p",[t._v("In Vuex ORM, any Model could have any relationships with other Models. To resolve those relationships, we need to store all Models somewhere so that a Model can reference each other. That's where Database comes in to play. You can get any registered Model like this.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" database "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Database")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ndatabase"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("register")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("User"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" user "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" database"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("model")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'users'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("You might wonder why do we need to store all Models in one place since the related Models are passed at Model when defining relationships like below.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Model "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vuex-orm/core'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Post "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./Post'")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Model")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" entity "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'users'")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("fields")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("attr")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      posts"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasMany")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Post"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'user_id'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// <- Passing related Model.")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("So, can't we just resolve relationship directly from the Model? Unfortunately no, we can't. The biggest reason is that Vuex ORM is built on top of Vuex, and Vuex ORM is calling Vuex Getters/Actions/Mutations to interact with Vuex Store. In fact, you can call Vuex Actions directly to create or fetch data.")]),t._v(" "),e("p",[t._v("Vuex Module doesn't have access to Model. It must resolve the Model from the entity name, which is "),e("code",[t._v("string")]),t._v(". When a user calls actions like "),e("code",[t._v("store.dispatch('entities/users/insert', { ... })")]),t._v(", we must somehow get User Model. Yes, Vuex ORM actions are getting Models from the Database.")]),t._v(" "),e("p",[t._v("Finally, the created Database instance is registered to the global "),e("a",{attrs:{href:"/api/container/container"}},[t._v("Container ")]),t._v(" object so we have access to it from everywhere. So in your code, after installing Vuex ORM to Vuex, you can always access Database through Container like below.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Container "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vuex-orm/core'")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" database "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Container"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("database\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" user "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" database"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("model")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'users'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h2",{attrs:{id:"instance-properties"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#instance-properties","aria-hidden":"true"}},[t._v("#")]),t._v(" Instance Properties")]),t._v(" "),e("h3",{attrs:{id:"store"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#store","aria-hidden":"true"}},[t._v("#")]),t._v(" store")]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[e("code",[t._v("store!: Vuex.Store<any>")])])]),t._v(" "),e("p",[t._v("The Vuex Store instance.")])])]),t._v(" "),e("h3",{attrs:{id:"namespace"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#namespace","aria-hidden":"true"}},[t._v("#")]),t._v(" namespace")]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[e("code",[t._v("namespace!: string")])])]),t._v(" "),e("p",[t._v("The namespace of the Vuex Store Module where all entities are registered under. the default is "),e("code",[t._v("entities")]),t._v(".")])])]),t._v(" "),e("h3",{attrs:{id:"entities"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#entities","aria-hidden":"true"}},[t._v("#")]),t._v(" entities")]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[e("code",[t._v("entities: Entity[] = []")])])]),t._v(" "),e("p",[t._v("The list of entities registered to the Vuex Store. It contains models and modules with its name. The Entity interface looks like below.")]),t._v(" "),e("div",{staticClass:"language-ts extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Entity")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n  base"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n  model"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" Model\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("module")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Vuex"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Module"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),e("h3",{attrs:{id:"schema"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#schema","aria-hidden":"true"}},[t._v("#")]),t._v(" schema")]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[e("code",[t._v("schemas: Schemas = {}")])])]),t._v(" "),e("p",[t._v("The database schema definition. This schema is going to be used when normalizing the data before persisting them to the Vuex Store. Schemas interface is a list of Normalizr schema.")]),t._v(" "),e("div",{staticClass:"language-ts extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Schemas")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("entity"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" NormalizrSchema"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Entity\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),e("h2",{attrs:{id:"instance-methods"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#instance-methods","aria-hidden":"true"}},[t._v("#")]),t._v(" Instance Methods")]),t._v(" "),e("h3",{attrs:{id:"register"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#register","aria-hidden":"true"}},[t._v("#")]),t._v(" register")]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[e("code",[t._v("register(model: typeof Model, module: Vuex.Module<any, any> = {}): void")])])]),t._v(" "),e("p",[t._v("Register a model and a module to Database.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("database"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("register")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("User"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" users"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("You can omit registering a module.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("database"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("register")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("User"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),e("h3",{attrs:{id:"start"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#start","aria-hidden":"true"}},[t._v("#")]),t._v(" start")]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[e("code",[t._v("start (store: Vuex.Store<any>, namespace: string): void")])])]),t._v(" "),e("p",[t._v("This method will generate Vuex Module and Normalizr schema tree from the registered Models. It will be called when adding Vuex ORM to Vuex as a plugin.")])])]),t._v(" "),e("h3",{attrs:{id:"model"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#model","aria-hidden":"true"}},[t._v("#")]),t._v(" model")]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[e("code",[t._v("model (name: string): typeof Model")])])]),t._v(" "),e("p",[t._v("Get the model of the given name from the entities list.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" user "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" database"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("model")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'users'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// User")]),t._v("\n")])])])])]),t._v(" "),e("h3",{attrs:{id:"models"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#models","aria-hidden":"true"}},[t._v("#")]),t._v(" models")]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[e("code",[t._v("models (): { [name: string]: typeof Model }")])])]),t._v(" "),e("p",[t._v("Get all models from the entities list. The result will be object with key being the entity name for the Model.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" models "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" database"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("model")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// { users: User, posts: Post }")]),t._v("\n")])])])])]),t._v(" "),e("h3",{attrs:{id:"basemodel"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#basemodel","aria-hidden":"true"}},[t._v("#")]),t._v(" baseModel")]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[e("code",[t._v("baseModel (name: string): typeof Model")])])]),t._v(" "),e("p",[t._v("Get the base model of the given name from the entities list. The base Model is only relevant when the model is inheriting another model to achieve Single Table inheritance feature.")])])]),t._v(" "),e("h3",{attrs:{id:"module"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#module","aria-hidden":"true"}},[t._v("#")]),t._v(" module")]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[e("code",[t._v("module (name: string): Vuex.Module<any, any>")])])]),t._v(" "),e("p",[t._v("Get the module of the given name from the entities list.")])])]),t._v(" "),e("h3",{attrs:{id:"modules"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#modules","aria-hidden":"true"}},[t._v("#")]),t._v(" modules")]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[e("code",[t._v("modules (): { [name: string]: Vuex.Module<any, any> }")])])]),t._v(" "),e("p",[t._v("Get all modules from the entities list. The result will be object with key being the entity name for the Module.")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);