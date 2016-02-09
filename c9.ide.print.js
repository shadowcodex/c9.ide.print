define(function(require, exports, module) {
    main.consumes = ["Plugin", "commands", "tabManager", "menus", "ui"];
    main.provides = ["c9.ide.print"];
    return main;

    function main(options, imports, register) {
        var Plugin = imports.Plugin;
        var tabManager = imports.tabManager;
        var commands = imports.commands;
        var menus = imports.menus;
        var ui = imports.ui;
        
        /***** Initialization *****/
        
        var plugin = new Plugin("Ajax.org", main.consumes);
        var emit = plugin.getEmitter();
        
        function load() {
            commands.addCommand({
                name: "print",
                bindKey: { 
                    mac: "Command-P", 
                    win: "Ctrl-P" 
                },
                isAvailable: function(editor){
                    var tab = tabManager.focussedTab;
                    return tab && tab.editor.ace;
                },
                exec: function(){
                    var tab = tabManager.focussedTab;
                    require("ace/config").loadModule("ace/ext/static_highlight", function(m) {
                        var editor = tab.editor.ace
                        var result = m.renderSync(
                            editor.getValue(), 
                            editor.session.getMode(),
                            editor.renderer.theme
                        )
                        document.body.style.display="none"
                        var d = document.createElement("div")
                        d.innerHTML=result.html
                        document.documentElement.appendChild(d)
                        require("ace/lib/dom").importCssString(result.css)
            
                        setTimeout(function() {window.print()}, 10)
            
                        function restore() {
                           window.removeEventListener("focus", restore, false)
                           d.parentNode.removeChild(d)
                           document.body.style.display= ""
                           editor.resize(true)
                        }
                        window.addEventListener("focus", restore, false)
                        d.onclick = restore
                    })
                }
            }, plugin);
            
            menus.addItemByPath("File/Print", new ui.item({
                command: "print"
            }), 300, plugin);
        }
        
        /***** Methods *****/
        
        
        
        /***** Lifecycle *****/
        
        plugin.on("load", function() {
            load();
        });
        plugin.on("unload", function() {
        
        });
        
        /***** Register and define API *****/
        
        plugin.freezePublicAPI({
            
        });
        
        register(null, {
            "c9.ide.print": plugin
        });
    }
});