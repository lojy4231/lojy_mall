const mongoose = require("mongoose");

const goodsSchema = new mongoose.Schema({
  goodsId: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
    unique: true
  },
  thumbnailUrl: {
    type: String
  },
  category: {
    type: String
  },
  price: {
    type: Number
  }
});

module.exports = mongoose.model("Goods", goodsSchema); // Goods 라는 이름의 모델이 생성 나중에 goodsSchema를 통해 자료를 저장하고 빼옴