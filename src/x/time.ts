export function display(t) {
  let now = new Date();
  let date = new Date(t * 1000);
  let month = '' + date.getMonth() + 1;
  let year = '' + date.getFullYear();
  let weekday = '' + date.getDay() + 1;
  let day = '' + date.getDate();
  let hours = '' + date.getHours();
  let minutes = '' + date.getMinutes();

  switch (weekday) {
    case '0':
    weekday = '周一';
    break;
    
    case '1':
    weekday = '周二';
    break;

    case '2':
    weekday = '周三';
    break;

    case '3':
    weekday = '周四';
    break;

    case '4':
    weekday = '周五';
    break;

    case '5':
    weekday = '周六';
    break;

    case '6':
    weekday = '周日';
    break;
  }
  
  minutes.length == 1? minutes = `0${minutes}`: '';
  day.length == 1? day = ` ${day}`: '';
  month.length == 1? month = ` ${month}`: '';
  hours.length == 1? hours = ` ${hours}`: '';
  
  if (
    now.getFullYear() == date.getFullYear() &&
    now.getMonth() == date.getMonth() && 
    now.getDate() == date.getDate()
  ) {
    return `${hours}:${minutes}`;
  }

  if (
    now.getFullYear() == date.getFullYear() &&
    now.getMonth() == date.getMonth() && (
      (
	now.getDate() - date.getDate() == 1
      ) || (
	date.getDate() - now.getDate() == 6
      )
    )
  ) {
    return `昨天 ${hours}:${minutes}`
  }

  if (
    now.getFullYear() == date.getFullYear() &&
      now.getMonth() == date.getMonth() && 
      now.getDate() - now.getDay() == date.getDate() - date.getDay()
  ) {
    return `${weekday} ${hours}:${minutes}`;
  }

  if (
    now.getFullYear() == date.getFullYear() &&
      now.getMonth() == date.getMonth() &&
      now.getDate() - date.getDate() > 6
  ) {
    return `${month}月 ${hours}:${minutes}`;
  }

  
  return `${year}年 ${month}月 ${day}日`;
}
