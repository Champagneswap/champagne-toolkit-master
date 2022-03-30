import fs from "fs";
import path from "path";
import { TokenList } from "@uniswap/token-lists";
import { version as champagneswapDefaultVersion } from "../lists/champagneswap-default.json";
import { version as champagneswapExtendedVersion } from "../lists/champagneswap-extended.json";
import { version as champagneswapTop15Version } from "../lists/champagneswap-top-15.json";
import { version as champagneswapTop100Version } from "../lists/champagneswap-top-100.json";
import champagneswapDefault from "./tokens/champagneswap-default.json";
import champagneswapExtended from "./tokens/champagneswap-extended.json";
import champagneswapTop100 from "./tokens/champagneswap-top-100.json";
import champagneswapTop15 from "./tokens/champagneswap-top-15.json";

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
  "champagneswap-default": {
    list: champagneswapDefault,
    name: "ChampagneSwap Default",
    keywords: ["champagneswap", "default"],
    logoURI:
      "https://tokens.champagneswap.com/images/0x4957c1c073557BFf33C01A7cA1436D0d2409d439.png",
    sort: false,
    currentVersion: champagneswapDefaultVersion,
  },
  "champagneswap-extended": {
    list: champagneswapExtended,
    name: "ChampagneSwap Extended",
    keywords: ["champagneswap", "extended"],
    logoURI:
      "https://tokens.champagneswap.com/images/0x4957c1c073557BFf33C01A7cA1436D0d2409d439.png",
    sort: true,
    currentVersion: champagneswapExtended,
  },
  "champagneswap-top-100": {
    list: champagneswapTop100,
    name: "ChampagneSwap Top 100",
    keywords: ["champagneswap", "top 100"],
    logoURI:
      "https://tokens.champagneswap.com/images/0x4957c1c073557BFf33C01A7cA1436D0d2409d439.png",
    sort: true,
    currentVersion: champagneswapTop100Version,
  },
  "champagneswap-top-15": {
    list: champagneswapTop15,
    name: "ChampagneSwap Top 15",
    keywords: ["champagneswap", "top 15"],
    logoURI:
      "https://tokens.champagneswap.com/images/0x4957c1c073557BFf33C01A7cA1436D0d2409d439.png",
    sort: true,
    currentVersion: champagneswapTop15Version,
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
