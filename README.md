# 정규표현식(RegExp)

정규식 , Regular Expression
#

## 역할
#

- 문자 검색 (search)
- 문자 대체 (replace)
- 문자 추출(extract)


#
## 테스트 사이트 
#
https://regexr.com/

#
## 정규식 생성
#

``` js
//생성자

new RegExp('표현', '옵션')

//ex)a 부터 z 사이에 영어 소문자 를 검색해준다 
//g - 일치하는 모든것 , i - 소문자 대문자 안가림
new RegExp('[a-z]' , 'gi')

//리터럴
/표현/옵션
/[a-z]/gi

```
#
## 정규식 메소드
#
``` js
//

const str = `
    010-1234-1234
    ugo04@gmai.com
    https://www.omdbapi.com/?apikey=f1ab98ec&s=parasite
    The quick brown fox jumps over the lazy dog.
    abbcccdddd
`

```


메소드 | 문법 | 설명 
--|--|--
test | `정규식.test(문자열)` | 일치 여부 boolean 봔환
match | `문자열.match(정규식)` | 일치하는 문자의 배열(Array)반환
replace | `문자열.replace(정규식 , 대체문자)` | 일치하는 문자를 대체

#
## 플래그(옵션)
#
플래그 | 설명
--|--
g | 모든 문자 일치 (global)
i | 영어 대소문자를 구분 하지 않고 일치(ignore case)
m | 여러 줄 일치(multi line)



#
## 패터(표현)
#

패턴 | 설명
--|--
^ab | 줄 시작에 있는 ab와 일치
ab$ | 줄 끝에 있는 ab와 일치
. | 임의의 한 문자와 일치
a &verbar; b | a 또는 b와 일치
ab? | b가 없거나 b와 일치
{3} | 3개 연속 일치 
{3,} | 3개 이상 연속 일치
{3,5} | 3개 이상 5가 이하 (3~5개) 연속 일치
[abc] | a 또는 b또는 c를 찾음
[a-z] | a-z 까지의 모든 소문자를 찾음
[A-Z] | A-Z 까지의 모든 대문자를 찾음
[0-9] | 0부터 9까지
[가-힣] | 한글 찾음
\w | 63개 문자(Word,대소영문52개 ,숫자10개 , _)를 찾음
\b | 63개 문자에 일치하지 않는 문자 경계
\d | 숫자(Digit)에 일치
\s  | 공백(space, tab)에 일치
(?=) | 앞쪽 일치(Lookahead)
(?<=) | 뒤쪽 일치(Lookbehind)