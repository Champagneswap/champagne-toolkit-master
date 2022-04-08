import fs from "fs";
import path from "path";
import { getAddress } from "@ethersproject/address";
import champagneDefault from "./tokens/champagne-default.json";
import champagneExtended from "./tokens/champagne-extended.json";
import champagneTop100 from "./tokens/champagne-top-100.json";
import champagneTop15 from "./tokens/champagne-top-15.json";
import coingecko from "./tokens/coingecko.json";
import cmc from "./tokens/cmc.json";
import champagneMini from "./tokens/champagne-mini.json";
import champagneMiniExtended from "./tokens/champagne-mini-extended.json";

const lists = {
  "champagne-default": champagneDefault,
  "champagne-extended": champagneExtended,
  "champagne-top-100": champagneTop100,
  "champagne-top-15": champagneTop15,
  "coingecko": coingecko,
  "cmc": cmc,
  "champagne-mini": champagneMini,
  "champagne-mini-extended": champagneMiniExtended,
};

const checksumAddresses = (listName: string): void => {
  let badChecksumCount = 0;
  const listToChecksum = lists[listName];
  const updatedList = listToChecksum.reduce((tokenList, token) => {
    const checksummedAddress = getAddress(token.address);
    if (checksummedAddress !== token.address) {
      badChecksumCount += 1;
      const updatedToken = { ...token, address: checksummedAddress };
      return [...tokenList, updatedToken];
    }
    return [...tokenList, token];
  }, []);

  if (badChecksumCount > 0) {
    console.info(`Found and fixed ${badChecksumCount} non-checksummed addreses`);
    const tokenListPath = `${path.resolve()}/src/tokens/${listName}.json`;
    console.info("Saving updated list to ", tokenListPath);
    const stringifiedList = JSON.stringify(updatedList, null, 2);
    fs.writeFileSync(tokenListPath, stringifiedList);
    console.info("Checksumming done!");
  } else {
    console.info("All addresses are already checksummed");
  }
};

export default checksumAddresses;
