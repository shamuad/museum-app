let now = new Date()
console.log(now)
Date.prototype.toString = () => "lol"
console.log(now)
