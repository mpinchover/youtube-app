import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import axios from "axios";

const initialMatchingCandidates = [{}, {}, {}];

export const discoverProfiles = atom({
  key: "discoverProfilesState",
  default: initialMatchingCandidates,
});

export const isLoadingDiscoverProfiles = atom({
  key: "isLoadingDiscoverProfilesState",
  default: false,
});

export const discoverProfilesIdx = atom({
  key: "discoverProfilesIdxState",
  default: 0,
});

export const setNextDiscoverProfileIdx = selector({
  key: "setNextDiscoverProfileIdx",
  get: ({ get }) => {
    return get(candidates);
  },
  set: async ({ get, set }) => {
    const currentProfiles = get(discoverProfiles);

    // if we are not at the last profile yet, just add 1
    if (discoverProfilesIdx < currentProfiles.length - 1) {
      set(discoverProfilesIdx, (prev) => prev + 1);
      return;
    }
    set(isLoadingDiscoverProfiles, true);

    try {
      for (let i = 0; i < 100; i++) {
        await axios.get("https://jsonplaceholder.typicode.com/comments");
      }
      set(discoverProfiles, initialMatchingCandidates);
      set(discoverProfilesIdx, 0);
    } catch (e) {
      set(discoverProfiles, []);
    } finally {
      set(isLoadingDiscoverProfiles, false);
    }
  },
});
