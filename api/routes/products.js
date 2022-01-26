const express = require('express');
const router  = express.Router();


router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'products were fetched'
    });
});

router.patch('/:productId',(req,res,next)=>{
    var id = req.params.productId;
    if(id=='special'){
        res.status(201).json({
            id:'this was special id',
            message:'product was patched'
        });
    }
    else{
        res.status(201).json({
            message:'product was patched'
        });
    }
});
router.get('/:productId',(req,res,next)=>{
    var id = req.params.productId;
    if(id=='special'){
        res.status(200).json({
            id:'this was special id',
            message:'product was fetched'
        });
    }
    else{
        res.status(201).json({
            message:'product was fetched',
            id:id
        });
    }
});
router.post('/',(req,res,next)=>{
    const product ={
        name : req.body.name,
        productId : req.body.productId,
    };
    res.status(201).json({
        message:'products were created',
        product: product
    });
});
router.delete('/:productId',(req,res,next)=>{
    var id = req.params.productId;
    res.status(200).json({
        message:'products were deleted',
        id:id
    });
});

module.exports = router;