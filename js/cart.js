// 產品列表
const productList = [
    {
        id: '1',
        title: '產品一',
        price: 10,
        img: 'https://picsum.photos/id/999/1200/600'
    },
    {
        id: '2',
        title: '產品二',
        price: 60,
        img: 'https://picsum.photos/id/1070/1200/600'
    },
    {
        id: '3',
        title: '產品三',
        price: 180,
        img: 'https://picsum.photos/id/1071/1200/600'
    },
    {
        id: '4',
        title: '產品四',
        price: 220,
        img: 'https://picsum.photos/id/1072/1200/600'
    },
    {
        id: '5',
        title: '產品五',
        price: 360,
        img: 'https://picsum.photos/id/1073/1200/600'
    },
    {
        id: '6',
        title: '產品六',
        price: 360,
        img: 'https://picsum.photos/id/1074/1200/600'
    },
    {
        id: '7',
        title: '產品七',
        price: 400,
        img: 'https://picsum.photos/id/1075/1200/600'
    },
    {
        id: '8',
        title: '產品八',
        price: 450,
        img: 'https://picsum.photos/id/1076/1200/600'
    },
    {
        id: '9',
        title: '產品九',
        price: 520,
        img: 'https://picsum.photos/id/1077/1200/600'
    }
];

// TODO: 設計建立單一商品卡片HTML標籤的函數
function createProductCardElement() {
    // 產生一個Bootstrap Card的元件
    // https://getbootstrap.com/docs/4.4/components/card/
    const cardElement = `
        <div class="col-md-4">
            <div class="card">
                <img src="" class="card-img-top">
                <form class="add-item-form card-body">
                    <h5 class="card-title">
                        商品標題
                    </h5>
                    <p class="card-text">
                        商品價格: $100
                    </p>
                    <div class="form-group">
                        <label>購買數量</label>
                        <input class="form-control" type="number" min="1" max="20" required>
                    </div>
                    <div class="form-group">
                        <button class="btn btn-primary" type="submit">
                            <i class="fas fa-cart-plus"></i> 
                            加入購物車
                        </button>
                    </div>
                </form>
            </div>
        </div>
    `;
    return cardElement;
}

// TODO: 渲染商品
// 透過迴圈將produstList內的資料一一取出
productList.forEach(product => {
    // console.log('[product]', product)
});

// 購物車建構式
function Cart() {
    // localStorage key
    this.storageKey = 'example-cart';
    // 購物車的品項
    this.itemList = [];
    // TODO: 初始化購物車
    this.initCart = function () {
        // 透過 localStorage key 取得過去建立的品項

        // 如果過去建立的品項存在?轉回陣列格式並設定為此購物車預設的itemList

        // 渲染畫面

    }
    // TODO: 傳入商品id與數量並新增商品至購物車
    this.addItem = function (pid, amount) {

        // TODO: 建構一個購物車品項資料
        // { title: 品名, price: 單價, amount: 數量, createdAt: 新增時間 }

    }
    // TODO: 至購物車刪除於購物車內指定索引商品
    this.deleteItem = function (i) {

    }
    // TODO: 清空購物車
    this.emptyCart = function () {

    }
    // TODO: 更新資料到localStorage
    this.updateDataToStorage = function () {

    }
    // TODO: 渲染購物車
    this.render = function () {
        // 選到id是cartTableBody的元素
        const $tbody = $('#cartTableBody');
        // 選到id是cartTableFoot的元素
        const $tfoot = $('#cartTableFoot');
        // 預設tbody內的內容是空值
        let tbodyContent = '';
        // TODO: 將目前購物車的項目逐項取出
        this.itemList.forEach((item, idx) => {
            // 將內容渲染至tbody內
            const tr = `<tr>
                <td>
                    <button class="remove-item-btn btn btn-danger btn-sm">&times</button>
                    品名
                </td>
                <td class="text-right">$ </td>
                <td class="text-right"> </td>
                <td class="text-right">$ </td>
            </tr>`;

        });

        // 顯示總金額
        $tfoot.html(`
            <tr>
                <td>總金額</td>
                <td colspan="3"> </td>
            </tr>
        `);

    }
}

// 建立一個購物車的實例
const cart = new Cart();

// TODO: 綁定新增商品至購物車的表單送出事件
$(".add-item-form").submit(function (e) {
    e.preventDefault();
    console.log("[準備新增購物車品項]");
    // 取得送出表單的商品ID

    // 取得選擇的商品數量

});

// TODO: 綁定清空購物車按鈕的點擊事件
$("#clearCartBtn").click(function () {
    console.log("[準備清空購物車]");
    // 清空購物車
    cart.emptyCart();
});

// TODO: 綁定移除單一品項的點擊事件
$(".remove-item-btn").click(function () {
    console.log("準備移除品項");
});