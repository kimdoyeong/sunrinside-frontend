function parseError(e: any) {
  if (e.response.data) {
    return new Error(e.response.data.message);
  }
  console.error(e);
  return new Error("문제가 발생했습니다. 다시 시도해주세요.");
}

export default parseError;
