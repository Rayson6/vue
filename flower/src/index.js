import "./scss/style.scss";
import axios from "axios";
import "./fonts/iconfont.css";

axios.get("/getData")
    .then((res) => {
        render(res.data.data.Datas.FlowerList)
    })

function render(data) {
    console.log(data)
    let main = document.querySelector(".main");
    let html = "";
    data.forEach(item => {
        html += `<div class="box">
        <img src="${item.Image}" alt="">
        <div class="right">
            <h4>${item.Name}</h4>
            <h3>${item.Introduction}</h3>
            <em>`
        if (item.NowPromo) {
            item.NowPromo.forEach(ii => {
                html += ` ${ii} `
            })
        }


        html += `</em>
            <h3><span>￥${item.Price}</span><em>￥${item.LinePrice}</em></h3>
            <i class="iconfont icon-gouwuche"></i>
        </div>
    </div> `;

    })
    main.innerHTML = html;
}