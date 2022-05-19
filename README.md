# Welcome My React big calendar Challenge!

React big Calendar 공식 문서에 있는 모든 APIs를 써보고 정리해보자!

<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"/> <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"/> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"/> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"/> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/>


## React Big Calendar

React Big Calendar는 React와 최신 브라우저용으로 제작된 이벤트 일정관리 컴포넌트이다.

### Destination

![Screen Shot 2022-02-09 at 8 48 04 PM](https://user-images.githubusercontent.com/88179771/169414476-83e1fa68-332f-4226-a1cc-8f9631a6713e.png)

### `1` 설치

```tsx
yarn add react-big-calendar
yarn add moment // localizer 설치
```

### `2` style

style 사용하기 위해서 아래의 **css 파일을 import**하고 Calendar component의 **height를 지정**해야한다.

```tsx
import "react-big-calendar/lib/css/react-big-calendar.css";

const MyCalendar = () => {
  ...
  return (
    <div>
      <Calendar
        ...
        style={{ height: 500 }}
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
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

const MyCalendar = () => {

  moment.locale("ko-KR"); // *국가 코드
  const localizer = momentLocalizer(moment); // date format 지정

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

2. Calendar 컴포넌트의 localizer 속성에 생성한 momentLocalizer를 적용한다.

[moment.locale 국가 코드](https://github.com/moment/moment/tree/develop/locale)

### `2` defaultView

보기 단위의 **default**를 설정한다.

defaultView 속성에는 `agenda` , `day` , `month` , `week` , `work_week` 값을 넣을 수 있다.

예 ) agenda
![Screen Shot 2022-02-10 at 1 30 48 PM](https://user-images.githubusercontent.com/88179771/169415432-2ddba486-1335-406e-a10f-c395960d3111.png)

### `2.1` view

**current** 보기 단위를 설정한다.

### `2.2` onView

view 값이 변할 때마다 실행되는 callback 함수이다.

### `2.3` views

일정을 보여주는 view의 name을 배열로 받는다.

```tsx
views={['month', 'day', 'agenda']}
```

### `3` defaultDate

**default** 날짜를 설정한다.

```tsx
<Calendar
  defaultDate={new Date(2022, 1, 10)} // 2022년 1월 10일
/>
```

**사용법**

`new Date()` 함수를 이용하여 날짜를 설정한다.

[Date() 생성자](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date/Date)

### `3.1` date

**current** 날짜를 설정한다.

### `3.2` onNavigate

date 값이 변할 때마다 실행되는 callback 함수이다.

### `3.3` getNow

**current date, time**을 결정한다.

해당 날짜에 hightlight가 된다.

### `4` events

**일정** 객체를 담은 배열을 가진다.

### `4.1` titleAccessor

일정 **제목**에 대한 Accessor이다.

### `4.2` startAccessor / endAccessor

**startAccessor** 는 일정이 **시작하는 날짜**에 대한 Accessor이다.

**endAccessor** 는 일정이 **끝나는 날짜**에 대한 Accessor이다.

### `4.3` allDayAccessor

일정이 **하루 종일 지속**되는 일정인지 결정하는 Accessor이다.

```tsx
const MyEventList = [
  {
    allDay: true, // boolean
    ...
  },
  ...
]

return (
  <div>
    <Calendar
      allDayAccessor="allDay"	
      ...
    />
  </div>
);
```

### `4.4` tooltipAccessor

일정에 커서를 올리면 생기는 **tooltip**(도움말)에 대한 Accessor이다.

**events** 내 객체에 있는 `key`를 속성으로 가질 수 있다.

```tsx
const MyEventList = [
  {
    title: "All Day Event very long title",
    allDay: true,
    start: new Date(2022, 1, 0),
    end: new Date(2022, 1, 1),
  },
  ...
]

return (
  <div>
    <Calendar
      tooltipAccessor="title" // title, allDay, start, end 선택
      ...
    />
  </div>
);
```

### `5` resources

일정을 특정한 resource로 map하는 resource objects 배열이다.

resource objects는 어떤 shape와 Properties를 가질 수 있으나,

“**title**” 또는 `resourceTitleAccessor`에 의해 제공받은 **name**과 같은`resourceIdAccessor`로 **고유하게 식별**되어야 한다.

### `5.1` resourceAccessor

resource의 **id**를 반환하는 Accessor이다.

### `5.2` resourceIdAccessor

resources 배열에서 각각의 resource에 대하여 **고유 식별자를 제공**한다.

### `5.3` resourceTitleAccessor

각각의 resource에 대하여 human readable name을 제공한다.

이때 name은 header에 사용된다.

### `6` selected

선택된 **event**이다.

### `6.1` onSelectEvent

event 가 **선택**(클릭)될 때 실행되는 callback 함수이다.

### `6.2` onDoubleClickEvent

event가 **더블클릭**될 때 실행되는 callback 함수이다.

### `6.3` selectable

**date**을 **drag**할 수 있게 한다.

### `6.4` onSelectSlot

**date**를 **drag**했을 때 실행되는 callback 함수이다.

**selectable**이 `true`일 때만 실행된다.

```tsx
<div>
  <Calendar
    selectable
    onSelectSlot = { ( { start, end } ) => {
      console.log( "Selected", start, end );
    }}
  />
</div>

// expected result
Selected Tue Feb 08 2022 01:00:00 GMT+0900 (Korean Standard Time) 
Tue Feb 08 2022 08:00:00 GMT+0900 (Korean Standard Time)
```

### `6.5` onSelecting

**time**을 **drag**했을 때 실행되는 함수이다.

**month**에서 실행되지 않는다.

`false`를 반환하면 선택이 막힌다.

### `6.6` longPressThreshold

**longPress**의 문턱을 밀리초로 받는다.

**default**는 `250` 이다.

**longPressThreshold**는 `touch device`에서 slot을 선택할 때 쓰인다.

### `6.7` min / max

**min**은 week과 day에서 최소 time을 제한한다.

**max**은 week과 day에서 최대 time을 제한한다.

### `6.8` step

week과 day view에서 선택할 수 있는 time 증분을 결정한다.

```tsx
return (
  <div>
    <Calendar
      step={60}** // 60분 범위로 선택할 수 있음
      ...
    />
  </div>
);
```

### `6.9` timeslots

step은 timeslot 1칸이 차지하는 시간이다.

timeslot은 time group을 만드는 slot의 개수이다.

```tsx
step={30} timeslots={1}
```

![Screen Shot 2022-02-10 at 6 33 58 PM](https://user-images.githubusercontent.com/88179771/169416125-326a8036-34f6-4211-8149-50af180a543b.png)

```tsx
step={60} timeslots={2}
```

![Screen Shot 2022-02-10 at 6 36 00 PM](https://user-images.githubusercontent.com/88179771/169416149-707c22c1-7cb8-4cfa-ab34-9206f5485310.png)

### `7.1` popup

“**+ n more**” link를 누르면 생략된 일정을 보여준다.

![Screen Shot 2022-02-10 at 7 12 22 PM](https://user-images.githubusercontent.com/88179771/169416258-c35e36c0-8a1a-4de3-948b-32ada5693dd0.png)

### `7.2` popupOffset

viewport의 모서리에서부터 떨어진 **px** 이다.

### `7.3` onDrillDown

**date header** 또는 `생략된 일정 link`를 클릭했을 때마다 실행되는 callback 함수이다.

*drill down : 더 많은 정보를 찾기 위해 관련 텍스트나 아이콘 등을 클릭하여 마치 뚫고 들어가듯이 검색하는 것

### `7.4` drilldownView

drilldown action에 대하여 **이동할 view의 name**이다.

**getDrilldownView**가 특정되면 getDrilldownView가 쓰인다.

```tsx
<Calendar
  ...
  drilldownView="agenda"
/>
```

### `7.5` getDrilldownView

기능적으로 **drilldownView**와 동등하다.

차이점은 view name을 반환하는 `함수`를 받는다는 것이다.

```tsx
<Calendar
  getDrilldownView**={(targetDate, currentViewName, configuredViewNames) =>
    if (currentViewName === 'month' && configuredViewNames.includes('week'))
      return 'week'
    return null;
  }}
