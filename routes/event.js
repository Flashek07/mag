const express = require('express');
const router = express.Router();
const send_mysql = require('../mysql/send.js');
const {
  get_users
} = require('../scripts/get_user.js');
const asyncHandler = require('express-async-handler');
let {
  get_users_json
} = require('../scripts/get_user_json.js');
const {
  get_events
} = require('../scripts/get_event.js');
let {
  get_events_json
} = require('../scripts/get_event_json.js');



/* GET add event page. */
router.get('/', function (req, res) {
    let promise_get_user = get_users();
    promise_get_user.then(async (result) => {
      let json_user = await get_users_json();
      
      let promise_get_event = get_events();
      promise_get_event.then(async (result) => {
        let json_event = await get_events_json();
  

    res.render('event', {
        title: 'Events',
        json_users: json_user,
        json_events: json_event
    })
  });
});
});


module.exports = router;