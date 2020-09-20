// import GamePlay from './GamePlay';
import themes from './themes';
import PositionedCharacter from './PositionedCharacter';
import { characterGenerator, generatePosition, generateTeam, typeList } from './generators';
import { getPropagation } from './utils';

export default class GameController {
  constructor(gamePlay, stateService, side) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
    this.index = 0;
    this.side = side;
  }

  init() {
    // GamePlay.drawUi('prairie');
    this.gamePlay.drawUi('prairie');
    this.typeList = (this.side === 'good') ? typeList : typeList.reverse();
    this.teamP = generateTeam(typeList.slice(0, typeList.length / 2), 4, 5);
    this.teamE = generateTeam(typeList.slice(typeList.length / 2), 4, 5);
    this.position = [
      ...generatePosition(this.teamP, this.gamePlay.boardSize, 'good'),
      ...generatePosition(this.teamE, this.gamePlay.boardSize, 'evil')
    ];
    this.gamePlay.redrawPositions(this.position);
    this.gamePlay.addCellEnterListener(this.onCellEnter.bind(this));
    this.gamePlay.addCellLeaveListener(this.onCellLeave.bind(this));
    this.gamePlay.addCellClickListener(this.onCellClick.bind(this));
  }

  onCellClick(index) {
    // TODO: react to click
  }

  onCellEnter(index) {
    // TODO: react to mouse enter
  }

  onCellLeave(index) {
    // TODO: react to mouse leave
  }
}
