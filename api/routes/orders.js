const express = require('express');
const router  = express.Router();


router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'orders were fetched'
    });
});
router.patch('/:orderId',(req,res,next)=>{
    var id = req.params.orderId;
    if(id=='special'){
        res.status(201).json({
            id:'this was special id',
            message:'orders was patched'
        });
    }
    else{
        res.status(201).json({
            message:'orders was patched'
        });
    }
});
router.get('/:orderId',(req,res,next)=>{
    var id = req.params.orderId;
    if(id=='special'){
        res.status(200).json({
            id:'this was special id',
            message:'orders was fetched'
        });
    }
    else{
        res.status(200).json({
            message:'orders was fetched'
        });
    }
});
router.post('/',(req,res,next)=>{
    res.status(201).json({
        message:'orders were created'
    });
});
router.delete('/:productId',(req,res,next)=>{
    var id = req.params.productId;
    res.status(200).json({
        message:'orders were deleted',
        id:id
    });
});

module.exports = router;