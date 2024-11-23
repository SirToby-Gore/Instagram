class RandomCoordinates {
    public y: string;
    public x: string;

    constructor() {
        this.x = Math.random() * 100 + '%';
        this.y = Math.random() * 100 + '%';
    }
}

class ShootingStar {
    private colours: Array<string>;
    private star: HTMLDivElement;
    private start: RandomCoordinates;    

    constructor(
        isRandomStars: boolean = false,
        colours: Array<string> = ['lightseagreen']
    ) {
        this.colours = colours;

        this.star = document.createElement('div');

        this.star.classList.add('star');

        this.setStarType(isRandomStars);

        this.start = new RandomCoordinates();
            
        this.setStyles();
    }

    /**
     * sets the type of star
     * @param isRandomStars {boolean}
     * @returns {void}
     */
    setStarType(isRandomStars: boolean): void {
        if (!isRandomStars) {
            this.star.classList.add('pointed-star-4')
            return;
        }

        const randFloat = Math.random()

        if (randFloat <= 0.3) {
            this.star.classList.add('pointed-star-4')
        }
        else if (randFloat > 0.3 && randFloat <= 0.6) {
            this.star.classList.add('pointed-star-8')
        }
        else {
            this.star.classList.add('pointed-star-8-skinny')
        }
    }

    /**
     * sets the styles of the star
     */
    setStyles(): void {
        this.setNewStyleVar('--start-x', this.start.x);
        this.setNewStyleVar('--start-y', this.start.y);

        this.setNewStyleVar('--duration', Math.random() * 6 + 5 + 's'); 

        this.setNewStyleVar('--delay', Math.random() + 's');

        this.setNewStyleVar('--top', Math.random() * 100 - 30 + '%');
        this.setNewStyleVar('--left', Math.random() * 100 - 30+ '%');

        this.setNewStyleVar('--size', `${Math.random() + 0.5}`);

        this.setNewStyleVar('--angle', Math.random() * 360 + 'deg');

        this.setNewStyleVar('--colour', this.randomColour());
    }

    setNewStyleVar(styleName: string, styleValue: string): void {
        this.star.style.setProperty(styleName, styleValue);
    }

    getStar() {
        return this.star;
    }

    /**
     * gets a random colour from an array
     * @returns {string}
     */
    private randomColour(): string {
        const array: Array<string> = this.colours;
        const min: number = Math.ceil(0);
        const max: number = Math.floor(array.length - 1);

        return array[
            Math.floor(
                Math.random() * (max - min + 1)
            ) + min
        ];
    }
}

class NightSky {
    private nightSky: HTMLElement;
    private numberOfStars: number;

    constructor(ID: string) {
        this.nightSky = document.getElementById(ID)!;

        this.numberOfStars = Number.parseInt(this.nightSky.style.getPropertyValue('--number-of-stars') || '5');
        this.addStars(this.numberOfStars);

        this.nightSky.addEventListener('click', () => {
            playSong(ID);
        });
    }

    /**
     * gets the colours from the night sky's css
     * @returns {Array<string>}
     */
    private getColours(): Array<string> {
        let colours: string = this.nightSky.style.getPropertyValue('--colours') || 'lightseagreen'

        const replaceForBlank: Array<string> = [' ', '\'', '\"']

        if (typeof colours == 'string') {
            for (let i in replaceForBlank) {
                while (colours.includes(replaceForBlank[i])) {
                    colours = colours.replace(replaceForBlank[i], '')
                }
            }
        }

        return colours.split(',');
    }

    /**
     * adds all the stars to the night sky
     * @param numberOfStars {number}
     */
    private addStars(numberOfStars: number): void {
        const isRandomStars: boolean = this.nightSky.style.getPropertyValue('--stars') == '0';
        
        let colours: Array<string> = this.getColours();

        for (let i = 0; i < numberOfStars; i++) {
            this.nightSky.appendChild(
                new ShootingStar(
                    isRandomStars,
                    colours
                ).getStar());
        }
    }
}

/**
 * sets the ability to play a song on a night sky
 * @param ID {string}
 * @returns {void}
 */
function playSong(ID: string): void {
    const skyBG: HTMLElement | null = document.getElementById(ID);

    if (skyBG == null) {
        return;
    }

    const myAudio = skyBG.getElementsByTagName('audio')[0];
    myAudio.play();
}

/**
 * initialises all night skies
 */
function makeNightSkies(): void {
    const skies: HTMLCollection = document.getElementsByClassName('night-sky')

    for (let i=0; i < skies.length; i++) {
        new NightSky(
            skies[i].id
        );
    }
}

/**
 * checks to see if an ID is taken in the DOM.
 * @param ID {string}
 * @returns {boolean}
 */
function isIDTaken(ID: string): boolean {
    if (document.getElementById(ID) == undefined) {
        return false;
    }
    else {
        return true;
    }
}

/**
 * sets all auto id elements to unique ids
 * auto ID elements are elements with the class [auto-id]
 */
function setAutoID(): void {
    const autoIDElements = document.getElementsByClassName('[auto-id]');

    let count = 0;

    for (let i=0; i < autoIDElements.length; i++) {
        while (true) {
            const ID = `ID-${count}`
            
            if (!isIDTaken(ID)) {
                autoIDElements[i].id = ID;
                break;
            }

            count += 1;
        }
    }
} 

function main(): void {
    setAutoID()
    makeNightSkies()
}

main()