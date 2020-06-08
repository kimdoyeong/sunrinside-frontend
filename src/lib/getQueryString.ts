function getQueryString(obj: any) {
  let strs = [];
  for (const [key, value] of Object.entries(obj)) {
    if (!value) continue;
    strs.push(key + "=" + value);
  }

  return strs.join("&");
}

export default getQueryString;
