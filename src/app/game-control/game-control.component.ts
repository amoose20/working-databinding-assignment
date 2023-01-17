import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {    
    @Output() gameStarted: EventEmitter<number> = new EventEmitter<number>();

    onStartGame() {
        var event = setInterval(this.increment, 1000);
    }

    increment() {
        var count = 0;
        count++;
        this.gameStarted.emit(count);
        console.log("count: " + count);
    }

}
