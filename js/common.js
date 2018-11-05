Vue.component("devtool-header", {
    template:
    "<header>" +
    "   <nav class='navbar navbar-expand-md navbar-dark bg-dark'>" +
    "       <a class='navbar-brand' href='http://119.23.220.57'>Effective Develop Tool</a>" +
    "       <button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarCollapse' aria-controls='navbarCollapse' aria-expanded='false' aria-label='Toggle navigation'>" +
    "           <span class='navbar-toggler-icon'></span>" +
    "       </button>" +
    "       <div class='collapse navbar-collapse' id='navbarCollapse'>" +
    "           <ul class='navbar-nav'>" +
    "               <li class='nav-item' v-bind:class='{active: active == menu.code}' v-for='menu in menus'>" +
    "                   <a class='nav-link' v-bind:href='menu.url' v-bind:target='menu.target'>{{menu.name}}</a>" +
    "               </li>" +
    "           </ul>" +
    "       </div>" +
    "   </nav>" +
    "</header>",
    props: ["active"],
    data: function () {
        return {
            menus: [{
                name: "代码生成平台",
                code: "codeGenerator",
                url: "http://119.23.220.57:8080/xxl-code-generator/",
                target:'_blank'
            }, {
                name: "JSON格式化",
                code: "jsonFormatter",
                url: "json.html"
            }, {
                name: "接口mock",
                code: "mockInterface",
                url: "#"
            }]
        }
    },
    methods: {}
});

Vue.component("devtool-footer", {
    template:
        "<footer class='footer bg-dark'>" +
        "   <div class='container text-center'>" +
        "       <span class='text-white'>Powered by Ho Effective Develop Tool" +
        "           <a href='https://github.com/Hojunwei/EffectiveDevTool' class='text-white ml-1'>" +
        "               <i class='fa fa-github'></i>" +
        "           </a>" +
        "       </span>" +
        "   </div>" +
        "</footer>"
});



