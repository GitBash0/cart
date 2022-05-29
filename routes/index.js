var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let products=[
    {
      name:"Iphone",
      category:"mobile",
      description:"This is Iphone",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0praxNFT7dTQYuQlpiE9nl6gbXzpnY0kSRg&usqp=CAU"
    },
    {
      name:"Vivo",
      category:"Mobile",
      description:"This is vivo",
      image:"https://assetscdn1.paytm.com/images/catalog/view_item/822913/1631526662287.png"
    },
    {
      name:"Nokia",
      category:"Mobile",
      description:"This is nokia",
      image:"https://img.etimg.com/thumb/msid-59424968,width-640,resizemode-4,imgsize-182738/nokia-1100.jpg"
    },
    {
      name:"Poco",
      category:"Mobile",
      description:"this is poco",
      image:"https://www.91-img.com/pictures/144234-v7-oneplus-10-pro-mobile-phone-large-1.jpg?tr=q-80"
    },

  ]
  res.render('index', { products});
});

module.exports = router;
