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

style 사용하기 위해서 아래의 **css 파일을 import**하고, <Calendar />의 **height를 지정**해야한다.

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

### `3` defaultDate

**default** 날짜를 설정한다.

```tsx
<Calendar
	**defaultDate={new Date(2022, 1, 10)}** // 2022년 1월 10일
****/>
```

**사용법**

`**new Date()**` 함수를 이용하여 날짜를 설정한다.

[Date() 생성자](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date/Date)

### `3.1` date

**current** 날짜를 설정한다.

### `3.2` onNavigate

date 값이 변할 때마다 실행되는 callback 함수이다.

### `3.3` getNow

**current date, time** 을 결정한다.

hightlight 된다.

### `4` events

**일정** 객체를 담은 배열을 가진다.

### `4.1` titleAccessor

일정 **제목**에 대한 Accessor 이다.

### `4.2` startAccessor / endAccessor

**startAccessor** 는 일정이 **시작하는 날짜**에 대한 Accessor 이다.

**endAccessor** 는 일정이 **끝나는 날짜**에 대한 Accessor 이다.

### `4.3` allDayAccessor

일정이 **하루 종일 지속**되는 일정인지 결정하는 Accessor 이다.

```tsx
const MyEventList = [
	{
    **allDay**: true, // boolean

		...
  },

	...
]

return (
	<div>
    <Calendar
      **allDayAccessor="allDay"**
			
			...
    />
  </div>
);
```

### `4.4` tooltipAccessor

일정에 **커서를 올리면** 뜨는 **tooltip**(도움말)에 대한 Accessor 이다.

**events** 내 객체에 있는 **`key`** 를 속성으로 가질 수 있다.

```tsx
const MyEventList = [
	{
		**title**: "All Day Event very long title",
    **allDay**: true,
    **start**: new Date(2022, 1, 0),
    **end**: new Date(2022, 1, 1),
  },

	...
]

return (
	<div>
    <Calendar
      **tooltipAccessor="title"** // title, allDay, start, end 선택
			
			...
    />
  </div>
);
```

### `5` resources

일정을 특정한 resource로 map하는 resource objects 배열이다.

resource objects는 어떤 shape와 Properties를 가질 수 있으나,

“**title**” 또는 `**resourceTitleAccessor**` 에 의해 제공받은 **name** 과 같은 `**resourceIdAccessor**` 로 **고유하게 식별**되어야 한다.

### `5.1` resourceAccessor

resource 의 **id**를 반환하는 Accessor 이다.

### `5.2` resourceIdAccessor

resources 배열에서 각각의 resource 에 대하여 **고유 식별자를 제공**한다.

### `5.3` resourceTitleAccessor

각각의 resource 에 대하여 human readable name을 제공한다.

이때 name은 header에 사용된다.

### `6` selected

선택된 **event** 이다.

### `6.1` onSelectEvent

event 가 **선택**(클릭)될 때 실행되는 callback 함수이다.

### `6.2` onDoubleClickEvent

event 가 **더블클릭**될 때 실행되는 callback 함수이다.

### `6.3` selectable

**date** 을 **drag** 할 수 있게 한다.

### `6.4` onSelectSlot

**date** 를 **drag** 했을 때 실행되는 callback 함수이다.

**selectable**이 `**true**`일 때만 실행된다.

```tsx
<div>
	<Calendar
	  **selectable**
    **onSelectSlot** = { ( { start, end } ) => {
    console.log( "Selected", start, end );
    }}
  />
</div>

// expected result
Selected Tue Feb 08 2022 01:00:00 GMT+0900 (Korean Standard Time) 
Tue Feb 08 2022 08:00:00 GMT+0900 (Korean Standard Time)
```

### `6.5` onSelecting

**time** 을 **drag** 했을 때 실행되는 함수이다.

**month** 에서 실행되지 않는다.

`**false**`를 반환하면 선택이 막힌다.

### `6.6` longPressThreshold

**longPress** 의 문턱을 밀리초로 받는다.

**default** 는 `**250**` 이다.

**longPressThreshold** 는 **`touch device`** 에서 slot 을 선택할 때 쓰인다.

### `6.7` min / max

**min** 은 week 과 day 에서 최소 time 을 제한한다

**max** 은 week 과 day 에서 최대 time 을 제한한다

### `6.8` step

week 과 day view 에서 선택할 수 있는 time 증분을 결정한다.

```tsx
return (
	<div>
    <Calendar
	      **step={60}** // 60분 범위로 선택할 수 있음
			
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

**date header** 또는 **`생략된 일정 link`**를 클릭했을 때마다 실행되는 callback 함수이다.

*drill down : 더 많은 정보를 찾기 위해 관련 텍스트나 아이콘 등을 클릭하여 마치 뚫고 들어가듯이 검색하는 것

### `7.4` drilldownView

drilldown action에 대하여 **이동할 view의 name** 이다.

**getDrilldownView** 가 특정되면 getDrilldownView 가 쓰인다.

```tsx
<Calendar
	...

  **drilldownView="agenda"**
/>
```

### `7.5` getDrilldownView

기능적으로 **drilldownView** 와 동등하다.

차이점은 view name을 반환하는 **`함수`**를 받는다는 것이다.

```tsx
<Calendar
  **getDrilldownView**={(targetDate, currentViewName, configuredViewNames) =>
    if (currentViewName === 'month' && configuredViewNames.includes('week'))
      return 'week'

    return null;
  }}
/>
```
