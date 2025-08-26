import { Component } from "@angular/core";

@Component({
    selector: 'app-ass3',
    templateUrl: './ass3.component.html',
    styleUrls: ['./ass3.component.css']
})

export class ass3 {
    isVisible: boolean = false;
    logs: number[] = [];
    handleClick() {
        this.isVisible = !this.isVisible;
        let now = Date.now()
        this.logs.push(now)
    }

}