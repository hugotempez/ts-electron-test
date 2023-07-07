import {app, BrowserWindow} from "electron";

let win: BrowserWindow;

app.on("ready", () => {
    win = new BrowserWindow()
    win.show()
})

class test {
    a: number
    b: number
    sum: number

    constructor(a, b) {
        this.a = a
        this.b = b
        this.sum = this.a * this.b
    }

    public toString(): number {
        return this.sum
    }
}

let t1 = new test(12, 2)

console.log(t1.toString())