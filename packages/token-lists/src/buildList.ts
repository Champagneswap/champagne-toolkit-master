import fs from "fs";
import path from "path";
import { TokenList } from "@uniswap/token-lists";
import { version as champagneDefaultVersion } from "../lists/champagne-default.json";
import { version as champagneExtendedVersion } from "../lists/champagne-extended.json";
import { version as champagneTop15Version } from "../lists/champagne-top-15.json";
import { version as champagneTop100Version } from "../lists/champagne-top-100.json";
import { version as coingeckoVersion } from "../lists/coingecko.json";
import { version as cmcVersion } from "../lists/cmc.json";
import { version as champagneMiniVersion } from "../lists/champagne-mini.json";
import { version as champagneMiniExtendedVersion } from "../lists/champagne-mini-extended.json";
import champagneDefault from "./tokens/champagne-default.json";
import champagneExtended from "./tokens/champagne-extended.json";
import champagneTop100 from "./tokens/champagne-top-100.json";
import champagneTop15 from "./tokens/champagne-top-15.json";
import coingecko from "./tokens/coingecko.json";
import cmc from "./tokens/cmc.json";
import champagneMini from "./tokens/champagne-mini.json";
import champagneMiniExtended from "./tokens/champagne-mini-extended.json";

export enum VersionBump {
  "major" = "major",
  "minor" = "minor",
  "patch" = "patch",
}

type Version = {
  major: number;
  minor: number;
  patch: number;
};

const lists = {
  "champagne-default": {
    list: champagneDefault,
    name: "Champagne Default",
    keywords: ["champagne", "default"],
    logoURI: "https://champagne.finance/logo.png",
    sort: false,
    currentVersion: champagneDefaultVersion,
  },
  "champagne-extended": {
    list: champagneExtended,
    name: "Champagne Extended",
    keywords: ["champagne", "extended"],
    logoURI: "https://champagne.finance/logo.png",
    sort: true,
    currentVersion: champagneExtendedVersion,
  },
  "champagne-top-100": {
    list: champagneTop100,
    name: "Champagne Top 100",
    keywords: ["champagne", "top 100"],
    logoURI: "https://champagne.finance/logo.png",
    sort: true,
    currentVersion: champagneTop100Version,
  },
  "champagne-top-15": {
    list: champagneTop15,
    name: "Champagne Top 15",
    keywords: ["champagne", "top 15"],
    logoURI: "https://champagne.finance/logo.png",
    sort: true,
    currentVersion: champagneTop15Version,
  },
  coingecko: {
    list: coingecko,
    name: "CoinGecko",
    keywords: ["defi"],
    logoURI:
      "https://www.coingecko.com/assets/thumbnail-007177f3eca19695592f0b8b0eabbdae282b54154e1be912285c9034ea6cbaf2.png",
    sort: true,
    currentVersion: coingeckoVersion,
  },
  cmc: {
    list: cmc,
    name: "CoinMarketCap",
    keywords: ["defi"],
    logoURI: "https://ipfs.io/ipfs/QmQAGtNJ2rSGpnP6dh6PPKNSmZL8RTZXmgFwgTdy5Nz5mx",
    sort: true,
    currentVersion: cmcVersion,
  },
  "champagne-mini": {
    list: champagneMini,
    name: "Champagne Mini",
    keywords: ["champagne", "binance", "mini program", "mini"],
    logoURI: "https://champagne.finance/logo.png",
    sort: true,
    currentVersion: champagneMiniVersion,
  },
  "champagne-mini-extended": {
    list: champagneMiniExtended,
    name: "Champagne Mini Ext",
    keywords: ["champagne", "binance", "mini program", "mini", "extended"],
    logoURI: "https://champagne.finance/logo.png",
    sort: true,
    currentVersion: champagneMiniExtendedVersion,
  },
};

const getNextVersion = (currentVersion: Version, versionBump?: VersionBump) => {
  const { major, minor, patch } = currentVersion;
  switch (versionBump) {
    case VersionBump.major:
      return { major: major + 1, minor, patch };
    case VersionBump.minor:
      return { major, minor: minor + 1, patch };
    case VersionBump.patch:
    default:
      return { major, minor, patch: patch + 1 };
  }
};

export const buildList = (listName: string, versionBump?: VersionBump): TokenList => {
  const { list, name, keywords, logoURI, sort, currentVersion } = lists[listName];
  const version = getNextVersion(currentVersion, versionBump);
  return {
    name,
    timestamp: new Date().toISOString(),
    version,
    logoURI,
    keywords,
    // sort them by symbol for easy readability (not applied to default list)
    tokens: sort
      ? list.sort((t1, t2) => {
          if (t1.chainId === t2.chainId) {
            // CHAM first in extended list
            if ((t1.symbol === "CHAM") !== (t2.symbol === "CHAM")) {
              return t1.symbol === "CHAM" ? -1 : 1;
            }
            return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
          }
          return t1.chainId < t2.chainId ? -1 : 1;
        })
      : list,
  };
};

export const saveList = (tokenList: TokenList, listName: string): void => {
  const tokenListPath = `${path.resolve()}/lists/${listName}.json`;
  const stringifiedList = JSON.stringify(tokenList, null, 2);
  fs.writeFileSync(tokenListPath, stringifiedList);
  console.info("Token list saved to ", tokenListPath);
};
