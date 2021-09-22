import { Content } from "./content-interface";

export class ContentList {
    private _musicSongs: Content[];

    constructor() {
        this._musicSongs = [];
    }

    get musicSongs(): Content[] {
        return this._musicSongs;
    }

    add(song: Content): void {
        this._musicSongs.push(song);
    }

    numberOfSongs(): number {
        return this._musicSongs.length;
    }
    htmlOutput(index: number): string {
        if (index >= this._musicSongs.length) {
            return `<div>This is not the song you are looking for</div>`;
        }
        let output = `
            <div>${this._musicSongs[index].id}</div>
            <div>${this._musicSongs[index].author}</div>
            <div>${this._musicSongs[index].title}</div>
            <div>${this._musicSongs[index].body}</div>
        `;
        if (this._musicSongs[index].imgUrl) {
            output += `<img src=${this._musicSongs[index].imgUrl}>`;
        }
        if (this._musicSongs[index].type) {
            output += `<div>${this._musicSongs[index].type}</div>`;
        }
        if (this._musicSongs[index].tags && this._musicSongs[index].tags?.length > 0) {
            for (var i = 0; i < this._musicSongs[index].tags.length; i++) {
                output += `<div>${this._musicSongs[index].tags[i]}</div>`;
            }
        }

        return output;
    }
}