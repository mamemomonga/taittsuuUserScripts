// ==UserScript==
// @name         タイッツー拡張_リタイーツ
// @namespace    https://gist.github.com/mamemomonga/6b34d0ab18fff66e03811dadfad17c6e
// @version      0.1.6
// @description  タイッツーのリタイーツをとりあえず動くようにしました
// @author       mamemomonga
// @match        https://taittsuu.com/home
// @match        https://taittsuu.com/users/*
// @icon         https://taittsuu.com/image/sozai/taitsu.png
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';
    // Your code here...

    window.reTaittsuu=function(t) {
        const ft=$(t).parent().parent()
        const username    = ft.find(".post-link-user .post-user-name .post-user-name-value").text()
        const tid         = ft.find(".post-link-user .post-infos .post-user-tid").text()
        const posttime    = ft.find(".post-link-user .post-infos .post-time").text()
        const postcontent = ft.find(".post-link-post .post-content").html().replace(/\<br\>/g,'\n')

        const taiitsu="♻リタイーツ\n"
        +username+" ("+tid+" "+posttime+")\n"
        +postcontent

        $("#taiitsuInput").val(taiitsu)
        Taittsuu.Post.showTaiitsuDialog()
    }

    window.postShowTaiitsuDialog=function() {
        $("#taiitsuInput").val("")
        Taittsuu.Post.showTaiitsuDialog()
    }

    const rt_button = $(".post-rt-button")
    rt_button.html('[<i class="fas fa-retweet"></i>]')
    rt_button.attr("onClick","window.reTaittsuu(this)")

//    $(".btn-primary").attr("onClick","window.postShowTaiitsuDialog();")

})();