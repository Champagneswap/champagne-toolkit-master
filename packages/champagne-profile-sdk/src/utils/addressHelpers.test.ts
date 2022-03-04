import addresses from "../constants/contracts";
import { MAINNET_CHAIN_ID, TESTNET_CHAIN_ID } from "../constants/common";
import { getChampagneProfileAddress } from "./addressHelpers";

describe("addressHelpers", () => {
  it("getAddress returns correct mainnet address", () => {
    const profileAddress = getChampagneProfileAddress(MAINNET_CHAIN_ID);
    expect(profileAddress).toBe(addresses.champagneProfile[MAINNET_CHAIN_ID]);
  });
  it("getAddress returns correct testnet address", () => {
    const profileAddress = getChampagneProfileAddress(TESTNET_CHAIN_ID);
    expect(profileAddress).toBe(addresses.champagneProfile[TESTNET_CHAIN_ID]);
  });
});