/>
```

## Other API Props

### onRangeChange

calendar에 나타나는 date 범위가 달라졌을 때 실행되는 callback 함수이다.

**start**와 **end**를 가진 객체 또는 배열을 반환한다.

### length

agenda view의 date prop으로부터 **length**(number of days)를 더하여 end date prop을 결정한다.

### toolbar

toolbar의 display 여부를 지정한다.

![Screen Shot 2022-02-10 at 3 29 37 PM](https://user-images.githubusercontent.com/88179771/169416442-adce1d28-f94d-4e5a-b804-a4f0661e399a.png)

### rtl

calender를 **오른쪽에서 왼쪽**(right-to-left)방향으로 읽는다.

![Screen Shot 2022-02-10 at 7 21 32 PM](https://user-images.githubusercontent.com/88179771/169416531-e482f236-beb7-4f05-b7cc-e567c4d6156b.png)

### eventPropGetter

event node에 적용될 `className`과 `style props`의 객체를 리턴하는 **함수를 선택적으로 제공**한다.

```tsx
(
  event: Object,
  start: Date,
  end: Date,
  isSelected: boolean
) => { className?: string, style?: Object }
```

### slotPropGetter

time-slot node에 적용된다.

! layout이나 position을 바꾸면 calendar가 깨진다.

```tsx
(date: Date) => { className?: string, style?: Object }
```

### dayPropGetter

day background에 적용된다.

그 외 **slotPropgetter**과 동일한 특성을 갖는다.

### showMultiDayTimes

showMultiDayTimes는 일정이 다른 날까지 이어지는 event에 한하여 구체적인 start time과 end time을 calendar에 반영한다.

![Screen Shot 2022-02-10 at 8 34 23 PM](https://user-images.githubusercontent.com/88179771/169416677-1d018892-b86b-4d21-9613-36565d51f41e.png)

![Screen Shot 2022-02-10 at 8 33 40 PM](https://user-images.githubusercontent.com/88179771/169416688-e72f3e2d-dd5d-4b7e-80db-3494b73da8d3.png)

```tsx
<Calendar
  ...
  showMultiDayTimes={true}
