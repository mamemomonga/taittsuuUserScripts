// ==UserScript==
// @name         タイッツー拡張_リタイーツ_お気にタイツ
// @namespace    https://github.com/mamemomonga/taittsuuUserScripts/blob/main/reOkiniTaittsuu.user.js
// @version      0.1.0
// @description  タイッツーのリタイーツとお気にタイツ
// @author       mamemomonga
// @match        https://taittsuu.com/home
// @match        https://taittsuu.com/users/*
// @icon         https://taittsuu.com/image/sozai/taitsu.png
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';

   function ReOkiniTaittsuu(){}
    ReOkiniTaittsuu.prototype={
        start: function() {
            const t=this;
            window.execReTaittsuu=function(e) {
                $("#taiitsuInput").val("♻リタイーツ\n"+t.mesRef(e))
                Taittsuu.Post.showTaiitsuDialog()
            }
            window.execOkiniTaittsuu=function(e) {
                $("#taiitsuInput").val("❤お気にタイツ\n"+t.mesRef(e))
                Taittsuu.Post.showTaiitsuDialog()
            }
            $(".post-rt-button")
            .html('[<i class="fas fa-retweet"></i>]')
            .attr("onClick","window.execReTaittsuu(this)")

            $(".post-like-button")
            .html('[<i class="fas fa-heart"></i>]')
            .attr("onClick","window.execOkiniTaittsuu(this)")

        },
        mesRef: function(e) {
            const ft=$(e).parent().parent()
            const username    = ft.find(".post-link-user .post-user-name .post-user-name-value").text()
            const tid         = ft.find(".post-link-user .post-infos .post-user-tid").text()
            const posttime    = ft.find(".post-link-user .post-infos .post-time").text()
            const postcontent = ft.find(".post-link-post .post-content").html().replace(/\<br\>/g,'\n')
            return username+" ("+tid+" "+posttime+")\n"+postcontent
        }
    }

    new ReOkiniTaittsuu().start()

})();