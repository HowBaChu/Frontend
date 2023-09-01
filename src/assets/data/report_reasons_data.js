const reportReasons = [
  { type: "SPAM", title: "스팸 내용", detail: "무의미한 반복 게시물, 광고" },
  { type: "AVERSION", title: "욕설 및 혐오 발언", detail: "타인을 모욕하거나 비하하는 내용" },
  { type: "INAPPROPRIATE_CONTENT", title: "부적절한 내용", detail: "성적, 폭력적 또는 민감한 내용 포함" },
  { type: "PRIVACY_LEAK", title: "개인 정보 유출", detail: "타인의 개인정보를 무단으로 공개한 경우" },
  { type: "FALSEHOOD", title: "사기 또는 허위 정보", detail: "거짓 정보나 사기성 내용 공유" },
  { type: "COPYRIGHT", title: "저작권 침해", detail: "타인의 저작물을 무단 도용한 경우" },
  { type: "ETC", title: "기타", detail: "위 항목에 해당하지 않는 기타 이유 직접 입력" },
];

export default reportReasons;