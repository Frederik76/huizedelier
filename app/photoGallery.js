/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function(c,b,a,d){
    c.fn.simplegallery=function(e){
        var g={
            galltime:300,
            gallcontent:".content",
            gallthumbnail:".thumbnail",
            gallthumb:".thumb"};
        var f=c.extend({},g,e);
        return this.each(function(){
            c(f.gallthumb).click(function(){
                c(f.gallcontent).find("img").stop(true,true).fadeOut(f.galltime).hide();
        var h=c(this).find("img").attr("id"),i=h.replace("thumb_","");
        c(".image_"+i+"").stop(true,true).fadeIn(f.galltime);
        return false
        ;})
    ;})
;}
;})(jQuery,window,document);
