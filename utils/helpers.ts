export const scaleInRange = (
  num: number,
  in_min: number,
  in_max: number,
  out_min: number,
  out_max: number
) => ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;


export const hexToRgba = (hexCode: string, opacity: number) => {
    let hex = hexCode.replace('#', '');

    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }

    let r = parseInt(hex.substring(0,2), 16)
    let g = parseInt(hex.substring(2,4), 16)
    let b = parseInt(hex.substring(4,6), 16);
    let a = opacity >1 ? opacity / 100 : opacity;

    return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
  }