export default function format(text) {
  let italicText = text.replace(/"(.*?)"/g, `<i>"$1"</i>`);
  let strongText = italicText.replace(/%(.*?)%/g, `<strong>$1</strong>`);
  let underline = strongText.replace(/£(.*?)£/g, `<u>$1</u>`);
  let goRed = underline.replace(/@(.*?)@/g, `<span class="red">$1</span>`);
  let rightText = goRed.replace(/#(.*?)#/g, `<del>$1</del>`);

  let textFormat = rightText;

  return textFormat;
}
