const userInfo = require('./information');

const cowsay = require("cowsay");
console.log(cowsay.say ({
text : `Hi, my name is ${userInfo.name} and i come from ${userInfo.campus} campus!`,
e : "oO",
T : "U"

}));

