import cls from 'classnames';

import type { RatingType } from '@/types';

const Rating = ({
  value = 0,
  max = 5,
  onChange,
  color = 'warning',
  size = 'md',
  half = false,
  shape = 'star-2',
  disabled = false,
  readonly = false,
  name = 'rating-group',
  className
}: RatingType) => {
  const itemsCount = half ? max * 2 : max;

  return (
    <div
      className={cls(
        'rating',
        {
          'rating-half': half,
          [`rating-${size}`]: Boolean(size)
        },
        className
      )}
    >
      {/* Hidden input to reset rating to 0 */}
      <input
        type='radio'
        name={name}
        className='rating-hidden'
        checked={value === 0}
        disabled={disabled || readonly}
        onChange={() => !readonly && onChange?.(0)}
      />

      {Array.from({ length: itemsCount }).map((_, idx) => {
        const itemValue = half ? (idx + 1) / 2 : idx + 1;
        const isHalf1 = half && idx % 2 === 0;
        const isHalf2 = half && idx % 2 === 1;

        return (
          <input
            key={`rating-item-${itemValue}`}
            type='radio'
            name={name}
            value={itemValue}
            checked={value === itemValue}
            disabled={disabled || readonly}
            onChange={() => !readonly && onChange?.(itemValue)}
            className={cls('mask', `mask-${shape}`, {
              'mask-half-1': isHalf1,
              'mask-half-2': isHalf2,
              [`bg-${color}`]: Boolean(color)
            })}
          />
        );
      })}
    </div>
  );
};

export default Rating;
