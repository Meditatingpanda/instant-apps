import AddressPincodes from "@felvin-community/address-pincodes";
import AsciiArt from "@felvin-community/ascii-art";
import Bmiconverter from "@felvin-community/bmiconverter";
import bouncyBall from "@felvin-community/bouncy-ball";
import capitals from "@felvin-community/capitals";
import CodeReference from "@felvin-community/code-reference";
import ColorPicker from "@felvin-community/color-picker";
import CompetitiveContestApp from "@felvin-community/competitive-contest-app";
import Compressify from "@felvin-community/compressify";
import Constants from "@felvin-community/constants";

import ConvertToRoman from "@felvin-community/convert-to-roman";
import CourierTracker from "@felvin-community/courier-tracker";
import CronParser from "@felvin-community/cron-parser";
import CropImage from "@felvin-community/crop-image";
import Crypto from "@felvin-community/crypto";
import csvToJson from "@felvin-community/csv-to-json";
import currencyConvertor from "@felvin-community/currency-convertor";
import DiceRoller from "@felvin-community/dice-roller";
import Dictionary from "@felvin-community/dictionary";

const allApps = [
  AddressPincodes,
  AsciiArt,
  Bmiconverter,
  bouncyBall,
  capitals,      //cycle-one
  CodeReference,
  ColorPicker,
  CompetitiveContestApp,
  Compressify,
  Constants,

  ConvertToRoman,
  CourierTracker,
  CronParser,
  CropImage,
  Crypto,
  csvToJson,
  currencyConvertor,
  DiceRoller,
  Dictionary,
];

export default allApps;

export const appDetails = allApps.map(
  ({ id, name, description, screenshotPath, exampleSearchQueries }) => {
    const details = {
      id,
      name,
      description,
      screenshotPath,
      exampleSearchQueries,
    };
    details.screenshotPath =
      "https://raw.githubusercontent.com/felvin-search/instant-apps/master/apps/" +
      id.split("/")[1] +
      "/src" +
      screenshotPath?.substring(1);
    return details;
  }
);
