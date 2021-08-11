//줄 바꿈을 포함하여 쓰고싶다면 ``백틱으로 감싼다

const str = 
`
010-1234-1234
ugo04@gmai.com
https://www.omdbapi.com/?apikey=f1ab98ec&s=parasite
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

//생성자 함수를 통해서 생성
//const regexp = new RegExp('the','g')

//리터럴 방식 정규표현식
// \ 일반문자로 해석시킴(escape)
// . 어떤 문자도 허용
// $ 끝부분을 지칭함
// m 줄마다 검색 (multiline)

// h 로 시작하고 p 로 끝나는 4글자 찾음
const regexp = /h..p/g

//fox 또는 dog를 찾고 둘중에 먼저 찾아지는 것만 반환 
const regexp2 = /fox|dog/

//s가 없을 수도 있고 있을 수도 있다.
const regexp3 = /https?/g

//d가 2개 연속 일치하는 것을 반환
const regexp4 = /d{2}/g

//d가 2개 이상 인것을 반환
const regexp5 = /d{2,}/g

//d가 2개 이상 3개 이하인 것을 반환

//\w <- 숫자를 포함한 영어알파벳을 의미
const regexp6 = /\w{2,3}/g

// \b 특수문자를 의미함 
// 아래는 특수문자가 앞뒤로 붙기떄문에 결국
// 영어나 숫자로만 3글자인 단어만  반환
const regexp7 = /\b\w{2,3}\b/g

//f또는 o 또는 x를 찾음
const regexp8 = /[fox]/g

//전역에서 숫자가 1개 이상으로 연속되는 것을 찾음
const regexp9 = /[0-9]{1,}/g


//1개이상 연속되는 한글 찾음
const regexp10 = /[가-힣]{1,}/g

//영어 , 숫자 , _
const regexp11 = /\w/g

//소문자 f로 시작하는 모든 문자를 리턴
const regexp12 = /\bf\w{1,}\b/g

//숫자3개연속
const regexp13 = /\d{3,}/g

//공백문자  리턴
const regexp14 = /\s/g

//@앞의 1개이상 모든문자를 출력
const regexp15 = /.{1,}(?=@)/g

const regexp16 = /(?<=@).{1,}/g


const h = `  hi there wow !
`

//정규식 메서드

//정규식에 맞는데이터가 존재하는지 확인(boolean 반환)
//console.log(regexp.test(str));

//데이터 대채 원본 변경 X
//console.log(str.replace(regexp,'AAA'))

console.log(h.replace(regexp14,''))

console.log(str.match(regexp16))