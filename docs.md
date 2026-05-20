# 해당 문서는 작업 노트입니다.


## 섹션 분리
*  목록
> 1. 로고   
> 2. 미선택 목록과 선택 목록  
> 3. 나가기
* 로고창 (대시보드)
> 1. 줄나눔   
> 2. : (더보기) 버튼
* 대시보드 메인 화면   
-> 각 대시보드
> 1. 메인 이미지
> 2. : (더보기) 버튼
> 3. 제목
> 4. 부제목
> 5. 해당 학기
> 6. 공지    
> 6-1. 안 읽은 공지 표시
> 7. 질문 작성
> 8. ai 대화
* 학교 로고
* 알림창   
* 1. 할 일
>1. 작성
>2. 제목
>3. 과목명
>4. 기한
>5. 상세보기
>6. 창 닫기
* 2. 최근 피드백
>1. 확인 버튼
>2. 제목
>3. 과목명
>4. 점수

## 레이아웃
1. 목록(list)
2. 로고창(Maindash)
- `min-w-0`: min-width:0px -> flex 안에서 텍스트가 넘칠 때 레이아웃이 깨지는 걸 방지함
3. 대시보드 메인 화면(Dashboard)
- `overflow-y-auto`: 내용이 세로로 넘칠 때(필요할때: auto) 스크롤 생성
- + overflow-hidden: 넘치는 거 숨김
- + overflow-visible: 그냥 다 보임
- + overflow-y-scroll: 항상 세로 스크롤 표시
- + overflow-y-auto: 필요할 때만 스크롤
4. 학교 로고 & 알림창 (Notification)
```
 <div className="flex>
      <List />

      <div className="flex-1 flex flex-col min-w-0">
        <Maindash />

        <main className="p-8 overflow-y-auto">
          <Dashboard />
        </main>
      </div>
      <div className="w-80 flex flex-col gap-4 p-4">
          <Logo />
          <Notification />
        </div>
    </div>
```
+ 글꼴 정보 :
+ - font-sans- 기본 깔끔한 글꼴
+ - font-serif- 명조체 느낌
+ - font-mono- 코드 글꼴 (고정폭)

### 메인보드
`${form.textColor}` TailwindCSS에서 색을 동적으로 바꿀 때 사용하는 문법 (${})

ㅡㅡㅡ

## tailwindcss 버전 정보: v4이용

# 새롭게  알게 된 점
## aria-label 
- 접근성(accessibility)용 설명, 의미 설명
예시 
```
<button className={styles.moreButton}>
                  <span className="text-2xl leading-none">⋮</span>
                </button>
```
여기서 :가 무슨 버튼인지 모른다.

-> `<button aria-label="More options">`이렇게 수정

## truncate
- Tailwind에서 “글자가 길면 … 처리” 해주는 클래스

## context API
### 1. Context 기본값 안전 처리
기존 `const LanguageContext = createContext();`은 Provider 밖에서 useLanguage() 쓰면 undefined 가능성 있음.
-> `const LanguageContext = createContext(null);` 수정
