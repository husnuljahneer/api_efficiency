const moment = require("moment-timezone");
const axios = require("axios");

class TimeDiff {
  async getTimeDiff(url) {
    let startTime = moment();
    let response = await axios.get(url);
    if (response.status !== 200) {
      throw new Error("Error");
    }
    let endTime = moment();
    let timeDiff = endTime.diff(startTime);
    console.log(timeDiff + "ms");
    return "API Efficiency : " + timeDiff + "ms";
  }
}

module.exports = TimeDiff;
