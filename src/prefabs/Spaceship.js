//spaceship prefab
class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue, type) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);   //add to existing scene
        this.type = type;
        this.points = pointValue;
        this.moveSpeed = game.settings.spaceshipSpeed;
        if (this.type == 2){
            this.moveSpeed = game.settings.spaceshipSpeed + 2;
        };
        this.anims.create({
            key: 'smallrocket',
            frames: this.anims.generateFrameNumbers('smallrocket', {start:0, end:1, 
            first: 0}),
            frameRate: 7,
            repeat: -1
        });
        if (this.type == 2){
            this.anims.play('smallrocket');
        };
    }

    update() {
        //move spaceship left
        this.x -= this.moveSpeed;
        //wrap around from left edge to right edge
        if(this.x <= 0 - this.width) {
            this.x = game.config.width;
        }
    }

    //position reset
    reset() {
        this.x = game.config.width;
    }
}