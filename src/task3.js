/**Task 3
 * Cоздать классы Monster и Gladiator, оба наследуются от базового класса Warior
 * у них есть свои имена, тип атаки и HP.
 * у каждого есть методы атаки.
 * Атака - рандомное значение после каждого удара, например от 1 до 10.
 * Создать класс Game где реализовать метод start(), который выполняет бой между бойцами
 * После боя в консоль вывести имя того, кто победил
 * const gladiator = new Gladiator(some aruments);
 * const monster = new Monster(some aruments);
 * const game = new Game(gladiator, monster);
 *
 * game.start();
 * console.log(game.winner); // имя победителя.
 * */

class Warior {
    get healthPoints() {
        return this._healthPoints;
    }
    get attackPoints() {
        return this._attackPoints;
    }
    constructor (name, typeAttack, healthPoints) {
        this.maxAttackPoint = 10;
        this.minAttackPoint = 1;
        this.name = name;
        this.typeAttack = typeAttack;
        this._attackPoints = this._getAttackPoints();
        this._healthPoints = healthPoints;
    }

    _getAttackPoints() {
        return Math.floor(Math.random() * ((this.maxAttackPoint + 1) - this.minAttackPoint)) + this.minAttackPoint;
    }

    attack(healthPoints) {
        this._healthPoints -= healthPoints;
    }
}

class Monster extends Warior
{
    constructor (name, typeAttack, healthPoints) {
        super(name, typeAttack, healthPoints);
        this._typeOfHerous = 'monster';
    }
    get typeOfHerous() {
        return this._typeOfHerous;
    }

    set typeOfHerous(value) {
        this._typeOfHerous = value;
    }
}

class Gladiator extends Warior
{
    constructor (name, typeAttack, healthPoints) {
        super(name, typeAttack, healthPoints);
        this._typeOfHerous = 'gladiator';
    }

    get typeOfHerous() {
        return this._typeOfHerous;
    }

    set typeOfHerous(value) {
        this._typeOfHerous = value;
    }
}

class Game {
    constructor(hero1, hero2) {
        this._randomAattackInEachRound = false;
        this.hero1 = hero1;
        this.hero2 = hero2;
    }
    start() {
        let round = 0;
        for(;;) {
            round++;
            console.log("%cRound " + round, 'font-size:20px; font-weight: 800;');
            this._fight();
            if (this._checkWinner()) {
                break;
            }
            if (this._randomAattackInEachRound) {
                this.hero1.attackPoints = this.hero1._getAttackPoints();
                this.hero2.attackPoints = this.hero2._getAttackPoints();
            }
        }
    }

    _fight() {
        this.hero2.attack(this.hero1.attackPoints);
        this.hero1.attack(this.hero2.attackPoints);
        this._showAttackAction();
    }

    _showAttackAction() {
        this._colorMesssage(this.hero1, this.hero2);
        this._colorMesssage(this.hero2, this.hero1);
    }

    _colorMesssage(hero1, hero2) {
        var baseCss = 'font-size:20px;';
        var infoCss = baseCss + 'background: #222; color: #bada55';
        console.log(
            '%cHero %c' + hero1.name +
            '%c deals damage %c' + hero1.attackPoints +
            '%c (used %c' + hero1.typeAttack + '%c) Hero has %c' +
            hero2.healthPoints + '%c health points'
            , baseCss
            , infoCss
            , baseCss
            , infoCss
            , baseCss
            , infoCss
            , baseCss
            , infoCss
            , baseCss
        );
    }

    _checkWinner() {
        if (this.hero1.healthPoints <= 0) {
            return this._showWinner(this.hero2);
        }
        if (this.hero2.healthPoints <= 0) {
            return this._showWinner(this.hero1);
        }
    }

    _showWinner(winner) {
        console.log(' %c' + winner.name + ' wins!!! Finish him!',
            'color: red; font-weight: 800; font-size:20px');
        return true;
    }

    set randomAattackInEachRound(value) {
        this._randomAattackInEachRound = value;
    }
}

const gladiator = new Gladiator('Gladiator', 'Axe', 100);
const monster = new Monster('Monster', 'Fire', 200);
const game = new Game(gladiator, monster);
// game.randomAattackInEachRound = true;
game.start();
