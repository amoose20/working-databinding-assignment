import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
    @Output() gameStarted = new EventEmitter<>();

    onStartGame() {
        this.gameStarted.emit()
    }

}
