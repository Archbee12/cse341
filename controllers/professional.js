const fs = require('fs');
const path = require('path');

const getData = async (req, res, next) => {
  try {
    const filePath = path.join(__dirname, '../professional.json');
    const rawData = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(rawData);

    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(data[0]); // same idea: just return the first one
  } catch (error) {
    console.error('Error reading professional data:', error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

module.exports = { getData };
