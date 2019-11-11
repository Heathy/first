console.log('你已经被我监控了')
const imgs = document.querySelectorAll('img')
console.log(imgs)
for (let i = 0; i < imgs.length; i++) {
    imgs[i].src = "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2948798765,3998056772&fm=26&gp=0.jpg"
}