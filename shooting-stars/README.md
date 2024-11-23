# The night-sky

## Set up

All scss has been pre-compiled under the folder `/src/scss`.

## JS

The JS is in `/src/JS` folder move the file `scripts.js` to a local folder or inline.

## HTML

Have this like set of a background on anything you need.

### Night Sky

A `div` with:
* id of `night-sky`
* styles of `--number-of-stars` and `--stars`
    - `number of stars`
        + int
        + is the number of stars to be rendered
    - `stars`
        + boolean int
        + the type of stars
        + options: (**0** = 4 pointed only, **1** = random )
    - `colours`
        + csv
        + a csv of css colours in a string
    - `sky-colour`
        + colour
        + the lighter colour for the background
    - `darker-sky-colour`
        + colour
        + the darker colour for the background
* onclick set to `playSong()`

```html
<div
    class="night-sky
        [auto-id]"
    style="
        --number-of-stars:
        20;
        --stars:
        0;
        --colours: 'lightseagreen, blue, red, purple, green, yellow, goldenrod, pink, white'">
    <audio
        src="../assets/audio/Bôa - Duvet (Official Video).mp3"
        hidden
        loop
        autoplay>
    </audio>
</div>
```

#### Song
An  `Audio` tag with:
* id of `auto-play-audio`
* src set to the path of your song
* set
    - `autoplay`    
    - `loop`
    - `hidden`

# What it'll do

If the audio is not working the use has to click/tap the background to get it working
