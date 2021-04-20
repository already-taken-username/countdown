const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile('index.html');
})

router.use((req, res, next) => {
    res.status(404).redirect('/');
});

module.exports = router;