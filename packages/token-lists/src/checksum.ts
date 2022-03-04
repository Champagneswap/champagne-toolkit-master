import fs from "fs";
import path from "path";
import { getAddress } from "@ethersproject/address";
import champagneswapDefault from "./tokens/champagneswap-default.json";
import champagneswapExtended from "./tokens/champagneswap-extended.json";
import champagneswapTop100 from "./tokens/champagneswap-top-100.json";
import champagneswapTop15 from "./tokens/champagneswap-top-15.json";

const lists = {
  "champagneswap-default": champagneswapDefault,
  "champagneswap-extended": champagneswapExtended,
  "champagneswap-top-100": champagneswapTop100,
  "champagneswap-top-15": champagneswapTop15
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
