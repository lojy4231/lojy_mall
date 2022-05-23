const express = require("express");
const Goods = require("../schemas/goods")
const router = express.Router();

router.get("/", (req, res) => {
    res.send("this is root page");
});

router.get("/goods", async (req, res) => {
    const { category } = req.query;

    const goods = await Goods.find({ category });
    
    res.json({
        goods,
    });
});

router.get("/goods/:goodsId", async (req, res) => {
    const { goodsId } = req.params;

    const [detail] = await Goods.find({ goodsId: Number(goodsId) });

    res.json({
        detail,
    });
});

router.post("/goods", async (req, res) => {
    const { goodsId, name, thumbnailUrl, category, price } = req.body;

    const goods = await Goods.find({ goodsId });
    if (goods.length) {
        return res.status(400).json({ success: false, errorMessage: "이미 있는 데이터 입니다." })
    }

    const creeatdGoods = await Goods.create({ goodsId, name, thumbnailUrl, category, price });

    res.json({ goods: creeatdGoods });
});

module.exports = router; // router를 모듈로 내보내겠다.