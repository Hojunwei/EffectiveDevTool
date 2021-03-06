Vue.component("devtool-header", {
    template:
    "<header>" +
    "   <nav class='navbar navbar-expand-md navbar-dark bg-dark'>" +
    "       <a onclick=\"_hmt.push(['_trackEvent', 'nav', 'click', 'literature'])\" class='navbar-brand' href='http://www.666tool.com'>Effective Develop Tool</a>" +
    "       <button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarCollapse' aria-controls='navbarCollapse' aria-expanded='false' aria-label='Toggle navigation'>" +
    "           <span class='navbar-toggler-icon'></span>" +
    "       </button>" +
    "       <div class='collapse navbar-collapse' id='navbarCollapse'>" +
    "           <ul class='navbar-nav'>" +
    "           <template  v-for='(menu,index) in menus'>" +
    "               <li v-if='menu.children' class='nav-item dropdown' v-bind:class='{active: active == menu.code}'>" +
    "                   <a class='nav-link dropdown-toggle' data-toggle='dropdown' :id=\"'dropdown-'+index\">{{menu.name}}</a>" +
    "                   <div class='dropdown-menu' :aria-labelledby=\"'dropdown-'+index\">" +
    "                       <a class='dropdown-item' v-bind:href='child.url' v-bind:target='child.target' v-for='child in menu.children'>{{child.name}}</a>" +
    "                   </div>" +
    "               </li>" +
    "               <li v-else class='nav-item'  v-bind:class='{active: active == menu.code}'>" +
    "                   <a class='nav-link' v-bind:href='menu.url' v-bind:target='menu.target'>{{menu.name}}</a>" +
    "               </li>" +
    "           </template>" +
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
                url: "http://www.666tool.com/xxl-code-generator/",
                target:'_blank'
            }, {
                name: "JSON",
                code: "json",
                url: "#",
                children: [{
                    name: "JSON格式化",
                    code: "jsonFormatter",
                    url: "json.html"
                },{
                    name: "JSON编辑器(开发中)",
                    code: "jsonEditor",
                    url: "#"
                }]
            }, {
                name: "接口mock",
                code: "mockInterface",
                url: "mock.html"
            },{
                name: "常用对照表",
                code: "commonTable",
                url: "#",
                children : [{
                    name: "HTTP状态码表",
                    code: "httpStatusCode",
                    url: "httpStatusCode.html"
                },{
                    name: "HTTP请求头大全(整理中)",
                    code: "httpHead",
                    url: "#"
                },{
                    name: "HTTP请求方法(整理中)",
                    code: "httpMethod",
                    url: "#"
                }]
            }
            ]
        }
    },
    methods: {}
});

Vue.component("devtool-footer", {
    template:
        "<footer class='footer bg-dark'>" +
        "   <div class='container text-center pt-1'>" +
        "       " +
        "       <span class='text-white pl-3'>Powered by Ho Effective Develop Tool" +
        "           <a href='https://github.com/Hojunwei/EffectiveDevTool' class='text-white ml-1'>" +
        "               <i class='fa fa-github fa-lg'></i>" +
        "           </a>" +
        "       </span>" +
        "       <span class='text-white pl-3'>QQ群：566614235</span>" +
        "       <p><a class='text-white' style='text-decoration: none; font-size:12px' href='http://www.miitbeian.gov.cn/'>粤ICP备18139725号-1</a></p>"+
        "   </div>" +
        "</footer>"
});

var _hmt = _hmt || [];
(function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?ce686945a67e81318bc52dee643147d7";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();


