namespace myknight_felix_dlc {
    export function room_dangerous_swamp() {
        Maze.setMaze(tilemap`DangerousSwamp`, "荒野沼泽", function () {
        scene.setBackgroundColor(13)
        Maze.bornPlaceCR(2, 2)
        Maze.makeWeapon2(playground_helpers.randomWeapon(), sprites.castle.tileDarkGrass2)
        Maze.setMazeMonsters(function () {
            Maze.setMonstersMembers2("1森林蝙蝠", sprites.builtin.forestTiles14)
            Maze.setMonstersMembers2("1顽皮猴子持续", sprites.castle.saplingPine)
        })
        Maze.setMazeMonsters(function () {
            Maze.setMonstersMembers2("1顽皮猴子持续", sprites.castle.saplingPine)
            Maze.setMonstersMembers2("5森林蝙蝠", sprites.builtin.forestTiles14)
        })
        Maze.setMazeMonsters(function () {
            Maze.setMonstersMembers2("巨蟒boss", sprites.swamp.swampTile0)
        })
        Maze.nextPortal2(sprites.castle.tileGrass2)
        Maze.nextMazeOfPortal(Maze.mazeKind.random)
    })
    Enemy.setMonsters0(function () {
        Enemy.setMonsters("1森林蝙蝠", function (monster) {
            Enemy.addMember(monster, "森林蝙蝠", 1)
            Enemy.setMonstersV(monster, Enemy.msKind.occurrence_interval, 10)
            Enemy.setActionM(monster, 1, function (enemy) {
                Enemy.randomAtk(enemy)
                Enemy.enemyMoveTo(enemy, Enemy.crORxy.xy, Player.getPlayer().x, Player.getPlayer().y)
            })
            Enemy.setActionM(monster, 0, function (enemy) {
                Enemy.randomAtk(enemy)
            })
            Enemy.setActionM(monster, 1, function (enemy) {
                Enemy.jmp(monster, enemy, 0)
            })
        })
        Enemy.setMonsters("5森林蝙蝠", function (monster) {
            Enemy.addMember(monster, "森林蝙蝠", 5)
            Enemy.setMonstersV(monster, Enemy.msKind.occurrence_interval, 100)
            Enemy.setActionM2(monster, "跟随攻击")
        })
        Enemy.setMonsters("1顽皮猴子持续", function (monster) {
            Enemy.addMember(monster, "顽皮猴子", 1)
            Enemy.setMonstersV2(monster, Enemy.msKind2.continuous, true)
            Enemy.setMonstersV2(monster, Enemy.msKind2.unimportant, true)
            Enemy.setMonstersV(monster, Enemy.msKind.occurrence_probability, 20)
            Enemy.setMonstersV(monster, Enemy.msKind.occurrence_interval, 8000)
            Enemy.setActionM2(monster, "跟随攻击")
        })
        Enemy.setMonsters("巨蟒boss", function (monster) {
            Enemy.addMember(monster, "巨蟒", 1)
            Enemy.setMonstersV2(monster, Enemy.msKind2.boss, true)
            Enemy.setActionM(monster, 0.5, function (enemy) {
                if (Enemy.enemyHp(enemy) < 50) {
                    Enemy.skillAtk(enemy, 4, 4.8)
                } else {
                    Enemy.jmp(monster, enemy, 1)
                }
            })
            Enemy.setActionM(monster, 0.1, function (enemy) {
                Enemy.skillAtk(enemy, randint(0, 2))
            })
            Enemy.setActionM(monster, 0, function (enemy) {
                Enemy.skillAtk(enemy, randint(2, 3))
            })
            Enemy.setActionM(monster, 0.1, function (enemy) {
                Enemy.enemyMoveTo(enemy, Enemy.crORxy.xy, Player.getPlayer().x, Player.getPlayer().y)
                Enemy.jmp(monster, enemy, 0)
            })
        })
    })
    }
}
