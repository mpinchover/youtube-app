import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

const initialMatchingCandidates = [{}, {}, {}];
export const candidates = atom({
  key: "candidatesState",
  default: initialMatchingCandidates,
});

export const isLoadingCandidates = atom({
  key: "isLoadingCandidatesState",
  default: false,
});

export const matchingCandidates = selector({
  key: "matchingCandidatesState",
  get: ({ get }) => {
    return get(candidates);
  },
  set: ({ get, set }) => {},
});
