import express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    // res.sendFile('index.html', {
    //   root: 'C:\\Users\\jmedi\\Documents\\Github\\social-network\\public'
    // });

    res.send('index.html');
});

export default router;
