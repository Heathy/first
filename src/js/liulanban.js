(function () {
    /*
        需求：留言板
            用户名验证；
            注册
            登陆
            退出
            发帖
            顶贴
            踩贴
            点击加载更多
    */
    let name = $('#phoneipt');//用户名
    let pwd = $('.j-inputtext');//验证码

/*
   验证用户名
   请求方式：get
       接口路径：guestbook/index.php
       参数：
           m : index
           a : verifyUserName
           username : 要验证的用户名
       返回数据：
           {
               code : 返回的信息代码 0 = 没有错误，1 = 有错误
               message : 返回的信息具体返回信息
           }
*/
    name.blur(function () {
        // console.log(1);
        $.ajax({
            type: 'get',
            url: '../api/login.php',
            data: {
                useid: 'useid',
                name: 'name',
                pwd: 'pwd',
            },

            success: str => {
                // console.log(str)
                let arr = JSON.parse(str);
                // console.log(str);
                if (arr.code) {
                    //6有错误 
                    $('#phoneipt').css('color', 'red');//有就不给注册 现在数据库里是空表
                } else {
                    //5成功
                    $('#phoneipt').css('color', '#58bc58');//没有就不给注册
                }
            }
        })
    })

    /*
        用户注册
        get/post
            guestbook/index.php
                m : index
                a : reg
                username : 要注册的用户名
                password : 注册的密码
            返回
                {
                    code : 返回的信息代码 0 = 没有错误，1 = 有错误
                    message : 返回的信息 具体返回信息
                }
        */
    let gotoreg = $('.gotoreg j-tag')
    gotoreg.click(function () {
        //点击手机快捷注册 出现注册页

    }) 

    //点击获取验证码 倒计时60秒
    $('.tabfocus').on('click', function () {
        $(this).text(time);
        var time = 60;
        function getRandomCode() {
            if (time === 0) {
                time = 60;
                return;
            } else {
                time--;
                $('.tabfocus').text(time);
            }

            setTimeout(function () {
                getRandomCode()
            }, 1000);
        }
    })

    //点击登入存cookie 手机登入时
    $('loginbtn').click(function () {
        getCookie('phone');
        getCookie('psw');
        window.location.reload();
    })

})();