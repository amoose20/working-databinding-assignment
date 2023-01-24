import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {    
    interval;
    lastNumber = 0;
    @Output() gameStarted: EventEmitter<number> = new EventEmitter<number>();

    onStartGame() {
        this.interval = setInterval(() => {
            this.gameStarted.emit(this.lastNumber + 1);
            this.lastNumber++;
        }, 1000);
    }

    increment() {
        var count = 0;
        count++;
        this.gameStarted.emit(count);
        console.log("count: " + count);
    }

}
