export function play(album: string, song: string): void { 
    const path: string = '../assets/'+album+'/'+song+'.mp3';
    const audio = new Audio(path);
    audio.play();
    console.log('playing'+path);
}
