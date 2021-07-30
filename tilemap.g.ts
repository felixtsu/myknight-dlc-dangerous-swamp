// 自动生成的代码。请勿编辑。
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "DangerousSwamp":
            case "级别3":return tiles.createTilemap(hex`140019000101010101010101010101010101010101010101010807070707070707070707070707070707090101050c0b0d020202020202020202020202020301010502020202180202020202020202020202030101050202020202020c0b0d0202151516021803010105180202020202040404020210141102020301010502020c0b0d030f0f0f05021217130202030101050202020202030f0e0f05020c0b0d0202030101050202020218030f0f0f05020202020202030101050202020202020707070202020202020203010105151516020202020202020c0b0d0202020301010510141102020202020202020202151516030101051217130c0b0d02180202020202101411030101050202020202020202020202180212171303010106040404040404020202020404040404040a010101010101010101051a1a0301010101010101010000000000000001051b1b0301000000000000000000000000000001051b1b0301000000000000000000000000000001051b1a0301000000000000000000010101010101051b1b0301010101010100000000010807070707021b1a020707070709010000000001051a1b0c0b0d1b191b1a1b1a1b03010000000001051a1b191a1b1a1b1a0c0b0d1a03010000000001060404040404040404040404040a0100000000010101010101010101010101010101010000`, img`
22222222222222222222
2..................2
2..................2
2..................2
2............222...2
2............222...2
2............2.2...2
2..................2
2..................2
2..................2
2.222..............2
2.222..........222.2
2.2.2..........222.2
2..............2.2.2
2..................2
22222222....22222222
.......2....2.......
.......2....2.......
.......2....2.......
..222222....222222..
..2..............2..
..2..............2..
..2..............2..
..2..............2..
..2222222222222222..
`, [myTiles.transparency16,sprites.castle.rock0,sprites.castle.tilePath5,sprites.castle.tilePath6,sprites.castle.tilePath8,sprites.castle.tilePath4,sprites.castle.tilePath7,sprites.castle.tilePath2,sprites.castle.tilePath1,sprites.castle.tilePath3,sprites.castle.tilePath9,sprites.swamp.swampTile1,sprites.swamp.swampTile0,sprites.swamp.swampTile2,sprites.castle.tileGrass2,sprites.castle.tileGrass1,sprites.builtin.forestTiles5,sprites.builtin.forestTiles7,sprites.builtin.forestTiles13,sprites.builtin.forestTiles15,sprites.builtin.forestTiles6,sprites.builtin.forestTiles1,sprites.builtin.forestTiles3,sprites.builtin.forestTiles14,sprites.castle.saplingPine,sprites.castle.tileDarkGrass2,sprites.castle.tileDarkGrass1,sprites.castle.tileDarkGrass3], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// 自动生成的代码。请勿编辑。
