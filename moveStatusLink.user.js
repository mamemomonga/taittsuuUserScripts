// ==UserScript==
// @name         タイッツー拡張_ステータスのリンクをタイツアイコンに移動
// @namespace    https://github.com/mamemomonga/taittsuuUserScripts/blob/main/moveStatusLink.user.js
// @version      0.1.1
// @description  ポスト詳細のリンクをアイコンに移動し、ポスト内容のコピペをやりやすくする。
// @author       mamemomonga
// @match        https://taittsuu.com/home
// @match        https://taittsuu.com/users/*
// @icon         https://taittsuu.com/image/sozai/taitsu.png
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';
    function TaittsuuExCopipe() {}
    TaittsuuExCopipe.prototype={
        start: function() {
            const t=this
            t.runFilter()
        },
        log: function(m) {
            console.log(m)
        },
        filter: function(e) {
            const icon=$(e).find(".post-image").parent()
            const link=$(e).find(".post-link-post")
            icon.attr("href",link.attr("href"))
            icon.attr("target","")
            link.removeAttr("href")
        },
        runFilter: function() {
            const t=this
            return new Promise((resolve)=>{
                let plt;
                const hf=()=>{
                    const po=$("#posts .post-wrap")
                    if(po.length > 0) {
                        clearInterval(plt)
                        po.each((_,e)=>{
                            t.filter(e)
                        })
                        resolve(posts)
                    }
                }
                plt=setInterval(hf,10)
            })
        }
    }
    new TaittsuuExCopipe().start()
})();