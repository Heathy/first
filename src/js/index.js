$(document).ready(function () {
    $.ajax({
        type: 'get',
        url: '../api/goodshow.php?s="+new Date().getTime()',
        data: {
            dataindex: 'dataindex',
            iconurl1: 'iconurl1',
            iconurl2: 'iconurl2',
            sidetitle: 'sidetitle'
        },
        success: function (str) {
            var att = JSON.parse(str);
            var aa = ajaxside(att);
            // console.log(aa)
            $('#topTab .catitmlst').html(aa);
        }
    });
    // 渲染
    function ajaxside(res) {
        html = res.map(function (item) {
            return `<li class="catli j-catli multi-icon-catli" data-index="${item.dataindex}">
                            <!-- 透明层 用toggle切换-->
                            <img src="${item.iconurl1}" alt="" class="icon" >
                            <!-- 上色背景层 从none到inline-block-->
                            <img src="${item.iconurl2}" alt="" class="icon iconhv">
                            <span class="t">${item.sidetitle}</span>
                            <i class="naviconfont arr">&gt;</i>
                            <!-- vcenter 存储在数据库 管理指南 -->
                            <em class="vcenter"></em>
                            <!-- 自定义标签下划线 -->
                            <em class="seg"></em>
                            <!-- 换肤功能早期更新迭代 -->
                            <!-- <div class="m-ctgcard f-cb j-category_card"></div> -->
                        </li>`;
        }).join('');
        return html;
        // console.log(1);
        // for (var item in res) {
        //     console.log(2);
        //         var html = `<li class="catli j-catli multi-icon-catli" data-index="${item.dataindex}">
        //                     <!-- 透明层 用toggle切换-->
        //                     <img src="${item.iconurl1}" alt="" class="icon">
        //                     <!-- 上色背景层 从none到inline-block-->
        //                     <img src="${item.iconurl2}" alt="" class="icon iconhv">
        //                     <span class="t">${item.sidetitle}</span>
        //                     <i class="naviconfont arr">&gt;</i>
        //                     <!-- vcenter 存储在数据库 管理指南 -->
        //                     <em class="vcenter"></em>
        //                     <!-- 自定义标签下划线 -->
        //                     <em class="seg"></em>
        //                     <!-- 换肤功能早期更新迭代 -->
        //                     <!-- <div class="m-ctgcard f-cb j-category_card"></div> -->
        //                 </li>`;
        // }
        //  $('.catitmlst j-catmenu f-switch-catitems').html(html);
    }


    (function () {
        $.ajax({
            type: 'get',
            url: '../api/bannershow.php?s="+new Date().getTime()',
            data: {
                showpicurl: 'showpicurl'
            },
            success: function (str) {
                var attbanner = JSON.parse(str);
                var bb = ajaxbanner(attbanner);
                console.log(bb)
                $('#j-box #show_pic li').html(bb)
            }
        })
        //渲染banner
        function ajaxbanner(res) {
            var html = res.map(function (item) {
                return `<li>
            <a href="" class="itm" target="_blank">
                <img src="${item.showpicurl}" alt="" class="showImg" style="height:505px">
                    <!-- 加一层模糊层(滤镜) 防止轮播图出现留白现象 -->
                            <div class="blur-img-wrap">
                        <img src="${item.showpicurl}" alt="" class="showImg" style="height:505px">
                            </div>
                        </a>
                    </li>`;
            }).join('');
            return html;
        }
        //轮播图banner

    })();

    // 鼠标移入和移出事件 (出现下划线 小图标 更换结构 三级菜单)

    (function () {
        $('.footBgWrap .itm em').mouseover(function () {
            $(this).next().css('display', 'inline-block')
        }).mouseout(function () {
            $(this).next().css('display', 'none')
        })
        //让图片动起来
        $('.m-module').find('.pic').mouseover(function () {
            $(this).children('.follow').css('display', 'inline-block')
        }).mouseout(function () {
            $(this).children('.follow').css('display', 'none')
        })
        
        
        //上下导航 可视区到页面顶部的距离右侧栏
        $('#rightBarNew').hide();
        $(window).scroll(function () {
            if (scrollY <= 600) {
                // console.log($('#rightBarNew'));
                $('#rightBarNew').hide();
            } else {
                $('#rightBarNew').show();
            }
        })

        //滑动可视区左侧栏固定定位 并且到相应的可视区
        $(window).scroll(function () {
            // console.log(scrollY);
            
            if (scrollY >= 700) {
                $('#indexleft').attr('top','scrollY')
            } 
        })

        $('#indexleft a').mouseover(function () {
            $(this).css('color', 'red').siblings().css('color', '#999');
        }).mouseout(function () {
            $(this).css('color', '#999')
        })
        // 点击切换到对应的可视区
        // 通过左导航点击 楼层跳跃
        // $('#indexleft a').on('click', function (e) {
        //     var e = window.event || e
        //     e.preventDefault();
        //     var rid = $(this).attr('href');
        //     $('#indexleft a').animate({ scrollTop: $(rid).offset().top - 120}, 500, function () {
                
        //     })
               
            
        // })
        $(document).ready(function () {
            window.addEventListener("scroll", function (event) {
                var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;

                $(window).scroll(function () {
                    var top = $(document).scrollTop(); //定义变量，获取滚动条的高度
                    var items = $('#indexleft a').find(".test"); //定义变量，查找.item
                    var curId = "";  //定义变量，当前所在的楼层item #id 
                    items.each(function () {
                        var m = $(this); //定义变量，获取当前类
                        var mHeight = m.height();
                        var itemTop = m.offset().top; //定义变量，获取当前类的top偏移量

                        if (top >= itemsTop - 700) {
                            curId = "#" + m.attr("data-id");//楼层跳跃跳跃绑在data-id上 module_269035 module_270674 module_343162 module_269040 module_283124  module_283296 module_343163 module_270725 module_343165 module_343170 module_283206 module_343174 module_343172
                            if (curId == "#module_269035") {
                                var menu = $("#menu");
                                var curLink = menu.find(".sidenav");
                                curLink.removeClass("sidenav");
                                menu.find("[href='#module_269035']").addClass("sidenav");
                            } else if (curId == "#module_270674") {
                                
                            }
                        }
                    })
                })

            })
        })
      
        

        //回到顶部
        var gotop = $('.rightBarNew')
        gotop.onclick = function () {
            var scrollTop = window.scrollY;
            var timer = setInterval(function () {
                var speed = parseInt(scrollTop / 8);
                scrollTop -= speed;
                if (speed <= 0) {
                    clearInterval(timer)
                }
                window.scrollTo(0, screenTop);
            }, 30);
        }

        //点击跳转新窗口windown.open() 本地跳转location.href =""
        $('.shopcart').click(function () {
            location.href = "addcart.html";
        })
        $('#j-newcart_btn').click(function () {
            window.open("addcart.html");
        })
        $('.login').click(function () {
            window.open("login.html");
        }).next().next().click(function () {
            window.open("login.html");
        })
        $('.toplevel').click(function () {
            window.open("liebiaoye.html");
        })
        
        //吸顶

        //足迹

        //轮播图
        

        
    })();

   

})








