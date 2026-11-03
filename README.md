# (주)새암이앤씨 홈페이지

회사 홈페이지 [saeamenc.co.kr](https://saeamenc.co.kr) 의 소스입니다.
GitHub Pages로 운영되며, `main` 브랜치에 올리면 1~2분 뒤 실제 사이트에 반영됩니다.

## 폴더 구성

```
saeamenc-website/
├── index.html      # 페이지 전체 (한 페이지 구성)
├── css/style.css   # 디자인(색상·글꼴·배치)
├── js/main.js      # 메뉴, 스크롤 동작
├── images/         # 로고, 대표이사 사진, 사업분야 사진, 파비콘
├── CNAME           # 도메인 설정 (saeamenc.co.kr) — 수정 금지
└── navered*.html   # 네이버 사이트 소유확인 파일 — 수정·삭제 금지
```

## 페이지 구성 (index.html 안의 순서)

| 영역 | id | 내용 |
|---|---|---|
| 첫 화면 | — | 슬로건, 사업분야 바로가기 |
| 회사소개 | `#company` | 대표 인사말·사진, 주요 수치, 회사 개요, 조직, 임원, 면허·등록현황 |
| 사업분야 | `#business` | 6개 분야 카드 |
| 수행실적 | `#projects` | 프로젝트 표 (구분·사업명·발주처·분야·과업기간·비고) |
| 연혁 | `#history` | 연도별 타임라인 |
| 새암소식 | `#news` | 공지·소식 |
| 오시는 길 | `#contact` | 주소·연락처·지도 |

## 자주 하는 수정

- **수행실적 추가**: `#projects` 표에 행 추가. 과업기간이 지난 건은 비고에 `<span class="done">완료</span>`.
- **연혁 추가**: `#history` 의 해당 연도 목록에 최신순으로 추가.
- **면허·등록 추가**: `#company` 의 면허·등록현황 목록에 추가하고, 주요 수치의 "보유 면허·등록" 건수도 함께 맞추기.
- **임원·조직 변경**: `#company` 의 `.exec-card`, `.org` 부분.

## 미리보기 (내 컴퓨터에서 확인)

```bash
python3 -m http.server 8765
```

브라우저에서 http://localhost:8765 를 열면 됩니다.

## 올리기 (실제 사이트 반영)

```bash
git add -A && git commit -m "수정 내용" && git push
```

GitHub 로그인은 `gh auth login` 으로 이 컴퓨터에 한 번 해 두었습니다.
