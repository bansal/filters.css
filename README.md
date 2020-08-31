# filters.css

CSS only library to apply color filters.

See the full [documentation](https://bansal.io/filters-css)

![Preview](https://bansal.io/assets/images/filters-css-preview.jpg)

## Features

- Only CSS. No JavaScript!
- ~1KB minified and gzipped!
- Supports all modern browsers
- Built with SCSS.
- Hover support.

## Installation

### via npm

```bash
npm install filters.css
```

### via cdn

```html
<link href="https://unpkg.com/filters.css" rel="stylesheet">
```

### download

```html
<link href="dist/filters.min.css" rel="stylesheet">
```

## Usage

filters.css can be used with any css framework.

### example

```html
<img src="..." class="blur-3" />
```

## Filter Classes

|class format| example | hover |
|--- |--- |--- |
|blur-{0-10}| `.blur-3` | `.hover-blur-3`|
|grayscale-{0-10}| `.grayscale-3` | `.hover-grayscale-3`|
|brightness-{0-10}| `.brightness-3` | `.hover-brightness-3`|
|contrast-{0-10}| `.contrast-3` | `.hover-contrast-3`|
|invert-{0-10}| `.invert-3` | `.hover-invert-3`|
|saturate-{0-10}| `.saturate-3` | `.hover-saturate-3`|
|sepia-{0-10}| `.sepia-3` | `.hover-sepia-3`|
|backdrop-blur-{0-10}| `.backdrop-blur-3` | `.hover-backdrop-blur-3`|
|opacity-{0-10}| `.opacity-3` | `.hover-opacity-3`|

## License

MIT
