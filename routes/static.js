const express = require('express');
const path = require('path');
const router = express.Router();

// Serve static frontend files

const frontendPath = path.join(__dirname, '../frontend')
// Serve the main frontend folder/subfolder
router.use(express.static(frontendPath));
router.use('/css', express.static(path.join(frontendPath, 'css')))
router.use('/js', express.static(path.join(frontendPath, 'js')))

// Serve index.html for root route
router.get('/', (req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});

module.exports = router;
