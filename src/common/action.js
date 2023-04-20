import { Types } from ".";

export const setLang = (data) => {
  return {
    type: Types.SET_LANG,
    payload: data,
  };
};

export const setLoader = (data) => {
  return {
    type: Types.SET_LOADER,
    payload: data,
  };
};