import { useState } from 'react';
import cls from 'classnames';

import type { CalendarType } from '@/types';

const WEEKDAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'] as const;
const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
] as const;

const parseDateParts = (dateStr?: string) => {
  if (dateStr && /^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
    const [y, m, d] = dateStr.split('-').map(Number);
    return { year: y, month: m - 1, day: d };
  }
  const now = new Date();
  return {
    year: now.getFullYear(),
    month: now.getMonth(),
    day: now.getDate()
  };
};

const formatDate = (year: number, month: number, day: number) => {
  const mm = String(month + 1).padStart(2, '0');
  const dd = String(day).padStart(2, '0');
  return `${year}-${mm}-${dd}`;
};

const Calendar = ({
  value,
  onChange,
  minDate,
  maxDate,
  color = 'primary',
  className
}: CalendarType) => {
  const initial = parseDateParts(value);
  const [viewYear, setViewYear] = useState<number>(initial.year);
  const [viewMonth, setViewMonth] = useState<number>(initial.month);

  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const startDay = new Date(viewYear, viewMonth, 1).getDay();

  const blankSlots = Array.from({ length: startDay }, (_, i) => i);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const handlePrevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else {
      setViewMonth((m) => m - 1);
    }
  };

  const handleNextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else {
      setViewMonth((m) => m + 1);
    }
  };

  const isDateDisabled = (dateStr: string) => {
    if (minDate && dateStr < minDate) return true;
    if (maxDate && dateStr > maxDate) return true;
    return false;
  };

  return (
    <div
      className={cls(
        'cally bg-base-100 border border-base-300 shadow-lg rounded-box p-4 w-72',
        className
      )}
      role='group'
      aria-label='Calendar'
    >
      <div className='flex items-center justify-between mb-3'>
        <button
          type='button'
          aria-label='Previous month'
          onClick={handlePrevMonth}
          className='btn btn-xs btn-ghost btn-square'
        >
          ‹
        </button>
        <span className='font-semibold text-sm'>
          {MONTHS[viewMonth]} {viewYear}
        </span>
        <button
          type='button'
          aria-label='Next month'
          onClick={handleNextMonth}
          className='btn btn-xs btn-ghost btn-square'
        >
          ›
        </button>
      </div>
      <div className='grid grid-cols-7 gap-1 text-center text-xs opacity-60 mb-1'>
        {WEEKDAYS.map((day) => (
          <span key={day}>{day}</span>
        ))}
      </div>
      <div className='grid grid-cols-7 gap-1'>
        {blankSlots.map((slot) => (
          <span key={`blank-${slot}`} />
        ))}
        {days.map((day) => {
          const dateStr = formatDate(viewYear, viewMonth, day);
          const isSelected = value === dateStr;
          const disabled = isDateDisabled(dateStr);

          return (
            <button
              key={dateStr}
              type='button'
              disabled={disabled}
              aria-pressed={isSelected}
              onClick={() => onChange?.(dateStr)}
              className={cls('btn btn-xs btn-square', {
                [`btn-${color}`]: isSelected,
                'btn-ghost': !isSelected
              })}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
