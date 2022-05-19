# Welcome My React big calendar Challenge!
React big Calendar 공식 문서에 있는 모든 APIs를 써보고 정리해보자!

## React Big Calendar
**react-big-calendar** 는 React와 최신 브라우저용으로 제작된 이벤트 일정관리 컴포넌트이다.
**react-big-calendar** 는 `flexbox` 를 사용한다.

### Destination
![Screen Shot 2022-02-09 at 8 48 04 PM](https://user-images.githubusercontent.com/88179771/169414476-83e1fa68-332f-4226-a1cc-8f9631a6713e.png)

### `1` 설치
```tsx
yarn add react-big-calendar
yarn add moment // localizer 설치
```

### `2` style

style 사용하기 위해서 아래의 **css 파일을 import**하고, <Calendar>의 **height를 지정**해야한다.

```tsx
import "react-big-calendar/lib/css/react-big-calendar.css";

const MyCalendar = () => {
	...

  return (
    <div>
      <Calendar
        ...

        **style={{ height: 500 }}**
      />
    </div>
  );
};
```

### `3` 진행 상황

![Screen Shot 2022-02-10 at 9 49 31 PM](https://user-images.githubusercontent.com/88179771/169414972-4bb893f5-f179-42ba-975a-b2d0a1ef3a8e.png)

```tsx
import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const MyCalendar = () => {
  moment.locale("ko-KR");
  const localizer = momentLocalizer(moment);

  return (
    <div>
      <Calendar
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default MyCalendar;
```
	
## API Props
### `1` localizer

국가 코드를 토대로 date format 을 설정한다.

```tsx
...
// import momentLocalizer, moment
import { Calendar, **momentLocalizer** } from "react-big-calendar";
import **moment** from "moment";

const MyCalendar = () => {

  **moment.locale("ko-KR");** // *국가 코드
  **const localizer = momentLocalizer(moment); //** date format 지정

  return (
    <div>
      <Calendar
	...
	localizer={localizer}  // localizer 추가
      />
    </div>
  );
};

export default MyCalendar;
```

**사용법**

1. moment를 인자로 받는 momentLocalizer를 생성한다.
2. <Calendar /> 컴포넌트의 localizer 속성에 생성한 momentLocalizer를 적용한다.
 [moment.locale 국가 코드](https://github.com/moment/moment/tree/develop/locale)

### `2` defaultView

보기 단위의 **default** 를 설정한다.

defaultView 속성에는 `**agenda**` , `**day**` , `**month**` , `**week**` , `**work_week**` 값을 넣을 수 있다.

ex ) **agenda**
![Screen Shot 2022-02-10 at 1 30 48 PM](https://user-images.githubusercontent.com/88179771/169415432-2ddba486-1335-406e-a10f-c395960d3111.png)
### `2.1` view

**current** 보기 단위를 설정한다.

### `2.2` onView

view 값이 변할 때마다 실행되는 callback 함수이다.

### `2.3` views

일정을 보여주는 view 의 name 을 배열로 받는다.

```tsx
views={['month', 'day', 'agenda']}
```