/>
```
**주의!**

일정이 하루 내에 이뤄지는 날에는 영향을 주지 않는다.

![Screen Shot 2022-02-10 at 8 36 53 PM](https://user-images.githubusercontent.com/88179771/169416792-12cbb2e7-1ef7-443a-a1c7-0e3363fa4e38.png)

### scrollToTime

처음 scroll down되기 위해 내려야 할 pane의 정도를 결정한다.

### culture

calendar에 구체적인 **culture code**를 명시한다.

### formats

calendar에게 어떻게 포맷하고 date를 보여주는 지 전달한다.

[formats](https://www.notion.so/formats-2d88c047928e4ef99d69cbcee5cc3073)

### components

component를 custom하여 calendar section의 rendering 방법을 바꾼다.

Event component가 전체 calender에서 명시가능하기 때문에 각 view type마다 다른 component을 제공할 수 있다.

```tsx
let components = {
  event: MyEvent, // used by each view (Month, Day, Week)
  toolbar: MyToolbar,
  agenda: {
     event: MyAgendaEvent // with the agenda view use a different component to render events
  }
}
...

<Calendar components={components} />
```

### messages

localization하기 위해 컴포넌트에서 쓰는 문자를  재정의하는 속성이다.

### elementprops

main calendar의 `<div>`에 적용되는 Props이다.

##  More References

공식 문서에 있는 내용은 다 써보고 정리를 했지만 이 외에도 더 다양한 기능들이 있는 것을 발견했다!
아래 링크 참고

`1` [About_resizableProps](https://codesandbox.io/s/m5vr0wq5ox?file=/src/index.js)
`2` [All Drag and Drops Props](https://jquense.github.io/react-big-calendar/examples/index.html?path=/story/addons-drag-and-drop-props-full-prop-list--page)
