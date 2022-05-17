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

import flappyBird from "@felvin-community/flappy-bird";
import FlipACoin from "@felvin-community/flip-a-coin";
import graphPlotter from "@felvin-community/graph-plotter";
import HelloWorldInDifferentLanguages from "@felvin-community/hello-world-in-different-languages";
import HttpStatusCodes from "@felvin-community/http-status-codes";
import ImageUploader from "@felvin-community/image-uploader";
import IpAddress from "@felvin-community/ip-address";
import IsPrime from "@felvin-community/is-prime";
import JokeGenerator from "@felvin-community/joke-generator";


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
  Crypto,      //cycle-two
  csvToJson,
  currencyConvertor,
  DiceRoller,
  Dictionary,
  

  flappyBird,
  FlipACoin,
  graphPlotter,
  HelloWorldInDifferentLanguages,
  HttpStatusCodes,
  ImageUploader,
  IpAddress,
  IsPrime,
  JokeGenerator,
 
  
  
  
 

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
