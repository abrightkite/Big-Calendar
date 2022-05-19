# Welcome My React big calendar Challenge Repo!
React big Calendar 공식 문서에 있는 모든 APIs를 써보고 정리해보자!

### React Big Calendar
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

![Screen Shot 2022-02-10 at 9.49.31 PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/80d615d6-831f-4dfb-bfac-a737d8d11578/Screen_Shot_2022-02-10_at_9.49.31_PM.png)

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
