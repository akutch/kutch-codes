import { trigger, transition, style, animate } from '@angular/animations';

export const slideLeftRightAnimation = trigger(
    'slideLeftRightAnimation',
    [
        transition(
            ':enter', [
                style({ opacity: 0, transform: 'translateX(50%)' }),
                animate(
                    '300ms ease-in-out',
                    style({ opacity: 1, transform: 'translateX(0)' })
                )
            ]
        ),
        transition(
            ':leave', [
                style({ opacity: 1, transform: 'translateX(0)' }),
                animate(
                    '300ms ease-in-out',
                    style({ opacity: 0, transform: 'translateX(50%)' }),
                )
            ]
        )
    ]
);
