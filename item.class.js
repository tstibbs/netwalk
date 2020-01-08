class Item {
    static srcs = {
        bg: 'background.png',
        1:  'cable0001.png',
        2:  'cable0010.png',
        3:  'cable0011.png',
        4:  'cable0100.png',
        5:  'cable0101.png',
        6:  'cable0110.png',
        7:  'cable0111.png',
        8:  'cable1000.png',
        9:  'cable1001.png',
        10: 'cable1010.png',
        11: 'cable1011.png',
        12: 'cable1100.png',
        13: 'cable1101.png',
        14: 'cable1110.png',
        15: 'cable1111.png',
        c:  'computer1.png',
        cc: 'computer2.png',
        s:  'server.png'
    };
    static imgs = {};
    static SIZE = 32;
    constructor(x, y, shape, type) {
        this.x = x;
        this.y = y;
        this.cx = this.x * Item.SIZE;
        this.cy = this.y * Item.SIZE;
        this.shape = shape;
        this.type = type || 'w';
        if (this.type === 's') {
            this.isConnected = true;
        }
    }
    render(ctx) {
        const bg = Item.imgs['bg'];
        ctx.drawImage(bg, this.cx, this.cy);
        let img = Item.imgs[this.shape];
        if (img) {
            ctx.drawImage(img, this.cx, this.cy);
        }
        if (this.type !== 'w') {
            let type = this.type;
            if (this.type === 'c' && this.isConnected) {
                type = 'cc';
            }
            img = Item.imgs[type];
            ctx.drawImage(img, this.cx, this.cy);
        }
    }
    rotate() {
        const pipka = [0, 2, 4, 9, 8, 10, 3, 11, 1, 12, 5, 13, 6, 14, 7,];
        this.shape = pipka[this.shape];
    }
    rotateCW() {
        const pipka = [0, 8, 1, 9, 2, 10, 3, 11, 4, 12, 5, 13, 6, 14, 7,];
        this.shape = pipka[this.shape];
    }
}