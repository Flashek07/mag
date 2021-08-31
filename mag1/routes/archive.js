
const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const {
  get_archive
} = require('../scripts/get_archive.js');
let {
  get_archive_json
} = require('../scripts/get_archive_json.js');



/* GET users listing. */
router.get('/', asyncHandler(async (req, res) => {
  let promise_get_archive = get_archive();
  promise_get_archive.then(async (result) => {
    let json_data = await get_archive_json();
    res.render('archive', {
      title: 'Archive',
      json: json_data
    })
  });
}));

module.exports = router;