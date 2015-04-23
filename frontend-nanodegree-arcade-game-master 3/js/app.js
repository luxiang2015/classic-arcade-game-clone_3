// Enemies our player must avoid
var Enemy = function(RowCount) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    //var obj = Object.creat(Enemy.prototype);
    this.sprite = 'images/enemy-bug.png';
    this.x = 0;
    this.y = 85*RowCount + 65;
    this.speed = this.getspeed();
    return this;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.x = this.x + this.speed * dt;
    if (this.y < 100)
    {
        if (this.x > 500)
        {
            this.x = 0;
        }
    } else if (this.y < 200) {
        if (this.x > 650)
        {
            this.x = 0;
        }
    } else if (this.y < 300) {
        if (this.x > 800)
        {
            this.x = 0;
        }
    }
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Enemy.prototype.getspeed = function(){
    var random = Math.random() + 0.5;
    if (random < 1)
    {
        this.speed = 50;
    } else {
        this.speed = 120;
    }
    return this.speed;
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    this.sprite = 'images/char-pink-girl.png';
    this.x = 200;
    this.y = 400;
};

Player.prototype.update = function(){
    if (this.x < 40){
        this.x = 0;
    }
    if (this.x > 400){
        this.x = 400;
    }
    if (this.y < 40){
        this.x = 200;
        this.y = 400;
    }
    if (this.y > 400){
        this.y = 400;
    }
};

Player.prototype.reset = function(){
    this.x = 200;
    this.y = 400;
};

Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(key){
    switch (key){
        case 'left':
            this.x = this.x - 101;
            break;
        case 'right':
            this.x = this.x + 101;
            break;
        case 'up':
            this.y = this.y - 83;
            break;
        case 'down':
            this.y = this.y + 83;
            break;
    }
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var EnemyCount = 3;
var allEnemies = [];

for (var i = 0; i < EnemyCount; i++){
    var enemy1 = new Enemy(i);
    var enemy2 = new Enemy(i);
    if (enemy1.getspeed() !== enemy2.getspeed())
    {
        allEnemies.push(enemy1);
        allEnemies.push(enemy2);
    }
    else
    {
        allEnemies.push(enemy1);
    }
}

var player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
