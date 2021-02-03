const { config } = require("dotenv").config();

class Config {
  constructor() {
    var self = this;    
    
    self.assign_default_ip = () => {
      self.ip =
        process.env.LISTENING_IP_ADDRESS || "127.0.0.1";
    };

    self.assign_default_port = () => {
      self.port = process.env.PORT || 3000;
    }; 

    self.assign_defaults = () => {
      self.assign_default_ip();
      self.assign_default_port();
    };

    self.assign_defaults();  
  }
}

module.exports = { Config };
