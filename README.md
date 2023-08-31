# Convert Vimeo's .vtt Closed Caption Files to a Human-Readable Transcript

Vimeo automatically transcribes your video and creates closed captions for it. You can download the subtitles as a .vtt file, but this isn't useful if you need a human-readable transcript.

Subtitle files are designed to pack as many words onto one or two lines as possible, which often means splitting paragraphs in two. This makes it hard to read.

This page converts Vimeo's .vtt subtitle files to a readable transcript.

## Using The Converter

This converter has been deployed on this page for you to use: https://evolvepreneur.app/page/vimeo-vtt-to-transcript

## How To Obtain The .vtt File

1. Click on your video in Vimeo.
2. Click the "CC" icon on the right.
3. Click on the Captions tab.
4. Click the Download icon to download the .vtt file.

## How To Use This Page

1. Click "Upload Your .vtt Subtitle File" and select the subtitle file you downloaded from Vimeo.
2. Click Convert to Transcript and the transcript will be generated and copied to your clipboard.

## Dependencies

* The `vimeo-vtt-to-transcript.js` script only depends on browsers with support for ES6+ Javascript. Modern browsers like Firefox and Google Chrome are supported.
* The `index.html` page included in this repository uses Bootstrap 5 classes for styling.

## License

`vimeo-vtt-to-transcript.js` is licensed under LGPLv3 or later. See COPYING.LESSER for full license details.

Copyright (C) Evolvepreneur Pty Ltd
