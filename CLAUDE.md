# 새암이앤씨 홈페이지 작업 안내

(주)새암이앤씨 회사 홈페이지(saeamenc.co.kr). 정적 사이트, GitHub Pages(`main` 브랜치 → 자동 배포, CNAME saeamenc.co.kr).
저장소: https://github.com/wook7272/saeamenc-website (사용자 wook7272 소유, 이 컴퓨터에 `gh auth login` 완료).

## 사용자
- 한국어로 대화. 개발자가 아니므로 git·HTML 용어는 풀어서 설명하고, 결과는 "실제 사이트에 반영됐다/안 됐다"처럼 알려 준다.
- 수정 요청은 보통 내용 변경(실적·연혁·면허·임원). 내용 출처는 회사소개서(Google Drive `00_회사소개서` 폴더)와 사용자 메시지.

## 구조
- 단일 페이지 `index.html` + `css/style.css` + `js/main.js` + `images/`. 빌드 없음.
- 섹션 id: `#company`(회사소개: 대표 인사말, `.stats`, `.company-facts`, `.org`, `.exec-card`, `.license-grid`), `#business`(6 카드), `#projects`(`.project-table`), `#history`(타임라인), `#news`, `#contact`.
- 디자인 토큰은 `style.css` 의 `:root` (`--navy #143a73`, `--blue #1a5fb4`, `--orange #f58220` 등, 로고 색 기준). 글꼴 Pretendard(jsdelivr CDN). 반응형 기준 1024px / 768px.
- `CNAME`, `navered*.html`(네이버 소유확인)은 건드리지 않는다.

## 내용 규칙
- 수행실적 표: 구분은 `tag-public`(재정) / `tag-private`(민간). 과업기간 종료월이 오늘보다 이전이면 비고에 `<span class="done">완료</span>`. 진행 중은 비고 비움.
- 연혁은 연도별, 최신이 위. 날짜 형식 `YYYY.MM.DD`.
- 면허·등록 항목을 늘리면 `.stats` 의 "보유 면허·등록" 건수와 `.note`(기준일)도 함께 갱신.
- 기술자 개인의 이전 회사 실적 목록은 싣지 않는다(사용자와 합의).

## 작업 흐름
1. 수정 후 미리보기로 확인: `.claude/launch.json` 의 `site` 서버(python http.server 8765) → 데스크톱(1280)과 모바일(375) 둘 다 본다.
2. 커밋 메시지는 한국어로 짧게. `main` 에 바로 커밋·푸시(사용자가 브랜치 분리를 원하지 않음). 푸시 전에 사용자 확인을 받는다.
3. 푸시 후 1~2분 뒤 https://saeamenc.co.kr 에서 반영 확인. 캐시로 예전 화면이 보일 수 있다고 안내.
