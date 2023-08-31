// Vimeo CC to Transcript Converter
// Copyright (C) 2023 Evolvepreneur Pty Ltd
// 
// This program is free software: you can redistribute it and/or modify it
// under the terms of the Lesser GNU General Public License as published by the
// Free Software Foundation, either version 3 of the License, or (at your
// option) any later version. 
//
// This program is distributed in the hope that it will be useful, but WITHOUT
// ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
// FITNESS FOR A PARTICULAR PURPOSE. See the Lesser GNU General Public License
// for more details. 
//
// You should have received a copy of the Lesser GNU General Public License
// along with this program. If not, see <https://www.gnu.org/licenses/>.
//
// Upload your .vtt subtitle file from Vimeo, click "Convert to Transcript",
// and it will be copied to your clipboard. Use it here:
// https://evolvepreneur.app/page/vimeo-vtt-to-to-transcript

let convertBtn = document.getElementById('convert');
convertBtn.addEventListener('click', convertVimeoVTT);

let resetBtn = document.getElementById('clear-btn');
resetBtn.addEventListener('click', resetPage);

function convertVTT(plainText){
  // Remove lines with only numbers
  const lineNums = /^\d+\n/gm;
  plainText = plainText.replaceAll(lineNums, '');

  // Remove timings and Vimeo filename
  const timecode = /\d\d\:\d\d\:\d\d\.\d\d\d\s-->\s\d\d\:\d\d\:\d\d\.\d\d\d/g;
  const vimeoText = /WEBVTT.*\n/gm;

  plainText = plainText.replaceAll(timecode, '');
  plainText = plainText.replaceAll(vimeoText, '');

  // Tighten up paragraphs
  const doubleNewline = /\n\n/gm;
  const formatting1 = / \n/gm;
  const formatting2 = /\n/gm;

  plainText = plainText.replaceAll(doubleNewline, '');
  plainText = plainText.replaceAll(formatting1, '\n');
  plainText = plainText.replaceAll(formatting2, ' ');

  // Start a New Paragraph When These Characters are Found
  const formatting3 = /\. /g;
  const formatting4 = /\? /g;
  const formatting5 = /\! /g;
  const formatting6 = /\: /g;
  const formatting7 = /\n/gm;

  plainText = plainText.replaceAll(formatting3, '\.\n');
  plainText = plainText.replaceAll(formatting4, '\?\n');
  plainText = plainText.replaceAll(formatting5, '\!\n');
  plainText = plainText.replaceAll(formatting6, '\:\n');
  plainText = plainText.replaceAll(formatting7, '\n\n');

  return plainText;
}

function copyTranscript(plainText){
  navigator.clipboard.writeText(plainText);
}

function convertVimeoVTT(){
  // Read the VTT File
  const fileInput = document.getElementById('vtt-file');
  const file = fileInput.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function(event) {
      const fileContent = event.target.result;
      
      // Convert VTT to Plain Text
      let plainText = convertVTT(fileContent);
      copyTranscript(plainText);
      document.getElementById('transcript').innerHTML = `<pre>${plainText}</pre>`;
    };

    // Read the file as text
    reader.readAsText(file);
  } else {
    alert('Please upload a file before clicking "Convert to Transcript"!');
  }
}

function resetPage(){
  document.getElementById('transcript').innerHTML = '';
  document.getElementById('vtt-file').value = '';
}
